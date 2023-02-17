import React from "react";
import cust from "./svgfiles/repa.483a1471.jpeg";
import custstar from "./svgfiles/Stars.885edd0c.svg";

const ReviewCard = () => {
  return (
    <div>
      <div className="container mt-5">
        <div class="card shadow-lg mb-5 bg-body-tertiary rounded border-0">
          <div class="row g-0">
            <div class="col-md-4 px-3 py-4">
              <img
                src={cust}
                style={{ width: "150px" }}
                class="img-fluid rounded-circle"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <div class="d-flex flex-column mb-3">
                  <div class="p-2 py-0 my-0">
                    <img
                      class="img-responsive img-rounded float-start"
                      src={custstar}
                      width="100"
                      height="50"
                    />
                  </div>
                  <div class="p-2">
                    <p class="card-text text-start">
                      "Boloforms has been an absolute lifesaver for me. It makes
                      workflow tasks much easier and helps to ensure that
                      everything runs smoothly. I love how it automates tasks
                      and eliminates manual processes, saving me time and
                      effort. It's a great Google Workflow software and is well
                      worth the money!"
                    </p>
                    <h4 class="text-start">Repa Mandala</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
