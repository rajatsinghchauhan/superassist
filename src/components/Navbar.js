import React from "react";
import logo from "../logo-text.e6f7617c.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav
        class="navbar fixed-top navbar-expand-sm  bg-light fw-bold"
        aria-label="Third navbar example"
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src={logo}
              alt="Logo"
              width="90"
              height="35"
              class="d-inline-block align-text-top"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarsExample03">
            <ul class="navbar-nav me-auto mb-2 mb-sm-0">
              <li class="nav-item dropdown mx-2">
                <a
                  class="nav-link dropdown-toggle ml-3 mr-5"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Signature
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Form Approval
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      SheetGod
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="#">
                  Guides
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Templates
                </a>
              </li>
            </ul>
            <div class=" mr-3 ml-3">
              <button
                class="btn btn-outline-success pl-3 pr-3 mr-3 ml-3 fw-bold"
                type="submit"
              >
                Install Me
              </button>
            </div>

            <button class="btn btn-primary px-3 mx-5 fw-bold">
              BoloForms Premium
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
