import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Admin = (props) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEmployees = [...props.employees];
    console.log(newEmployees);
    const newId = newEmployees.length;
    if (name !== "" && lastName !== "" && position !== "") {
      const addEmployees = {
        id: newId,
        name: name,
        lastname: lastName,
        position: position,
      };
      newEmployees.push(addEmployees);
      props.setEmployees(newEmployees);
      setName("");
      setLastName("");
      setPosition("");
    } else alert("please fill in the blank");
  };

  const handleDelete = (delId) => {
    const newEmployees = props.employees.filter((employee) => {
      return employee.id !== delId;
    });

    for (let i = 0; i < newEmployees.length; i++) {
      newEmployees[i].id = i;
    }

    props.setEmployees(newEmployees);
  };

  const handleDeleteAll = () => {
    props.setEmployees([]);
  };

  return (
    <div className="d-flex flex-column justify-content-center">
      <h1 className="display-5 fw-bold  text-center">Create User Here</h1>
      <div className="d-flex gap-5 justify-content-center align-items-center mt-2">
        <form
          onSubmit={handleSubmit}
          className="d-flex gap-5 justify-content-center align-items-center"
        >
          <div className="input-group mb-3">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              name="postion"
              placeholder="Position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-success mb-auto">
            Save
          </button>
        </form>
      </div>
      <div className="d-flex gap-5 justify-content-center mt-5">
        <div className="w-75">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Last Name</th>
                <th>Position</th>
                <th>Action</th>
                <th>
                  <div class="d-grid">
                    <button
                      onClick={handleDeleteAll}
                      class="btn btn-danger w-full"
                    >
                      Clear
                    </button>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {props.employees.map((employee) => {
                return (
                  <tr key={employee.id}>
                    <td>{employee.name}</td>
                    <td>{employee.lastname}</td>
                    <td>{employee.position}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(employee.id)}
                        className="btn btn-outline-danger"
                      >
                        Delete
                      </button>
                    </td>
                    <td></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
