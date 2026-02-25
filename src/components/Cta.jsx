import React from "react";
import { categories } from "../util/cta";
import "./styles/Cta.scss";

const Cta = () => {
  return (
    <div className="cta-inner">
      <ul className="cta-list">
        {categories.map((c, index) => (
          <li 
            key={c.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <a href={c.href}>
              <div
                className="img-wrap"
                style={{ backgroundImage: `url(${c.img.src})` }}
              ></div>
              <p>{c.name}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cta;