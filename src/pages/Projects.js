import './App.css';
import React from 'react';
import { Link } from "react-router-dom";

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
        <div className=' w-full'>
            <h1 className='text-custom-tan text-center text-xl'>{props.headline}</h1>
        </div>
    );
}

function Project(props){
    if(props.imageSide === "left"){
        return(
            <Link to={props.link}>
                <div className='flex bg-[#40275D] rounded-lg w-2/3 h-96 mx-auto my-5 '>
                    <ImageSection alt={props.alt} imageName={props.imageName}/>
                    <TextSection headline={props.headline}/>
                </div>
            </Link>
        );    
    }
    else{
        return(
            <Link to={props.link}>
                <div className='flex bg-[#40275D] rounded-lg w-2/3 h-96 mx-auto my-5'>
                    <TextSection headline={props.headline} />
                    <ImageSection alt={props.alt} imageName={props.imageName}/>
                </div>
            </Link>
        );
    }
    
}

function Projects() {
  return (
    <div>
        <div>
            <h1 className='text-center text-custom-teal text-5xl mb-5'>Projects</h1>
        </div>
        <div className='flex flex-col w-full'>
            <Project imageSide="left" link="/photography" alt={"Photography"} headline="Photography" imageName={"Birds.jpg"}/>
            <Project imageSide="right" link="/rhythm" alt={"Rhythm Game"} headline="Rhythm Game" imageName={"game_screenshot.png"}/>
        </div>
    </div>
  );
}

export default Projects;
