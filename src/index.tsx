import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import QuotesPage from './QuotesPage';
import CommentsPage from './CommentsPage';
import { Provider } from 'react-redux';

import store from './stores/store'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
        <Provider store={store}>
  <Router>
    <Routes>
      <Route path="/"  Component={App}> </Route>
      <Route path="/quotes"  Component={QuotesPage}> </Route>
      <Route path="/comments" Component={CommentsPage}></Route>
   </Routes>
  </Router>
  </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
