import React from "react";
import custstar from "./svgfiles/timer_reviews.c0a05474.svg";
const Custumer = () => {
  return (
    <div className="container">
      <h1>Customers Who Are Trusting Us!</h1>
      <img
        class="img-responsive img-rounded "
        src={custstar}
        width="1100"
        height="1100"
      />
    </div>
  );
};

export default Custumer;
