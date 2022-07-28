import { useContext } from "react";
import { Context } from "../../App";

import { Mousewheel, Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { shuffle, theme, Button } from "../../utils";

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
          delay: 3000,
          disableOnInteraction: true,
        }}
        modules={[Autoplay, Mousewheel, Navigation]}
        className="mySwiper"
      >
        {user.map((s, index) => (
          <SwiperSlide className="items">
            <img
              className="item-image"
              src={`./images/${s.src}`}
              alt="images"
              onClick={() => onClickVote(s.address)}
            />
            <h1 className="below-txt">득표수 {s.balance} </h1>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
