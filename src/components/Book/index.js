import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Book() {
  return (
    <div className="book">
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 text-left">
            <h4>Book Title</h4>
          </div>
          <div className="col-6 text-right">
            <button className="btn-primary btn-md">View</button>
            &nbsp;
            <button className="btn-success btn-md">Save</button>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-left">
            <h6>Dolore nisi nulla laboris in cupidatat aute eiusmod aliquip cupidatat in dolor in.</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-left">
            -- <i>By Author</i>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-3 text-center">
            <img className="bookImg"></img>
          </div>

          <div className="col-9">
            <p>Aliquip irure aute officia officia laboris ex sint labore labore exercitation. Velit in enim Lorem et. Adipisicing est quis enim anim duis adipisicing mollit laboris. Pariatur anim nostrud eu aliquip. Lorem mollit cupidatat proident eu incididunt duis anim deserunt sunt minim sint deserunt. Veniam in pariatur magna esse eu velit id exercitation consequat reprehenderit eu.
Commodo dolor duis qui enim eu reprehenderit nostrud nulla commodo deserunt velit magna eu. Laboris fugiat labore id id qui dolor officia proident veniam pariatur do irure velit culpa. Quis aute sint fugiat Lorem irure qui duis nostrud sint quis esse pariatur adipisicing. Amet excepteur eu minim id ipsum aliqua. Ea do ut sit velit exercitation consequat ad cillum officia nulla.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Book;
