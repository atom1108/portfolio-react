import './App.css';
import React, { useEffect } from 'react';
import { useTitle } from '../hooks/UseTitle';

function Rhythm() {
  useTitle("Rhythm");

    // useEffect(() => {
    //     const script = document.createElement('script');

    //     script.src ="../scripts/game.js";
    //     script.async = true;

    //     document.body.appendChild(script);

    //     return () => {
    //         document.body.removeChild(script);
    //     }
    // }, []);

  return (
    <div>
      <h1 className='text-center text-custom-teal text-5xl mb-5'>Hello :)</h1>
      {/* <script src={require("../scripts/game.js")}></script> */}
      <h1 className='text-center text-red-500 font-bold text-7xl my-10'>WORKING PROGRESS</h1>
      <h1 className='text-center text-red-500 font-bold text-7xl my-10'>(not working yet)</h1>      
      {/* <CC/> */}
      </div>
  );
}

export default Rhythm;
