import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./home";
import Art from "../art";
import { NoPage } from "./nopage";

export const Paths = (resumeData) => (
  <Routes>
    <Route exact path="" element={<Home />} />
    <Route index element={<Home {...resumeData} />} />
    <Route path="art" element={<Art resumeData={resumeData} />} />
    <Route path="*" element={<NoPage />} />
  </Routes>
);
