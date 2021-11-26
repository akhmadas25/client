import React, { useContext } from "react";

import logo from "../assets/image/icon.png";
import { UserContext } from "../context/userContext";

function Navbar() {
  const [state, dispatch] = useContext(UserContext);
  if (state.user.status === "admin") {
    return (
      <div>
        <nav class="navbar navbar-admin navbar-dark bg-dark">
          <div class="navbar-nav">
            <img src={logo} alt={logo} style={{ height: 50 }} />
          </div>
          <div class="dropdown">
            <a
              href="#"
              class="text-decoration-none dropdown-toggle"
              id="dropdownUser1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                alt="mdo"
                width="32"
                height="32"
                class="rounded-circle"
              />
            </a>
            <ul
              class="dropdown-menu text-small"
              aria-labelledby="dropdownUser1"
            >
              <li>
                <a class="dropdown-item" href="#">
                  New project...
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  } else {
    return (
      <nav class="navbar navbar-user navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <div class="navbar-nav">
            <a class="nav-link active" href="#">
              Profile
            </a>
            <a class="nav-link active" href="#">
              My Collection
            </a>
            <a class="nav-link active" href="#">
              Add Literatur
            </a>
            <a class="nav-link active" href="#">
              Logout
            </a>
          </div>
          <div className="text-end">
            <img src={logo} alt={logo} style={{ height: 50 }} />
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
