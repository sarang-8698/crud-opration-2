/* eslint-disable no-unused-vars */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3031/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();

  const handleDelete = (id) => {
    const confirm = window.confirm("Would you like to delete?");
    if (confirm) {
      axios
        .delete(`http://localhost:3031/users/${id}`)
        .then(() => {
          setData(data.filter((user) => user.id !== id)); // Update state instead of reloading the page
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
        <h1>List of Users</h1>
        <div className="w-75 rounded bg-white border shadow p-4">
          <div className="d-flex justify-content-end">
            <Link to="/Create" className="btn btn-success">
              Add +
            </Link>
          </div>
          <table className="table table-striped">
            <thead>
              <tr>
                <td>User ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {data.map((res) => {
                const { id, name, email, phone } = res;
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td>
                      <Link
                        to={`/Update/${id}`}
                        className="btn btn-sm btn-primary mx-3 me-2"
                      >
                        Edit
                      </Link>
                      <Link
                        to={`/Read/${id}`}
                        className="btn btn-sm btn-info mx-3 me-2"
                      >
                        Read
                      </Link>
                      <button
                        onClick={() => handleDelete(id)} // Correct usage of function call
                        className="btn btn-sm btn-danger mx-3"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
