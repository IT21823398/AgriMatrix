import React from "react";
import { Routes, Route } from "react-router-dom";

//imported pages
import LandingPage from "./LandingPage";

const App = () => {
    return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    );
  };
  
  export default App;