/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState({}); // Use an empty object instead of an array

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3031/users/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
        <div className="w-50 border bg-white shadow px-5 pb-5 rounded">
          <h1>Detail Of User</h1>
          <div className="mb-2">
            <strong>Name: {data.name}</strong>
          </div>
          <div className="mb-2">
            <strong>Email: {data.email}</strong>
          </div>
          <div className="mb-2">
            <strong>Phone: {data.phone}</strong>
          </div>
          <Link to={`/update/${id}`} className="btn btn-success">
            Edit
          </Link>
          <Link to={`/`} className="btn btn-primary">
            Back
          </Link>
        </div>
      </div>
    </>
  );
};

export default Read;
