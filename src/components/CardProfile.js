import React, { useState, useEffect } from "react";
import mail from "../assets/icon/mail.png";
import phone from "../assets/icon/phone.png";
import gender from "../assets/icon/gender.png";
import location from "../assets/icon/location.png";
import picture from "../assets/image/profile.jpg";
import "../assets/stylesheets/home.css";
import { API } from "../config/api";

function CardProfile() {
  const [profile, setProfile] = useState([]);
  const getProfile = async () => {
    try {
      const response = await API.get("/profile/literatur");
      setProfile(response.data.profile);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(profile);

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      {profile?.map((item, index) => (
        <div item={item} key={index} className="card profile py-3 my-3">
          <div className="row mt-3">
            <div className="col-md-5 ms-3 me-5 mt-2 text-start">
              <div className="row">
                <div className="col-md-2 text-end">
                  <img src={mail} alt={mail} style={{ marginTop: 15 }} />
                </div>
                <div className="col">
                  <p>{item.email}</p>
                  <p className="text-secondary" style={{ marginTop: -18 }}>
                    mail
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2 text-end">
                  <img src={gender} alt={gender} style={{ marginTop: 15 }} />
                </div>
                <div className="col">
                  <p>male</p>
                  <p className="text-secondary" style={{ marginTop: -18 }}>
                    gender
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2 text-end">
                  <img src={phone} alt={phone} style={{ marginTop: 15 }} />
                </div>
                <div className="col">
                  <p>{item.phone}</p>
                  <p className="text-secondary" style={{ marginTop: -18 }}>
                    phone
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2 text-end">
                  <img
                    src={location}
                    alt={location}
                    style={{ marginTop: 15 }}
                  />
                </div>
                <div className="col my-0">
                  <p>{item.address}</p>
                  <p className="text-secondary" style={{ marginTop: -18 }}>
                    address
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4" />
            <div className="col-md-2 text-end">
              <div className="row mt-3">
                <img src={picture} alt="picture" />
                <button className="btn btn-danger mt-3">change profile</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CardProfile;
