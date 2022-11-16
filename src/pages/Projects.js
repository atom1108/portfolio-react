import './App.css';
import React from 'react';
import { Link } from "react-router-dom";
import { useTitle } from '../hooks/UseTitle';


const POHTOGRAPHY_TEXT = "Some photos I have taken with my Canon EOS 1100D. Mostly urban wildlife and plants, as they seem to be the most readily available subject on short notice."
// const GAME_TEXT = "A HTML5 rhythm game I made form scratch in JavaScript as a hobby project. All art was done myself, though the music is 'Run against the universe' by Komiku, which is in the public domain."
// https://commons.wikimedia.org/wiki/File:Komiku_-_07_-_Run_against_the_universe.ogg
const WEBGL_GAME_TEXT = "A WebGL game made with Unity. Currently partially in development, and very broken."

// The Section of the project rectangle contatining an image
function ImageSection(props){
    return (
        <div className='project_img '>
            <img src={require(`../images/${props.imageName}`)}
            alt={props.alt}
            />
        </div>
    );
}

// The Section of project rectangle containing text
function TextSection(props){
    return (
        <div className='project_txt'>
            <h1>{props.headline}</h1>
            <p>{props.text}</p>
        </div>
    );
}

// The project rectangle containing an image and text
function Project(props){
    if(props.imageSide === "left"){ // If the image is on the left
        return(
            <Link className='project-link' to={props.link}>
                <div className='project'>
                    <ImageSection alt={props.alt} imageName={props.imageName}/>
                    <TextSection headline={props.headline} text={props.text}/>
                </div>
            </Link>
        );    
    }
    else{ // If the image is on the right
        return(
            <Link className='project-link' to={props.link}>
                <div className='project'>
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
            <h1>Projects</h1>
        </div>
        <div className='full-w-flex-col'>
            <Project imageSide="left" 
            link={"photography"} 
            alt={"Photography"} 
            headline="Photography" 
            imageName={"Birds.jpg"}
            text={POHTOGRAPHY_TEXT}
            />
            {/* <Project imageSide="right" 
            link={"rhythm"} 
            alt={"Rhythm Game"} 
            headline="Rhythm Game" 
            imageName={"game_screenshot.png"}
            text={GAME_TEXT}
            /> */}
            <Project imageSide="right" 
            link={"topdown"} 
            alt={"WebGL Game"} 
            headline="WebGL Game" 
            imageName={"topdown_SC.png"}
            text={WEBGL_GAME_TEXT}
            />
        </div>
    </div>
  );
}

export default Projects;
