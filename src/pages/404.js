import './App.css';
import React from 'react';
import { useTitle } from '../hooks/UseTitle';


function PageNotFound() {
  useTitle("404");
  return (
    <div className='page-not-found'>
      <h1>404</h1>
      <h2>Page not Found</h2>
      <p>Either I haven't gotten around to finishing this part, or you did something weird</p>
    </div>
  );
}

export default PageNotFound;
