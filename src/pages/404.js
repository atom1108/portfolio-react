import './App.css';
import React from 'react';

function PageNotFound() {
  return (
    <div className='text-center'>
      <h1 className=' text-custom-teal text-5xl mb-5 font-bold'>404</h1>
      <p className='text-custom-tan text-xl my-5'>Page not Found</p>
      <p className='text-custom-tan'>Either I haven't gotten around to finishing this part, or you did something weird</p>
    </div>
  );
}

export default PageNotFound;
