import './App.css';
import React from 'react';
import { Link } from "react-router-dom";
import CC from '../components/CC';
import { useTitle } from '../hooks/UseTitle';

function Home() {
  useTitle("Home");

  return (
    <div>
      {/* <h1>Yet Another Thompson</h1> */}
      {/* <h1>Hello :)</h1> */}
      {/* <h2>Welcome to my portfolio</h2> */}
      {/* <h2 className='WIP_text'>WORK IN PROGRESS</h2> */}
      <div className='hp-card-container'>
        <div className='hp-card-group'>
          <Link className='hp-card neon-border-purple' to={"projects"}>
            <div><h4 className='neon-text-white'>All Projects</h4></div>
          </Link>
          <Link className='hp-card neon-border-purple' to={"projects"}>
            <div><h4 className='neon-text-white'>Photography</h4></div>
          </Link>
          <Link className='hp-card neon-border-purple' to={"about"}>
            <div><h4 className='neon-text-white'>About</h4></div>
          </Link>
        </div>
      </div>
      <CC/>
      </div>
  );
}

export default Home;
