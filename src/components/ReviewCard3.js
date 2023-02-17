import React from "react";
import cust from "./svgfiles/deepak.e041dab0.jpeg";
import custstar from "./svgfiles/Stars.885edd0c.svg";
const ReviewCard3 = () => {
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
                      "Easy to use interface and timely support...looking for
                      more features"
                    </p>
                    <h4 class="text-start">Deepak S (Solero Corporation)</h4>
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

export default ReviewCard3;
