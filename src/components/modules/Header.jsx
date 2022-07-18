import { useContext } from "react";
import { Context } from "../../App";

export default function Header() {
  const { account, onClickConnect } = useContext(Context);
  const parseAddress = (address = "") => {
    return `${address.slice(0, 4)}...${address.slice(39)}`;
  };
  return (
    <header className="header">
      <div className="info">
        <ul className="ranking">
          {/* <div className="title">실시간 인기쟁이</div> */}
          <li>
            <div className="item">
              <div>김휘종 50PKB </div>
              <div className="item-image">
                <img src={`./images/김휘종.png`} alt="images" />
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <div>김태양 45PKB </div>
              <div>
                <img src={`./images/김태양.png`} alt="images" />
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <div>김준호 35pkb </div>
              <div>
                <img src={`./images/김준호.png`} alt="images" />
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <div>류기혁 5 </div>
              <div>
                <img src={`./images/류기혁.png`} alt="images" />
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <div>이현재 1 </div>
              <div>
                <img src={`./images/이현재.png`} alt="images" />
              </div>
            </div>
          </li>
        </ul>
        <div className="help">
          <div>
            {parseAddress(account)}
            <button onClick={onClickConnect}>지갑연결</button>
          </div>
          <div>shift + 스크롤 : 좌우 이동</div>
          <div>ctrl + 스크롤 : 확대</div>
        </div>
      </div>
      <div className="character">
        <img src="./images/pinkbean.gif" alt="npc" />
      </div>
    </header>
  );
}
