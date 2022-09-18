import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import Art from '../art';
import NoPage from './nopage';

export function Paths(props) {
  return (
    <Routes>
      <Route exact path='' element={<Home />} />
      <Route index element={<Home resumeData={props.resumeData} />} />
      <Route path='art' element={<Art resumeData={props.resumeData} />} />
      <Route path='*' element={<NoPage />} />
    </Routes>
  );
}

export default Paths;
