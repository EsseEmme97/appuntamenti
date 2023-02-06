import "/src/styles.css";
import CreateAppointment from "./CreateAppointment";
import React, { useState } from "react";
import Appointment from "./Appointment.jsx";
import Navbar from "./Navbar.jsx";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [collection, setCollection] = useState([]);
  const [hour, setHour] = useState(["11.00", "12.00", "13.00"]);
  const [createAppointment, setCreateAppointment] = useState(false);

  function displayAppointment() {
    setCreateAppointment((prev) => !prev);
  }

  function createCollection(element) {
    setCollection((prev) => [...prev, element]);
    console.log(collection);
  }

  function addAvailableHours(hoursToAdd) {
    setHour((prev) => prev.concat(hoursToAdd).sort());
  }

  function deleteAppointment(id) {
    const appointmentToDelete = collection[id];
    setCollection((prev) => prev.filter((el, index) => index !== id));
    addAvailableHours([appointmentToDelete.orario]);
  }

  return (
    <div>
      <Navbar displayAppointment={displayAppointment} />
      <div className="row">
        <AnimatePresence>
          {createAppointment && (
            <CreateAppointment
              createCollection={createCollection}
              setHour={setHour}
              hour={hour}
            />
          )}
        </AnimatePresence>
      </div>
      <div className="appointments-container">
        {collection.map((singleItem, index) => (
          <Appointment
            key={index}
            id={index}
            name={singleItem.name}
            pratica={singleItem.pratica}
            orario={singleItem.orario}
            deleteAppointment={deleteAppointment}
          ></Appointment>
        ))}
      </div>
    </div>
  );
}
