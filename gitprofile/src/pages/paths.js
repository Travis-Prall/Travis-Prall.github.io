import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Art from "./art";
import NoPage from "./nopage";


const Paths = (props) =>
    <Routes>
      <Route exact path="" element={<Home />} />
      <Route index element={<Home resumeData={props.resumeData}  />} />
        <Route path="art" element={<Art />} />
        <Route path="*" element={<NoPage />} />
    </Routes>

export default Paths;