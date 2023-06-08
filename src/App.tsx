import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom'


import QuotesPage from './QuotesPage';
import CommentsPage from './CommentsPage';





function App() {
  return (

    <div className="App">
      <header className="App-header">
        <Link to='/'>Home</Link>
        <Link to='/quotes'>Quotes</Link>
        <Link to='/comments'>Comments</Link>
        <Link to='/socialmedia'>Social Media</Link>
      </header>
    </div>

  );
}

export default App;
