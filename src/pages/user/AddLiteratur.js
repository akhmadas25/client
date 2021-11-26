import React from "react";
import Navbar from "../../components/Navbar";
import "../../assets/stylesheets/home.css";

function AddLiteratur() {
  return (
    <div className="container-fluid main bg-dark text-light">
      <div className="ms-3 me-3">
        <Navbar />
        <div className="header ms-3 my-3 ">
          <h1>Add Literatur</h1>
          <input className="form-control bg-secondary mt-3" type="text" />
          <input className="form-control bg-secondary mt-3" type="text" />
          <input className="form-control bg-secondary mt-3" type="text" />
          <input className="form-control bg-secondary mt-3" type="text" />
          <input className="form-control bg-secondary mt-3" type="text" />
          <div className="col-md-3">
            <input className="form-control bg-secondary mt-3" type="file" />
          </div>
        </div>
        <div className="text-end mt-5">
          <button className="btn btn-danger text-light px-5">
            Add Collection
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddLiteratur;
