import React from "react";
import "./HeroPage.css";

const HeroPage = () => {
  return (
    <div class=" mt-5">
      <div style={{ marginTop: "150px" }} class="container text-center ">
        <div class="row mt-5">
          <div class="col">
            <h1 class="text-start mb-4">
              Transform Google Forms Into Interactive Workflows
            </h1>
            <p class="text-start">
              BoloForms is a Google Forms add on that allows you to add
              conditional logic to your forms. With BoloForms, you can create
              interactive workflows, approval flows & automate processes.
            </p>
            <div class="text-start">
              <button class="btn btn-primary px-3  ">BoloForms Premium</button>
            </div>
          </div>
          <div class="col mx-0 px-0">
            <iframe
              className=" border-primaryyy "
              width="520"
              height="325"
              src="https://www.youtube.com/embed/riiUkCRpIio"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
