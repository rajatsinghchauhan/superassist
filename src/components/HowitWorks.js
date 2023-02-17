import React from "react";
import "./HowitWorks.css";
import svg1 from "./svgfiles/1.b2cc23b0.svg";
import svg2 from "./svgfiles/2.2709e204.svg";
import svg3 from "./svgfiles/3.1a7ec00e.svg";
const HowitWorks = () => {
  return (
    <div>
      <h1>How does BoloForms work?</h1>
      <p>Set up your first workflow in just 3 easy steps</p>

      <div class="container ">
        <div class="row">
          <div class="col-md-4  ">
            <img
              class=" img-responsive img-rounded zoom"
              src={svg1}
              width="400"
              height="400"
            />
            <h1> Step 1:</h1>
            <p>
              Choose a template or add questions to create your Google Form.
            </p>
          </div>
          <div class="col-md-4 ">
            <img
              class="img-responsive img-rounded zoom"
              src={svg2}
              width="400"
              height="400"
            />
            <h1> Step 2:</h1>
            <p>
              Enable Single/Multi Step approval and add necessary approvers!
            </p>
          </div>
          <div class="col-md-4 ">
            <img
              class="img-responsive img-rounded zoom"
              src={svg3}
              width="400"
              height="400"
            />
            <h1> Step 3:</h1>
            <p>Now you can enable the workflow and share the Google Form.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowitWorks;
