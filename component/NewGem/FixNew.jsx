import React from "react";
import "../../Styles/NewGem/FindNew.CSS";
import Cards from "../Homepage/Cards";
import FixFooter from "./FixFooter";

const FindNew = () => {
  return (
    <div className="find-new-container">
      <div className="background-image">
        <div className="text-overlay">
          <div className="action-buttons">
            <span className="action-text">Find New Location</span>
            <span className="action-text">Mark New Location</span>
          </div>
          <h1 className="title">Destinations</h1>
          <p className="description">
            Saudi Arabia is rich in heritage and history. The country is home to
            hundreds of historically important sites.
          </p>
        </div>
      </div>
      <div>
        <Cards />
      </div>
      <div>
        <FixFooter />
      </div>
    </div>
  );
};

export default FindNew;
