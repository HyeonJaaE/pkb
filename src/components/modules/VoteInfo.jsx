import { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../../App";
import { parseAddress } from "../../utils";

const padNumber = (num, length) => {
  return String(num).padStart(length, "0");
};

export default function VoteInfo() {
  const { vote, account, criteriaTime, onClickConnect } = useContext(Context);
  // 아무것도 입력하지 않으면 undefined가 들어오기 때문에 유효성 검사부터..

  // const tempHour = criteriaTime.hour ? parseInt(criteriaTime.hour) : 0;
  // const tempMin = criteriaTime.min ? parseInt(criteriaTime.min) : 0;
  // const tempSec = criteriaTime.sec ? parseInt(criteriaTime.sec) : 0;
  const tempHour = 11;
  const tempMin = 26;
  const tempSec = 9;

  // 타이머를 초단위로 변환한 initialTime과 setInterval을 저장할 interval ref
  const initialTime = useRef(tempHour * 60 * 60 + tempMin * 60 + tempSec);
  const interval = useRef(null);

  const [hour, setHour] = useState(padNumber(tempHour, 2));
  const [min, setMin] = useState(padNumber(tempMin, 2));
  const [sec, setSec] = useState(padNumber(tempSec, 2));

  useEffect(() => {
    interval.current = setInterval(() => {
      initialTime.current -= 1;
      setSec(padNumber(initialTime.current % 60, 2));
      setMin(padNumber(parseInt((initialTime.current / 60) % 60), 2));
      setHour(padNumber(parseInt(initialTime.current / 60 / 60), 2));
    }, 1000);
    return () => clearInterval(interval.current);
  }, []);

  // 초가 변할 때만 실행되는 useEffect
  // initialTime을 검사해서 0이 되면 interval을 멈춘다.
  useEffect(() => {
    if (initialTime.current <= 0) {
      clearInterval(interval.current);
    }
  }, [sec]);

  useEffect(() => {});

  return (
    <div className="vote">
      {account ? (
        <>
          {parseAddress(account)}
          <div>남은 투표 수 {vote} 회</div>
          <div>
            투표 수 갱신까지 {hour} : {min} : {sec}
          </div>
        </>
      ) : (
        <div className="help">
          <div>
            <div>
              <button onClick={onClickConnect}>지갑연결</button>
            </div>
          </div>
        </div>
      )}
      <div className="help-image">
        <img
          style={{ width: "10vh", height: "10vh" }}
          src="./images/pinkbean.gif"
          alt="npc"
        />
      </div>
    </div>
  );
}
