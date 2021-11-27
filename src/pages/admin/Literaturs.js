import React, { useContext, useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import "../../assets/stylesheets/table.css";
import { API } from "../../config/api";
import swal from "sweetalert";
import { Action } from "../../components/Action";

function Literaturs() {
  const [literaturs, setLiteraturs] = useState();
  const getLiteraturs = async () => {
    try {
      const response = await API.get("/literaturs");

      setLiteraturs(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const Status = ({ item }) => {
    if (item.status === "verified") {
      return <p className="alert-success">{item.status}</p>;
    } else if (item.status === "waiting for verified") {
      return <p className="alert-warning">{item.status}</p>;
    } else {
      return <p className="alert-danger">{item.status}</p>;
    }
  };

  const updateLiteraturs = async () => {
    const response = await API.get("/literaturs");

    setLiteraturs(response.data.data);
  };

  useEffect(() => {
    getLiteraturs();
    updateLiteraturs();
  }, []);

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
          {literaturs?.map((item, index) => (
            <tbody item={item} key={index}>
              <tr className="text-center">
                <td>{item.author}</td>
                <td>{item.ISBN}</td>
                <td>
                  <p className="text-primary">{item.title}</p>
                </td>
                <td>
                  <Status item={item} />
                </td>
                <td className="text-center">
                  <Action item={item} />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Literaturs;
