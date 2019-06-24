import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function PageTitle() {
  return (
    <div className="pageTitle">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>(React) Google Books Search</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h3>Search for and save books of interest</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageTitle;
