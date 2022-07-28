import { useContext } from "react";
import { Context } from "../../App";

import { Mousewheel, Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { shuffle } from "../../utils";

export default function Main() {
  const { account, user, iface, onClickVote } = useContext(Context);

  return (
    <div className="content">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={50}
        navigation={true}
        mousewheel={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Mousewheel, Navigation]}
        className="mySwiper"
      >
        {shuffle(user).map((s, index) => (
          <SwiperSlide className="items">
            <img
              className="item-image"
              src={`./images/${s.src}`}
              alt="images"
            />
            <button className="vote-btn" onClick={() => onClickVote(s.address)}>
              투표
            </button>
            <h1>득표수 {s.balance}</h1>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
