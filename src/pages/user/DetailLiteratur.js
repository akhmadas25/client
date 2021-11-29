import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import view from "../../assets/image/bigView.png";
import { API } from "../../config/api";
import { useParams } from "react-router";
import swal from "sweetalert";

function DetailLiteratur() {
  const [literatur, setLiteratur] = useState([]);

  const { id } = useParams();
  const getLiteratur = async () => {
    try {
      const response = await API.get(`/literatur/${id}`);
      setLiteratur(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addCollection = async () => {
    try {
      const data = { literaturId: id };

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const body = JSON.stringify(data);
      const response = await API.post("/addCollection", body, config);
      swal({
        title: response.data.message,
        icon: "success",
      });
    } catch (error) {
      console.log(error);
      swal({
        title: "server error",
        icon: "danger",
      });
    }
  };

  useEffect(() => {
    getLiteratur();
  }, []);

  return (
    <div className="container-fluid main bg-dark text-light">
      <div className="ms-3 me-3">
        <Navbar />
      </div>
      <div className="header ms-3 my-3 ">
        {literatur?.map((item, index) => (
          <div className="row ms-3" item={item} key={index}>
            <div className="col-md-4">
              <img src={view} />
            </div>
            <div className="col-md-5 ">
              <h2>{item.title}</h2>
              <h4 className="text-secondary">{item.author}</h4>
              <h4 className="mt-5">Publication date</h4>
              <h4 className="text-secondary">{item.publication_date}</h4>
              <h4 className="mt-5">Pages</h4>
              <h4 className="text-secondary">{item.pages}</h4>
              <h4 className="mt-5 text-danger">ISBN</h4>
              <h4 className="text-secondary">{item.ISBN}</h4>
              <button className="btn btn-danger px-5 py-3 mt-5">
                download
              </button>
            </div>
            <div className="col">
              <button
                className="btn btn-danger text-light px-5"
                onClick={addCollection}
              >
                Add My Collection
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailLiteratur;
