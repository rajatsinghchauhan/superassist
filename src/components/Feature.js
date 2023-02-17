import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import ic1 from "./svgfiles/pr_agiledeploy.b988c9c8.svg";
import ic2 from "./svgfiles/pr_dyncaseroute.02285ff2.svg";
import ic3 from "./svgfiles/pr_dynbusrules.572419de.svg";
import ic4 from "./svgfiles/pr_socialtask.06e17c13.svg";
import ic5 from "./svgfiles/pr_visualprcdesign.0ff90171.svg";
import ic6 from "./svgfiles/pr_instaaccess.e822dad7.svg";
import ic7 from "./svgfiles/pr_intuserinter.41c7f4bc.svg";
import ic8 from "./svgfiles/pr_processoptim.f6216ec3.svg";
import ic9 from "./svgfiles/pr_dashboard.64597267.svg";
const Feature = () => {
  return (
    <div className="container">
      <div>
        <div class="row g-4 pt-5 row-cols-1 row-cols-lg-3">
          <div class="feature col">
            <div class="d-flex flex-column mb-3">
              <div class="p-2">
                <div>
                  <img
                    class="img-responsive img-rounded float-start zoom"
                    src={ic1}
                    width="50"
                    height="50"
                  />
                </div>
              </div>
              <div class="p-2">
                <h3 class="fs-2 text-start">
                  Get started in less than 5 minutes.
                </h3>
                <p className="text-start">
                  Just use an existing Google Form, add approvers, and we'll
                  notify them via email when submissions are made.
                </p>
              </div>
            </div>
          </div>
          <div class="feature col">
            <div class="d-flex flex-column mb-3">
              <div class="p-2">
                <div>
                  <img
                    class="img-responsive img-rounded zoom float-start "
                    src={ic2}
                    width="50"
                    height="50"
                  />
                </div>
              </div>
              <div class="p-2">
                <h3 class="fs-2 text-start">Multi-level workflows</h3>
                <p className="text-start">
                  To ensure that your executives do not approve a document until
                  it has been reviewed and accepted by other employees, you can
                  set up multi-level approval processes.
                </p>
              </div>
            </div>
          </div>
          <div class="feature col">
            <div class="d-flex flex-column mb-3">
              <div class="p-2">
                <div>
                  <img
                    class="img-responsive img-rounded zoom float-start "
                    src={ic3}
                    width="50"
                    height="50"
                  />
                </div>
              </div>
              <div class="p-2">
                {" "}
                <h3 class="fs-2 text-start">Dynamic Reciepients</h3>
                <p className="text-start">
                  Approvers can be selected based on the answers to a form
                  response or entered manually by the requestor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="row g-4  row-cols-1 row-cols-lg-3">
          <div class="feature col">
            <div class="d-flex flex-column mb-3">
              <div class="p-2">
                <div>
                  <img
                    class="img-responsive img-rounded float-start zoom"
                    src={ic4}
                    width="50"
                    height="50"
                  />
                </div>
              </div>
              <div class="p-2">
                <h3 class="fs-2 text-start">Role Based Workflows</h3>
                <p className="text-start">
                  Assign the following roles to your recipients: Approver,
                  Receive a Copy, and Send Final Email Only.
                </p>
              </div>
            </div>
          </div>
          <div class="feature col">
            <div class="d-flex flex-column mb-3">
              <div class="p-2">
                <div>
                  <img
                    class="img-responsive img-rounded zoom float-start "
                    src={ic5}
                    width="50"
                    height="50"
                  />
                </div>
              </div>
              <div class="p-2">
                <h3 class="fs-2 text-start">Conditional Logic</h3>
                <p className="text-start">
                  To prevent unnecessary work for approvers, set logic with your
                  approvals to ensure approvers only receive the requests that
                  are relevant to them
                </p>
              </div>
            </div>
          </div>
          <div class="feature col">
            <div class="d-flex flex-column mb-3">
              <div class="p-2">
                <div>
                  <img
                    class="img-responsive img-rounded zoom float-start "
                    src={ic6}
                    width="50"
                    height="50"
                  />
                </div>
              </div>
              <div class="p-2">
                {" "}
                <h3 class="fs-2 text-start">One-click Approvals</h3>
                <p className="text-start">
                  Notification emails are sent to users and can be approved with
                  a single click.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="row g-4  row-cols-1 row-cols-lg-3">
          <div class="feature col">
            <div class="d-flex flex-column mb-3">
              <div class="p-2">
                <div>
                  <img
                    class="img-responsive img-rounded float-start zoom"
                    src={ic7}
                    width="50"
                    height="50"
                  />
                </div>
              </div>
              <div class="p-2">
                <h3 class="fs-2 text-start">Responsive design</h3>
                <p className="text-start">
                  It is designed to be mobile-first, and seamlessly works on
                  desktop and tablet as well.
                </p>
              </div>
            </div>
          </div>
          <div class="feature col">
            <div class="d-flex flex-column mb-3">
              <div class="p-2">
                <div>
                  <img
                    class="img-responsive img-rounded zoom float-start "
                    src={ic8}
                    width="50"
                    height="50"
                  />
                </div>
              </div>
              <div class="p-2">
                <h3 class="fs-2 text-start">Enterprise grade security</h3>
                <p className="text-start">
                  Majority of data stored in your spreadsheet. This ensures you
                  have the complete control of your data with end to end
                  encryption.
                </p>
              </div>
            </div>
          </div>
          <div class="feature col">
            <div class="d-flex flex-column mb-3">
              <div class="p-2">
                <div>
                  <img
                    class="img-responsive img-rounded zoom float-start "
                    src={ic9}
                    width="50"
                    height="50"
                  />
                </div>
              </div>
              <div class="p-2">
                {" "}
                <h3 class="fs-2 text-start">Custom Dashboard</h3>
                <p className="text-start">
                  Track approvals of various forms from a single place! See the
                  approval process for each request in real-time
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
