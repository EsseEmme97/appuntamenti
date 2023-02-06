import React, { useState } from "react";

function Appointment(props) {
  return (
    <div className="">
      <p className="">{props.name}</p>
      <p className="">{props.pratica}</p>
      <p className="">{props.orario}</p>
      <button
        className="btn btn-danger"
        onClick={(e) => {
          props.deleteAppointment(props.id);
          e.preventDefault();
        }}
      >
        delete
      </button>
    </div>
  );
}

export default Appointment;
