import React from "react";
import instar from "../util/instagram";
import './styles/Instagram.scss'

const Instagram = () => {
  return (
    <div className="inner instar-inner">
      <div className="t-wrap">
        <h2 className="tit">Instargram</h2>
        <p className="txt">@tocobo_official</p>
      </div>
      <ul className="instar-list">
        {instar.map((item)=>(
        <li>
          <a href="#" key={item.id}>
            <img src={item.image} alt="image" />
          </a>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default Instagram;
