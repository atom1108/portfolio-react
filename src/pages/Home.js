import './App.css';
import React from 'react';
import CC from '../components/CC';
import { useTitle } from '../hooks/UseTitle';

function Home() {
  useTitle("Home");

  return (
    <div>
      <h1>Hello :)</h1>
      <h2>Welcome to my portfolio</h2>
      <h2 className='WIP_text'>WORK IN PROGRESS</h2>
      <CC/>
      </div>
  );
}

export default Home;
