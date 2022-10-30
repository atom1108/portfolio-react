import './App.css';
import React from 'react';
import CC from '../components/CC';
import { useTitle } from '../hooks/UseTitle';

function Home() {
  useTitle("Home");
  return (
    <div>
      <h1 className='text-center text-custom-teal text-5xl mb-5'>Hello :)</h1>
      <h1 className='text-center text-custom-tan text-xl'>Welcome to my portfolio</h1>
      <h1 className='text-center text-red-500 font-bold text-7xl my-10'>WORK IN PROGRESS</h1>
      <CC/>
      </div>
  );
}

export default Home;
