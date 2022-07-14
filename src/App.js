import { createContext, useState } from "react";
import { ethers } from "ethers";

// styles
import "./styles/App.scss";

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

  return (
    <Context.Provider
      value={{
        user,
        account,
        onClickConnect,
        setAccount,
        iface,
        provider,
      }}
    >
      <div className="layout">
        <MainTemplate />
      </div>
    </Context.Provider>
  );
}

export default App;
