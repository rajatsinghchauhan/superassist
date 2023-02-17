import React from "react";
import svg1 from "../1.890362c3.svg";
import svg2 from "../2.0b0df285.svg";
import svg3 from "../3.8cf4b5f3.svg";
import svg4 from "../4.b84353dc.svg";
const UsedBy = () => {
  return (
    <div className="mb-5">
      <h1 style={{ marginTop: "150px", marginBottom: "30px" }}>
        BoloForms Is Used By
      </h1>

      <div class=" service-1">
        <div class="container">
          <div class="row">
            <div class="col-md-3  ">
              <img src={svg1} width="300" height="200" alt="wrapkit" />
            </div>
            <div class="col-md-3 ">
              <img src={svg2} width="300" height="200" alt="wrapkit" />
            </div>
            <div class="col-md-3 ">
              <img src={svg3} width="300" height="200" alt="wrapkit" />
            </div>
            <div class="col-md-3">
              <img src={svg4} width="300" height="200" alt="wrapkit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsedBy;
