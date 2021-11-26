import React from "react";
import Navbar from "../../components/Navbar";
import view from "../../assets/image/bigView.png";

function DetailLiteratur() {
  return (
    <div className="container-fluid main bg-dark text-light">
      <div className="ms-3 me-3">
        <Navbar />
      </div>
      <div className="header ms-3 my-3 ">
        <div className="row ms-3">
          <div className="col-md-4">
            <img src={view} />
          </div>
          <div className="col-md-5 ">
            <h2>Sistem Informasi Standar BAN-PT</h2>
            <h4 className="text-secondary">Haris Astina</h4>
            <h4 className="mt-5">Publication date</h4>
            <h4 className="text-secondary">April 2020</h4>
            <h4 className="mt-5">Pages</h4>
            <h4 className="text-secondary">234</h4>
            <h4 className="mt-5 text-danger">ISBN</h4>
            <h4 className="text-secondary">756745353</h4>
            <button className="btn btn-danger px-5 py-3 mt-5">download</button>
          </div>
          <div className="col">
            <button className="btn btn-danger text-light px-5">
              Add My Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailLiteratur;
