import React from "react";
import Navbar from "../../components/Navbar";
import view from "../../assets/image/view.png";

function SearchPage() {
  return (
    <div className="container-fluid main bg-dark text-light">
      <div className="ms-3 me-3">
        <Navbar />
        <div className="header ms-3 my-3 ">
            <div className="row"></div>
          <div className="col-md-4">
            <input className="form-control bg-secondary mt-3" type="text" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
