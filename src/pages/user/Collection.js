import React from "react";
import view from "../../assets/image/view.png";
import Navbar from "../../components/Navbar";

function Collection() {
  return (
    <div className="container-fluid main bg-dark text-light">
      <div className="ms-3 me-3">
        <Navbar />
        <div className="header ms-3 my-3 ">
          <h1>My Collection</h1>
          <div className="row mt-5">
            <div className="col-md-3">
              <img src={view} style={{ width: 200 }} />
              <h4 className="mt-3">Management Sistem</h4>
            </div>
            <div className="col-md-3">
              <img src={view} />
              <h4 className="mt-3">Management Sistem</h4>
            </div>
            <div className="col-md-3">
              <img src={view} />
              <h4 className="mt-3">Management Sistem</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
