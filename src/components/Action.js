import React from "react";
import swal from "sweetalert";
import { API } from "../config/api";

export const Action = ({ item }) => {
  const handleAprove = async () => {
    try {
      const id = item.id;
      const data = { status: "verified" };

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const body = JSON.stringify(data);
      await API.patch(`/literatur/${id}`, body, config);
      
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = async () => {
    try {
      const id = item.id;
      const data = { status: "cancel" };

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const body = JSON.stringify(data);
      await API.patch(`/literatur/${id}`, body, config);
      
    } catch (error) {
      console.log(error);
    }
  };

  if (item.status === "verified") {
    return <i class="fas fa-check-circle fa-2x text-success"></i>;
  } else if (item.status === "waiting for verified") {
    return (
      <>
        <button
          type="button"
          className="btn btn-danger px-3 text-light"
          onClick={handleCancel}
        >
          cancel
        </button>
        <button
          type="button"
          className="btn btn-success px-3 ms-3 text-light"
          onClick={handleAprove}
        >
          aprove
        </button>
      </>
    );
  } else if (item.status === "cancel") {
    return <i class="fas fa-times-circle text-danger fa-2x"></i>;
  }
};
