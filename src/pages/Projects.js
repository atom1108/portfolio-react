import "./App.css";
import React from "react";
import { useTitle } from "../hooks/UseTitle";
import LinkBox from "../components/LinkBoxImageText";

const POHTOGRAPHY_TEXT =
  "Some photos I have taken with my Canon EOS 1100D. Mostly urban wildlife and plants, as they seem to be the most readily available subject on short notice.";
// const GAME_TEXT = "A HTML5 rhythm game I made form scratch in JavaScript as a hobby project. All art was done myself, though the music is 'Run against the universe' by Komiku, which is in the public domain."
// https://commons.wikimedia.org/wiki/File:Komiku_-_07_-_Run_against_the_universe.ogg
// const WEBGL_GAME_TEXT =
//   "A WebGL game made with Unity. Currently partially in development, and very broken.";


function Projects() {
  useTitle("Projects");
  return (
    <div>
      <div>
        <h1>Projects</h1>
      </div>
      <div className="full-w-flex-col">
        <LinkBox
          imageside="left"
          link={"photography"}
          alt={"Photography"}
          headline="Photography"
          imageName={"Birds.jpg"}
          text={POHTOGRAPHY_TEXT}
        />
        <LinkBox
          imageside="right"
          link={"tensorflow"}
          alt={"tensorflow"}
          headline="Tensorflow"
          imageName={"Birds.jpg"}
          text={POHTOGRAPHY_TEXT}
        />
        {/* <LinkBox imageSide="right" 
            link={"rhythm"} 
            alt={"Rhythm Game"} 
            headline="Rhythm Game" 
            imageName={"game_screenshot.png"}
            text={GAME_TEXT}
            /> */}
        {/* <LinkBox
          imageside="right"
          link={"topdown"}
          alt={"WebGL Game"}
          headline="WebGL Game"
          imageName={"topdown_SC.png"}
          text={WEBGL_GAME_TEXT}
        /> */}
      </div>
    </div>
  );
}

export default Projects;
