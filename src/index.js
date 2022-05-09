import React from 'react';
import ReactDOM from 'react-dom/client';
import  {BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import PageNotFound from './pages/404';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import Gallery from './pages/Gallery';

const ROOT_PATH = "portfolio-react/";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path={ROOT_PATH} element={<Home/>} />
        <Route path={ROOT_PATH+'projects/'} element={<Projects/>} />
        <Route path={ROOT_PATH+'projects/photography'} element={<Gallery/>} />
        <Route path={'*'} exact element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
