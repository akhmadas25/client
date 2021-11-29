import React, { useContext, useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import logo from "../../assets/image/icon.png";
import searchButton from "../../assets/icon/search.png";
import view from "../../assets/image/view.png";
import "../../assets/stylesheets/home.css";
import { UserContext } from "../../context/userContext";
import { API } from "../../config/api";
import SearchPage from "../../components/SearchPage";

function Home() {
  const [literaturs, setLiteraturs] = useState([]);
  const [result, setResult] = useState([]);
  const [form, setForm] = useState({
    title: "",
  });

  const handleChange = (e) => {
    setForm({
      [e.target.name]: [e.target.value],
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const body = JSON.stringify(form);
      const response = await API.post("/literaturs/search", body, config);
      setResult(response.data.literaturs);
      getLiteraturs();
    } catch (error) {
      console.log(error);
    }
  };

  const getLiteraturs = () => {
    setLiteraturs(result);
  };

  console.log();

  useEffect(() => {
    getLiteraturs();
  }, []);

  return (
    <div className="container-fluid main bg-dark text-light">
      <div className="ms-3 me-3">
        <Navbar />
        {literaturs.length < 1 ? (
          <>
            <div className="container header text-center">
              <img src={logo} alt={logo} style={{ height: 100 }} />
              <form onSubmit={handleSubmit}>
                <div class="row justify-content-center">
                  <div class="col-md-5">
                    <input
                      type="text"
                      className="form-control bg-secondary"
                      placeholder="search for literation"
                      name="title"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-1 ms-0">
                    <button type="submit" className="btn btn-danger">
                      search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </>
        ) : (
          <>
            {literaturs?.map((item, index) => (
              <SearchPage item={item} key={index} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
