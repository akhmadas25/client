import React, { useContext } from "react";
import Navbar from "../../components/Navbar";
import { UserContext } from "../../context/userContext";
import "../../assets/stylesheets/table.css";

function Literaturs() {
  return (
    <div className="container-fluid main px-0">
      <Navbar />

      <div className="container-fluid text-start pe-5 pt-5">
        <h3 className="container px-0">Book Verification</h3>
        <table
          className="table table-hover container mt-3"
          id="Table"
          striped
          bordered
          hover
        >
          <thead className="text-center">
            <th>No</th>
            <th>User or author</th>
            <th>ISBN</th>
            <th>Literatur</th>
            <th>Status</th>
            <th>Action</th>
          </thead>
          <tbody>
            <tr className="text-center">
              <td>user</td>
              <td>0834562563</td>
              <td className="text-primary">Sistem Informasi Berbasis Web</td>
              <td>waiting for verified</td>
              <td className="text-center">
                <button
                  type="button"
                  className="btn btn-danger px-3 text-light"
                >
                  cancel
                </button>
                <button
                  type="button"
                  className="btn btn-success px-3 ms-3 text-light"
                >
                  aprove
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Literaturs;
