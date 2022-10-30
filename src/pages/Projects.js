import './App.css';
import React from 'react';
import { Link } from "react-router-dom";
import { useTitle } from '../hooks/UseTitle';


const POHTOGRAPHY_TEXT = "Some photos I have taken with my Canon EOS 1100D. Mostly urban wildlife and plants, as they seem to be the most readily available subject on short notice."
const GAME_TEXT = "A HTML5 rhythm game I made form scratch in JavaScript as a hobby project. All art was done myself, though the music is 'Run against the universe' by Komiku, which is in the public domain."
// https://commons.wikimedia.org/wiki/File:Komiku_-_07_-_Run_against_the_universe.ogg

function ImageSection(props){
    return (
        <div className='inline-flex w-0 md:w-1/2 lg:w-full '>
            <img src={require(`../images/${props.imageName}`)}
            className="object-cover rounded-xl"
            alt={props.alt}
            />
        </div>
    );
}

function TextSection(props){
    return (
        <div className='px-5 py-5 w-full'>
            <h1 className='text-custom-teal text-center text-xl mb-3'>{props.headline}</h1>
            <p className='text-custom-tan'>{props.text}</p>
        </div>
    );
}

function Project(props){
    if(props.imageSide === "left"){
        return(
            <Link to={props.link}>
                <div className='flex bg-[#40275D] rounded-lg w-2/3 h-96 mx-auto my-5 '>
                    <ImageSection alt={props.alt} imageName={props.imageName}/>
                    <TextSection headline={props.headline} text={props.text}/>
                </div>
            </Link>
        );    
    }
    else{
        return(
            <Link to={props.link}>
                <div className='flex bg-[#40275D] rounded-lg w-2/3 h-96 mx-auto my-5'>
                    <TextSection headline={props.headline} text={props.text}/>
                    <ImageSection alt={props.alt} imageName={props.imageName}/>
                </div>
            </Link>
        );
    }
    
}

function Projects() {
  useTitle("Projects");
  return (
    <div>
        <div>
            <h1 className='text-center text-custom-teal text-5xl mb-5'>Projects</h1>
        </div>
        <div className='flex flex-col w-full'>
            <Project imageSide="left" 
            link={"photography"} 
            alt={"Photography"} 
            headline="Photography" 
            imageName={"Birds.jpg"}
            text={POHTOGRAPHY_TEXT}
            />
            <Project imageSide="right" 
            link={"rhythm"} 
            alt={"Rhythm Game"} 
            headline="Rhythm Game" 
            imageName={"game_screenshot.png"}
            text={GAME_TEXT}
            />
        </div>
    </div>
  );
}

export default Projects;
