import React from 'react'; //import React Component
import { Navigate, Route, Routes } from "react-router-dom";
import { Comparison } from './Comparison';
import { HomePage } from './HomePage';
import { Major } from './Major';
import { MajorDetail } from './MajorDetail';
import { Status } from './Status';
import { Converter } from './Converter';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="main" />} />
        <Route path="*" element={<Navigate to="main" />} />
        <Route path="main" element={<HomePage />} />
        <Route path="comparison" element={<Comparison />} />
        <Route path="major" element={<Major />} />
        <Route path="majorDetail" element={<MajorDetail />} />
        <Route path="status" element={<Status />} />
        <Route path="converter" element={<Converter />} />
      </Routes>
    </div>
  );
}

export default App;