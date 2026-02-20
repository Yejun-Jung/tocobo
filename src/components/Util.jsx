import React from "react";
import { headerData } from "../util/header";

const Util = () => {
  const { utils } = headerData;

  return (
    <ul className="util-list">
      {utils.map((u) => (
        <li key={u.id}>
          <a href={u.href}>
            <img src={u.icon} alt={u.label} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Util;
