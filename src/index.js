import React from 'react';
import ReactDOM from 'react-dom/client';
import  {HashRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import PageNotFound from './pages/404';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Rhythm from './pages/Rhythm';
import Topdown from './pages/Topdown';

const root = ReactDOM.createRoot(document.getElementById('root'));

/// WITHOUT GOOGLE ANALYTICS ///

root.render(
  <React.StrictMode>
    <HashRouter>
      <Navbar/>
      <main>
        <Routes>
          <Route path="" element={<Home/>} />
          <Route path='projects/' element={<Projects/>} />
          <Route path='about/' element={<About/>} />
          <Route path='projects/rhythm/' element={<Rhythm/>} />
          <Route path='projects/topdown/' element={<Topdown/>} />
          <Route path='projects/photography' element={<Gallery/>} />
          <Route path='*' element={<PageNotFound/>} />
        </Routes>
      </main>
    </HashRouter>
  </React.StrictMode>
);


/// WITH GOOGLE ANALYTICS ///
// import GA4React from "ga-4-react";
// OLD const ROOT_PATH = "portfolio-react/";
// const ga4react = new GA4React("G-9RTW1QE6CK");
// (async _ => {
  
//   await ga4react.initialize()
//   .then(res => console.log("Analytics Success."))
//   .catch(err => console.log("Analytics Failure."))
//   .finally(() => {
//     root.render(
//       <React.StrictMode>
//         <HashRouter>
//           <Navbar/>
//           <Routes>
//             <Route path="" element={<Home/>} />
//             <Route path='projects/' element={<Projects/>} />
//             <Route path='about/' element={<About/>} />
//             <Route path='projects/rhythm/' element={<Rhythm/>} />
//             <Route path='projects/topdown/' element={<Topdown/>} />
//             <Route path='projects/photography' element={<Gallery/>} />
//             <Route path='*' element={<PageNotFound/>} />
//           </Routes>
//         </HashRouter>
//       </React.StrictMode>
//     );
//   });
// })();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
