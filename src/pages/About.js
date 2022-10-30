import './App.css';
import React from 'react';
import CC from '../components/CC';
import { useTitle } from '../hooks/UseTitle';

function About() {
  useTitle("About");
  return (
    <div className='mx-10'>
      <h1 className='text-center text-custom-teal text-5xl mb-5'>About</h1>
      <h1 className='text-center text-custom-tan text-xl'>This is the "portfolio" of Aidan Thompson (nice to meet you). 
      It was made from scratch with React as a procrastination project to escape from University work, and I decided to share some hobbies and previous works here. 
      <br/>
      This site will change as I find time to work on it, and parts may be added or removed, because why not.
      <br/>
      Cheers for making this free, GitHub.
      </h1>
      
      </div>
  );
}

export default About;
