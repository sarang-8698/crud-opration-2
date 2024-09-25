/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Create from "./Component/Create";
import Read from "./Component/Read";
import Update from "./Component/Update";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/Update/:id" element={<Update />} />
          <Route path="/Read/:id" element={<Read />} />  
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
