import Layout from "./Layout";
import "./styles/app.css";
import { useState, useEffect } from "react";
import Admin from "./Admin";
import User from "./User";
import "bootstrap/dist/css/bootstrap.min.css";

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: "mocklastname",
    position: "Manager",
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer",
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer",
  },
];

const Home = () => {
  const [employees, setEmployees] = useState(mockEmployees);
  const [sector, setSector] = useState("");

  // useEffect(() => {
  //   setSector("other");
  // }, []);

  if (sector === "admin") {
    return (
      <div className="home-bg">
        <Layout>
          <div className="px-4 my-5 text-center">
            <h1 className="display-5 fw-bold text-body-emphasis text-center">
              Generation Thailand
            </h1>
            <h1 className="display-5 fw-bold text-body-emphasis text-center">
              Home - Admin Sector
            </h1>
            <div className="d-flex gap-5 justify-content-center py-5">
              <button
                onClick={() => {
                  setSector("user");
                }}
                className="btn btn-primary rounded-pill px-3"
              >
                User Home Sector
              </button>
              <button
                onClick={() => {
                  setSector("admin");
                }}
                className="btn btn-light rounded-pill px-3 active"
              >
                Admin Home Sector
              </button>
            </div>
          </div>
          <Admin employees={employees} setEmployees={setEmployees} />
        </Layout>
      </div>
    );
  } else if (sector === "user") {
    return (
      <div className="home-bg">
        <Layout>
          <div className="px-4 my-5 text-center">
            <h1 className="display-5 fw-bold text-body-emphasis text-center">
              Generation Thailand
            </h1>
            <h1 className="display-5 fw-bold text-body-emphasis text-center">
              Home - User Sector
            </h1>
            <div className="d-flex gap-5 justify-content-center py-5">
              <button
                onClick={() => {
                  setSector("user");
                }}
                className="btn btn-primary rounded-pill px-3 active"
              >
                User Home Sector
              </button>
              <button
                onClick={() => {
                  setSector("admin");
                }}
                className="btn btn-outline-primary rounded-pill px-3"
              >
                Admin Home Sector
              </button>
            </div>
          </div>
          <User employees={employees} />
        </Layout>
      </div>
    );
  } else {
    return (
      <div className="home-bg">
        <Layout>
          <div className="px-4 my-5 text-center">
            <h1 className="display-5 fw-bold text-body-emphasis text-center">
              Generation Thailand
            </h1>
            <h1 className="display-5 fw-bold text-body-emphasis text-center">
              React Assessment
            </h1>
            <div className="d-flex gap-5 justify-content-center py-5">
              <button
                onClick={() => {
                  setSector("user");
                }}
                className="btn btn-primary rounded-pill px-3"
              >
                User Home Sector
              </button>
              <button
                onClick={() => {
                  setSector("admin");
                }}
                className="btn btn-outline-primary rounded-pill px-3 "
              >
                Admin Home Sector
              </button>
            </div>
          </div>
        </Layout>
      </div>
    );
  }
};

export default Home;
