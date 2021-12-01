import React, { useContext, useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import logo from "../../assets/image/icon.png";
import searchButton from "../../assets/icon/search.png";
import view from "../../assets/image/view.png";
import "../../assets/stylesheets/home.css";
import { UserContext } from "../../context/userContext";
import { API } from "../../config/api";
import SearchPage from "../../components/SearchPage";
import { createBrowserHistory } from "history";

function Home() {
  const [literaturs, setLiteraturs] = useState([]);
  const [result, setResult] = useState([]);
  const [form, setForm] = useState({
    title: "",
    year: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
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
      console.log(response);
      setLiteraturs(response.data.literaturs);
      setResult(response.data.literaturs);
      // getLiteraturs();
    } catch (error) {
      console.log(error);
    }
  };

  const handleYear = async (e) => {
    setForm({
      ...form,
      [e.target.name]: [e.target.value],
    });
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const body = JSON.stringify(form);
    const response = await API.post("/literaturs/search", body, config);
    console.log(response);
    setLiteraturs(response.data.literaturs);
    // getLiteraturs();
  };

  const filterYear = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const body = JSON.stringify(form);
    const response = await API.post("/literaturs/search", body, config);
    console.log(response);
    setResult(response.data.literaturs);
    getLiteraturs();
  };

  const getLiteraturs = async () => {
    setLiteraturs(result);
  };

  console.log(form);

  useEffect(() => {
    getLiteraturs();
  }, []);

  return (
    <div className="container-fluid main bg-dark text-light">
      <div className="ms-3 me-3">
        <Navbar />
        {result.length < 1 ? (
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
            <form onChange={handleYear}>
              <div className="header my-3 ms-3 ">
                <div className="row">
                  <div className="col-md-4 mt-3">
                    <input
                      className="form-control bg-secondary "
                      name="title"
                      value={form.title}
                      type="text"
                    />
                  </div>
                  <div className="col-md-1 mt-3">
                    <img
                      src={searchButton}
                      alt="search-button"
                      style={{ height: 40 }}
                    />
                  </div>
                </div>
                <div className="row  my-5">
                  <div className="col-md-2 me-5">
                    <h5 className="text-danger ms-3">Anytime</h5>

                    <select
                      class="form-select bg-secondary "
                      aria-label="Default select example"
                      name="year"
                      onChange={handleYear}
                    >
                      <option value="2021">Since 2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                      <option value="2017">2017</option>
                      <option value="2016">2016</option>
                    </select>
                  </div>
                  <div className="col-md-9 ms-3">
                    <div className="row">
                      {literaturs?.map((item, index) => (
                        <SearchPage item={item} key={index} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
