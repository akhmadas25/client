import React from "react";
import view from "../assets/image/view.png";
import searchButton from "../assets/icon/search.png";

function SearchPage({ item }) {
  return (
    <div className="header my-3 ms-3 ">
      <div className="row">
        <div className="col-md-4 mt-3">
          <input className="form-control bg-secondary " type="text" />
        </div>
        <div className="col-md-1 mt-3">
          <img src={searchButton} alt="search-button" style={{ height: 40 }} />
        </div>
      </div>
      <div className="row  mt-5">
        <div className="col-md-2 me-5">
          <h5 className="text-danger ms-3">Anytime</h5>
          <select
            class="form-select bg-secondary "
            aria-label="Default select example"
          >
            <option selected>Since 2020</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="col-md-9 ms-3">
          <div className="row">
            <div className="col-md-3">
              <img src={view} style={{ width: 200 }} />
              <h3 className="mt-3">contoh sistem informasi</h3>
              <div className="row">
                <div className="col-md-5">
                  <h4 className="text-secondary">ahmed ali</h4>
                </div>
                <div className="col-md-6">
                  <h4 className="text-secondary text-end">2020</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
