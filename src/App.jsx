import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom"; 
import Header from "../component/Homepage/Header";
import Cards from "../component/Homepage/Cards";
import Header3 from "../component/Homepage/Header3";
import Footer from "../component/Homepage/Footer";
import Login from "../component/Login/Login"; 

const App = () => {
  const location = useLocation(); // Get the current location

  return (
    <>
      {/* Conditionally render the Header based on the current path */}
      {location.pathname !== "/login" && <Header />}
      <Routes>
        <Route path="/" element={<><Cards /><Header3 /></>} />
        <Route path="/login" element={<Login />} /> 
      </Routes>
      {/* Conditionally render Footer only if not on the login page */}
      {location.pathname !== "/login" && <Footer />}
    </>
  );
};

// Wrap the entire App component in the Router
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
