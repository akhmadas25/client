import React, { useState, useEffect } from "react";
import { API } from "../../config/api";
import swal from "sweetalert";

function ForgotPassword() {
  const [form, setForm] = useState({
    email: "",
  });

  const onChange = (e) => {
    setForm({
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const body = JSON.stringify(form);
      console.log(body);

      // Insert data for login process
      const response = await API.post("/reset-password", body, config);
      console.log(response);
      swal({
        title: response.data.message,
        icon: "success"
      })
    } catch (error) {
      console.log(error);
      swal({
        title: "email not found",
        icon: "warning"
      })
    }
  };

  return (
    <div className="container-fluid main bg-dark">
      <div className="container text-center pt-5">
        <div className="row d-flex justify-content-center mt-5">
          <div className="card bg-slight py-5  col-md-3">
            <form onSubmit={handleSubmit}>
              <h1 class="h3 mb-3 fw-normal text-white">Forgot Password?</h1>
              <h5 className="text-secondary">enter your email</h5>
              <input
                type="email"
                class="form-control bg-secondary"
                id="floatingInput"
                name="email"
                onChange={onChange}
                placeholder="name@example.com"
              />

              <button class="w-100 btn btn-lg btn-primary py-0 mt-3" type="submit">
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
