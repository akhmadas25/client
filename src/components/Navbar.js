import React from "react";


import logo from "../assets/image/icon.png"

function Navbar() {
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
          <img src={logo} alt={logo} style={{height:50}} />
          </div>
      </div>
    </nav>
  );
}

export default Navbar;
