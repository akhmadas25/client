import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import { UserContext } from "../../context/userContext";
import { API } from "../../config/api";
import "../../assets/stylesheets/home.css";

function Signup() {
  const history = useHistory();
  const [state, dispatch] = useContext(UserContext);

  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  const { email, password, fullname, phone, address } = form;

  const onChange = (e) => {
    setForm({
      ...form,
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

      const response = await API.post("/register", body, config);
      console.log(response);
      // Checking process
      if (response?.status === 200) {
        // Send data to useContext

        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.data,
        });
      }

      swal({
        title: "Successfully registered!",
        icon: "success",
        button: "ok",
      });
      // Status check
      if (response.data.data.role === "admin") {
        history.push("/admin/literatur");
      } else {
        history.push("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button
        type="button"
        class="btn btn-danger px-5 me-5"
        data-bs-toggle="modal"
        data-bs-target="#ModalSignup"
      >
        Sign Up
      </button>

      <div
        class="modal fade"
        id="ModalSignup"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content bg-dark text-light">
            <form onSubmit={handleSubmit}>
              <div class="modal-body">
                <div class="modal-header">
                  <h3>Sign Up</h3>
                </div>
                <div className="row text-center mt-3 mx-2">
                  <div className="col text-light">
                    <input
                      class="form-control bg-secondary "
                      type="text"
                      value={fullname}
                      name="fullname"
                      onChange={onChange}
                      placeholder="fullname"
                    />
                    <input
                      class="form-control bg-secondary mt-3"
                      type="email"
                      value={email}
                      name="email"
                      onChange={onChange}
                      placeholder="email"
                    />
                    <input
                      class="form-control bg-secondary mt-3"
                      type="password"
                      name="password"
                      value={password}
                      onChange={onChange}
                      placeholder="password"
                    />
                    <input
                      class="form-control bg-secondary mt-3"
                      type="number"
                      value={phone}
                      name="phone"
                      onChange={onChange}
                      placeholder="number"
                    />
                    <input
                      class="form-control bg-secondary mt-3"
                      type="text"
                      value={address}
                      name="address"
                      onChange={onChange}
                      placeholder="address"
                    />
                  </div>
                </div>
              </div>

              <div className="text-center my-3">
                <button
                  type="submit"
                  class="btn btn-danger"
                  style={{ width: 430 }}
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
