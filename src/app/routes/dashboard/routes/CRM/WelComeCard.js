import React from "react";

const WelComeCard = () => {

  return (
    <div className="jr-wel-ema pt-xl-2">
      <h1 className="mb-3">Welcome Ema!</h1>
      <p className="jr-fs-sm text-uppercase">You Have</p>
      <ul className="list-unstyled">
        <li className="mb-1">
          <i className="zmdi zmdi-notifications-none zmdi-hc-fw zmdi-hc-lg mr-2"/>
          <span>3 notifications</span>
        </li>
      </ul>
    </div>
  );
};

export default WelComeCard;
