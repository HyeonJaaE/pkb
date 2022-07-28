import { useContext } from "react";
import { Context } from "../../App";
import { parseAddress } from "../../utils";

export default function Header() {
  const { isLoading, user, account, onClickConnect } = useContext(Context);

  console.log({ user });
  return (
    <div className="header">
      <div className="title">Top 5</div>
      {isLoading && (
        <div className="loader-box">
          <img
            style={{ width: "10vh", height: "10vh" }}
            src="./images/pinkbean.gif"
            alt="npc"
          />
        </div>
      )}
      <ul className="ranking">
        {/* <div className="title">실시간 인기쟁이</div> */}
        {[...user]
          .sort((a, b) => b.balance - a.balance)
          .slice(0, 5)
          .map((u) => (
            <li>
              <div className="item">
                <div>
                  {u.name} {u.balance}PKB
                </div>
                <div className="item-image">
                  <img src={`./images/${u.src}`} alt="images" />
                </div>
              </div>
            </li>
          ))}
      </ul>
      {/* <div className="character"></div> */}
    </div>
  );
}
