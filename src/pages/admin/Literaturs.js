import React, { useContext } from "react";
import Navbar from "../../components/Navbar";
import { UserContext } from "../../context/userContext";
import "../../assets/stylesheets/table.css";

function Literaturs() {
  return (
    <div>
      <div className="container-fluid main text-dark">
        <div className="ms-3 me-3">
          <Navbar />
        </div>
        <div className="container-fluid text-start ms-3 pt-5">
          <h3>Incoming Transaction</h3>
          <table className="table" id="Table" className="bg-light" striped bordered hover>
            <thead>
              <th>No</th>
              <th>User</th>
              <th>Trip</th>
              <th>Transfer Proof</th>
              <th>Status Payment</th>
              <th>Action</th>
              <th>Action</th>
            </thead>
            <tbody>
              <tr>
                <td>user</td>
                <td>typeof itle</td>
                <td>coba</td>
                <td>coba</td>
                <td>coba</td>
                <td>coba</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Literaturs;
