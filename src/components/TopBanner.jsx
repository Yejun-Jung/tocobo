import React from "react";
import "./styles/TopBanner.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { headerData } from "../util/header";

const TopBanner = ({ onClick }) => {
  const tbData = headerData.topBanner.items;
  const closeBtn = headerData.topBanner.closeIcon;
  return (
    <div className="TopBanner">
      <Swiper
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{ delay: 3000 }}
        direction={"vertical"}
        modules={[Autoplay]}
      >
        {tbData.map((t) => (
          <SwiperSlide key={t.id}>
            <a href={t.href}>{t.text}</a>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="closeBtn" onClick={onClick}>
        <img src={closeBtn} alt="close btn" />
      </div>
    </div>
  );
};

export default TopBanner;
