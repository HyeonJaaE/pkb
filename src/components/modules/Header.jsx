import { useContext } from "react";
import { Context } from "../../App";
import { parseAddress } from "../../utils";

export default function Header() {
  const { account, onClickConnect } = useContext(Context);

  return (
    <div className="header">
      <div className="title">Top 5</div>
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
            <div>김준호 35PKB </div>
            <div>
              <img src={`./images/김준호.png`} alt="images" />
            </div>
          </div>
        </li>
        <li>
          <div className="item">
            <div>류기혁 5PKB </div>
            <div>
              <img src={`./images/류기혁.png`} alt="images" />
            </div>
          </div>
        </li>
        <li>
          <div className="item">
            <div>이현재 1PKB </div>
            <div>
              <img src={`./images/이현재.png`} alt="images" />
            </div>
          </div>
        </li>
      </ul>
      {/* <div className="character"></div> */}
    </div>
  );
}
