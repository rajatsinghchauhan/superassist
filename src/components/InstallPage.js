import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const InstallPage = () => {
  return (
    <div>
      <div className="container mb-5">
        <div class="d-flex justify-content-center">
          <div class="p-2 mr-5">
            <button type="button" class="btn btn-primary btn-lg mr-5">
              Install For Free
            </button>
          </div>
          <div class="p-2 ">
            <button type="button" class="btn btn-outline-secondary btn-lg">
              BoloForm Premium
            </button>
          </div>
        </div>

        <div>
          <div class="d-flex fw-bold mt-3">
            <div class="p-2 flex-fill">
              <i
                style={{
                  color: "#501a8a",
                  fontWeight: "bold",
                }}
                class="bi bi-check-lg"
              ></i>
              Trusted by 50000+ Businesses
            </div>
            <div class="p-2 flex-fill">
              {" "}
              <i
                style={{
                  color: "#501a8a",
                  fontWeight: "bold",
                }}
                class="bi bi-check-lg"
              ></i>
              30 Days Money Back Guarantee
            </div>
            <div class="p-2 flex-fill">
              {" "}
              <i
                style={{
                  color: "#501a8a",
                  fontWeight: "bold",
                }}
                class="bi bi-check-lg"
              ></i>
              1-1 Zoom & WhatsApp Onboarding
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallPage;
