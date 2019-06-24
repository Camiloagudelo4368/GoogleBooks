import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function BookSearch() {
  return (
    <div className="bookSearch">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center">
            <h2>Book Search</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <label>Book:</label>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <input type="text" style={{width:'100%'}}></input>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-right">
            <br></br>
            <button className="btn-primary btn-lg">Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookSearch;
