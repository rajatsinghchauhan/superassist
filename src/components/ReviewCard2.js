import React from "react";
import cust from "./svgfiles/alaa.a9f02030.jpeg";
import custstar from "./svgfiles/Stars.885edd0c.svg";
const ReviewCard2 = () => {
  return (
    <div>
      <div className="container my-5">
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
                      "Boloforms has changed the way my team and I work. We used
                      to have a very inefficient workflow, but Boloforms has
                      streamlined it and allowed us to get our daily tasks done
                      in a fraction of the time. Plus, it's incredibly user
                      friendly and easy to understand. I highly recommend
                      Boloforms for anyone who needs an efficient Google
                      workflow software!"
                    </p>
                    <h4 class="text-start">Alaa Khaled</h4>
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

export default ReviewCard2;
