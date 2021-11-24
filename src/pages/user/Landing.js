import React from "react";
import "../../assets/stylesheets/home.css";
import book from "../../assets/image/book.png";
import logo from "../../assets/image/icon.png";

function Landing() {
  return (
    <div className="container-fluid text-light bg-dark main">
      <div className="container">
        <img src={logo} alt={logo} />
        <div className="row">
          <div className="col">
            <div className="header">
              <h1 className="jumbotron">
                source <i> of </i> intellegence
              </h1>
            </div>
            <div className="sign-button mt-5">
              <button className="btn btn-danger text-lght px-5">Sign Up</button>
              <button className="btn btn-light px-5 ms-5">Sign In</button>
            </div>
          </div>
          <div className="col">
            <img src={book} alt={book} style={{ height: 500 }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
