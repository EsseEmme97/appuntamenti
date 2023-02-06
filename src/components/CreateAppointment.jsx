import React, { useState } from "react";
import { motion } from "framer-motion";

function CreateAppointment(props) {
  const [note, setNote] = useState({ name: "", pratica: "", orario: "" });

  function handleChange(event) {
    const nameOfField = event.target.name;
    const valueOfField = event.target.value;

    setNote((prev) => ({ ...prev, [nameOfField]: valueOfField }));
  }

  return (
    <motion.div
      className="mx-auto my-4 shadow rounded"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3>Inserisci</h3>
      <form>
        <div className="form-group px-2 my-2">
          <input
            name="name"
            type="text"
            placeholder="nome e cognome"
            className="form-control"
            value={note.name}
            onChange={handleChange}
            required="required"
          ></input>
        </div>
        <div className="form-group px-2 my-2">
          <input
            name="pratica"
            type="text"
            placeholder="tipo pratica"
            className="form-control"
            value={note.pratica}
            onChange={handleChange}
            required="required"
          ></input>
        </div>
        <div className="form-group px-2 my-2 ">
          <select
            name="orario"
            className="form-control form-select form-select-sm"
            value={note.orario}
            onChange={handleChange}
            required="required"
          >
            {props.hour.map((hour, index) => (
              <option key={index}>{hour}</option>
            ))}
          </select>
        </div>
        <button
          onClick={(e) => {
            props.createCollection(note);
            props.setHour((prev) => {
              return prev.filter((el) => el !== note.orario);
            });
            e.preventDefault();
            setNote({ name: "", pratica: "", orario: "" });
          }}
          className="btn btn-primary mb-3"
        >
          inserisci
        </button>
      </form>
    </motion.div>
  );
}

export default CreateAppointment;
