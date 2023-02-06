import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";

function Navbar(props) {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <p className="mt-3 text-muted" onClick={props.displayAppointment}>
          CREA UN NUOVO APPUNTAMENTO
        </p>
        <div className="ms-auto">
          <HomeIcon className="mx-3" />
          <LogoutIcon className="mx-3" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
