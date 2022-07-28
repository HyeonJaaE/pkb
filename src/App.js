import { createContext, useEffect, useMemo, useRef, useState } from "react";
import { BigNumber, ethers } from "ethers";

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
import { padNumber } from "./utils";
import { AbiCoder, formatEther, parseEther } from "ethers/lib/utils";

export const Context = createContext({});
const abiCoder = new AbiCoder();

function App() {
  const provider = new ethers.providers.JsonRpcProvider(JSON_RPC_URL);
  const instance = new ethers.Contract(PKB_CA, PKB_ABI, provider);
  const iface = instance.interface;
  const criteriaTime = new Date();
  const [vote, setVote] = useState();
  const [user, setUser] = useState(USER_DATA);
  const [account, setAccount] = useState();

  useEffect(() => {
    window.ethereum.on(
      "accountsChanged",
      async () => await accountChangeHandler()
    );
  }, []);

  const accountChangeHandler = async () => {
    console.log("hi");
    provider.off("block");
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(accounts[0]);

    provider.on("block", async () => {
      const newUser = [];
      for (let i = 0; i < user.length; i++) {
        const data = iface.encodeFunctionData("balanceOf(address)", [
          user[i].address,
        ]);
        const tx = { to: PKB_CA, data };

        const callData = await provider.call(tx);
        console.log(
          formatEther(abiCoder.decode(["uint256"], callData).toString())
        );
        newUser[i] = {
          ...user[i],
          balance: formatEther(
            abiCoder.decode(["uint256"], callData).toString()
          ),
        };
      }
      setUser(newUser);
    });

    provider.on("block", async () => {
      const data = iface.encodeFunctionData("getVote(address)", [accounts[0]]);
      const tx = { to: PKB_CA, data };

      const callData = await provider.call(tx);
      setVote(abiCoder.decode(["uint8"], callData));
    });
  };

  const onClickConnect = async () => {
    await accountChangeHandler();
  };

  const onClickVote = async (address) => {
    // 지갑 연결 체크

    // 트랜잭션 생성
    const data = iface.encodeFunctionData("mint(address)", [address]);
    window.ethereum
      .request({
        method: "eth_sendTransaction",
        params: [
          {
            from: account,
            to: PKB_CA,
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
        vote,
        user,
        iface,
        account,
        provider,
        setAccount,
        criteriaTime,
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
