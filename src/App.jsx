// src/App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { PostProvider } from "../context/PostContext.jsx"; // Ensure this path is correct
import Header from "../component/Homepage/Header";
import Cards from "../component/Homepage/Cards";
import Header3 from "../component/Homepage/Header3";
import Footer from "../component/Homepage/Footer";
import Login from "../component/Login/Login";
import SignUp from "../component/Signup/Signup.jsx";
import FindNew from "../component/NewGem/FixNew.jsx";
import NewLocation from "../component/NewGem/NewLocation.jsx";
import FixNew from "../component/NewGem/FixNew.jsx";

const App = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" &&
        location.pathname !== "/signup" &&
        location.pathname !== "/fix-new" &&
        location.pathname !== "/new-location" && <Header />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Cards />
              <Header3 />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/fix-new" element={<FixNew />} />
        <Route path="/new-location" element={<NewLocation />} />
        <Route path="/find-location" element={<FindNew />} />
      </Routes>

      {location.pathname !== "/login" &&
        location.pathname !== "/signup" &&
        location.pathname !== "/fix-new" &&
        location.pathname !== "/new-location" && <Footer />}
    </>
  );
};

export const AppWrapper = () => (
  <PostProvider>
    <Router>
      <App />
    </Router>
  </PostProvider>
);

export default AppWrapper;
