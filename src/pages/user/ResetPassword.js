import React, { useState } from "react";
import { useParams } from "react-router";
import swal from "sweetalert";
import { API } from "../../config/api";

function ResetPassword() {
  const { id, token } = useParams();
  const [form, setForm] = useState({
    password: "",
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
      const response = await API.patch(
        `/reset-password/${id}/${token}`,
        body,
        config
      );
      console.log(response);
      swal({
        title: response.data.message,
        icon: "success",
      });
      window.location="/"
      
    } catch (error) {
      console.log(error);
      swal({
        title: "link error or expired",
        icon: "warning",
      });
    }
  };
  return (
    <div className="contaainer-fluid main bg-dark">
      <div className="container">
        <div className="container text-center pt-5">
          <div className="row d-flex justify-content-center mt-5">
            <div className="card bg-slight py-5  col-md-3">
              <form onSubmit={handleSubmit}>
                <h1 class="h3 mb-3 fw-normal text-white">Reset Password</h1>
                <h5 className="text-secondary">enter your new password</h5>
                <input
                  type="password"
                  class="form-control bg-secondary"
                  id="floatingInput"
                  name="password"
                  onChange={onChange}
                />

                <button
                  class="w-100 btn btn-lg btn-primary py-0 mt-3"
                  type="submit"
                >
                  submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
