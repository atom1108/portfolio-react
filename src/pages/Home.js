import './App.css';
import React from 'react';
import { Link } from "react-router-dom";
import { useTitle } from '../hooks/UseTitle';


function NavCard(props){
  return(
    <Link className='hp-card neon-border-purple' to={props.link}>
      <h4 className='neon-text-white'>{props.text}</h4>
      <img alt='Website Logo' src={require(`../images/DarkMode_WebPortfolioLogo512.png`)}></img>
    </Link>
  );
}


function Home() {
  useTitle("Home");

  // Check if user is mobile or not
  var isTouchScreen = 'ontouchstart' in window || navigator.msMaxTouchPoints;


  if(isTouchScreen === true){
    console.log("TOUCH SCREEN");
    return(
      <div>
        <h2 className='WIP_text'>WORK IN PROGRESS</h2>
        <div className='mobile-hp-card-container'>
          <div className='mobile-hp-card-group'>
            <NavCard text="All Projects" link="projects"/>
            <NavCard text="Photography" link="projects/photography"/>
            <NavCard text="About" link="about"/>
          </div>
        </div>
      </div>
    );
  }

  // Is NOT touchscreen
  return (
    <div>
      <h2 className='WIP_text'>WORK IN PROGRESS</h2>
      <div className='hp-card-container'>
        <div className='hp-card-group'>
          <NavCard text="All Projects" link="projects"/>
          <NavCard text="Photography" link="projects/photography"/>
          <NavCard text="About" link="about"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
