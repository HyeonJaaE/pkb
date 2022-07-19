import { createContext, useState } from "react";
import { ethers } from "ethers";

// styles
import "./styles/App.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// component
import MainTemplate from "./components/templates/MainTemplate";

// constants
import { USER_DATA } from "./constants/member";
import { JSON_RPC_URL, PKB_CA } from "./constants/env";
import PKB_ABI from "./abi/pkb.json";

export const Context = createContext({});

function App() {
  const provider = new ethers.providers.JsonRpcProvider(JSON_RPC_URL);
  const instance = new ethers.Contract(PKB_CA, PKB_ABI, provider);
  const iface = instance.interface;

  const [user, setUser] = useState(USER_DATA);
  const [account, setAccount] = useState();

  const onClickConnect = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log({ accounts });
    setAccount(accounts[0]);
  };

  const onClickVote = async () => {
    // 지갑 연결 체크

    // 트랜잭션 생성
    const data = iface.encodeFunctionData("mint", [account]);
    window.ethereum
      .request({
        method: "eth_sendTransaction",
        params: [
          {
            from: account,
            to: "0x31e23e18a6ab385a155c0c4c9e26a1fa3f7e2155",
            data,
          },
        ],
      })
      .then((decryptedMessage) =>
        console.log("The decrypted message is:", decryptedMessage)
      )
      .catch((error) => console.log(error.message));
  };

  return (
    <Context.Provider
      value={{
        user,
        iface,
        account,
        provider,
        setAccount,
        onClickConnect,
        onClickVote,
      }}
    >
      <div className="layout">
        <MainTemplate />
      </div>
    </Context.Provider>
  );
}

export default App;
