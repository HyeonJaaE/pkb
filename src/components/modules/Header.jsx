import { useContext } from "react";
import { Context } from "../../App";

export default function Header() {
  const { account, onClickConnect } = useContext(Context);

  return (
    <header className="header">
      <div className="info">
        <div className="title">실시간 인기쟁이</div>
        <div className="ranking">
          <ul>
            <li>김휘종 50PKB 🧑</li>
            <li>김휘종 50PKB 🧑</li>
            <li>김휘종 50PKB 🧑</li>
          </ul>
        </div>
        <div>
          <button onClick={onClickConnect}>지갑연결</button>
          <div>{account}</div>
          <div>shift + 스크롤 : 좌우 이동</div>
          <div>ctrl + 스크롤 : 확대</div>
        </div>
      </div>
      <img src="./images/pinkbean.gif" alt="npc" />
    </header>
  );
}
