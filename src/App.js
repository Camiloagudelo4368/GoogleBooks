import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import PageTitle from './components/PageTitle'
import BookSearch from './components/BookSearch'
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <div className="header">
        <NavBar ></NavBar>
      </div>
      <div className="container-fluid">
        <div className="title">
          <PageTitle></PageTitle>
        </div>
        <div className="search">
          <BookSearch></BookSearch>
        </div>
        <div className="result">
          <BookList></BookList>
        </div>
      </div>
    </div>
  );
}

export default App;
