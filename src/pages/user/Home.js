import React from "react";

import Navbar from "../../components/Navbar";
import logo from "../../assets/image/icon.png";
import "../../assets/stylesheets/home.css";

function Home() {
  return (
    <div className="container-fluid main bg-dark text-light">
      <div className="ms-3 me-3">
        <Navbar />
        <div className="container header text-center">
          <img src={logo} alt={logo} style={{height:100}} />
          <div class="row justify-content-center">
            <div class="col-md-5">
              <input
                type="text"
                class="form-control"
                placeholder="search for literation"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
