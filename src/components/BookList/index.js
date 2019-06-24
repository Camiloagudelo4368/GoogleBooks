import React from "react";
import "./style.css";
import Book from '../Book';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function BookList() {
  return (
    <div className="bookList">
      <Book></Book>
      <Book></Book>
      <Book></Book>
    </div>
  )
}

export default BookList;
