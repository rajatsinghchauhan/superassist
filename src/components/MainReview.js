import React from "react";
import custstar from "./svgfiles/Stars.885edd0c.svg";
import cust from "./svgfiles/patrick.4de6d5b1.jpeg";
const MainReview = () => {
  return (
    <div className="container my-5">
      <div
        class="card text-center"
        style={{ backgroundColor: "rgb(145, 91, 255)", color: "white" }}
      >
        <div class="card-body ">
          <h5 class="card-title mt-5 mx-5 px-5">
            {" "}
            “ Boloforms has completely revolutionized our form approval process.
            It is incredibly easy to use and simple to set up, saving us
            countless hours of work. We can now easily manage all of our form
            approvals, assign tasks to different team members and track progress
            all in one place. Boloforms is a must-have for any business looking
            for an efficient Form Approval Workflow Software! "
          </h5>
          <p class="card-text">
            <div class="p-2 py-0 my-0">
              <img
                class="img-responsive img-rounded "
                src={custstar}
                width="200"
                height="100"
              />
            </div>
          </p>

          <div class="d-flex flex-row justify-content-center">
            <div class="p-2">
              <img
                src={cust}
                style={{ width: "80px" }}
                class="img-fluid rounded-circle border border-3"
                alt="..."
              />
            </div>
            <div class="p-2 ">
              <p className="mt-3 mb-0 fw-bolder">Patrick Nyama,</p>
              <p>Edmonton CA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainReview;
