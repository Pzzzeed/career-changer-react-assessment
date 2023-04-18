import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const User = (props) => {
  return (
    <div className="d-flex gap-5 justify-content-center">
      <div className="w-75">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {props.employees.map((employee) => {
              return (
                <tr key={employee.id}>
                  <td>{employee.name}</td>
                  <td>{employee.lastname}</td>
                  <td>{employee.position}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
