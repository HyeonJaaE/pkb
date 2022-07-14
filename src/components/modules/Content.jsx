import { useContext } from "react";
import { Context } from "../../App";

export default function Main() {
  const { account, user, iface } = useContext(Context);

  return (
    <div className="content">
      {user.map((s, index) => (
        <div className="items">
          <img className="item-image" src={`./images/${s.src}`} alt="images" />
          <button
            onClick={() => {
              const data = iface.encodeFunctionData("mint", [account]);
              console.log({ data });
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
            }}
          >
            투표
          </button>
        </div>
      ))}
    </div>
  );
}
