import React from "react";
import { headerData } from "../util/header";

const Util = () => {
  const { utils } = headerData;

  return (
    <ul className="inner">
      {utils.map((item) => (
        <a href={item.href}>
          <img src={item.icon} alt={item.label} />
        </a>
      ))}
    </ul>
  );
};

export default Util;
