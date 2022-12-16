import {React, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function LinkBox(props) {

  return (
    <Link className="project-link" to={props.link}>
      <div imageside={props.imageside} className="project">
      <div className="project_img ">
        <img src={require(`../images/${props.imageName}`)} alt={props.alt} />
        </div>
        <div className="project_txt">
          <h3>{props.headline}</h3>
          <p>{props.text}</p>
        </div>
      </div>
    </Link>
  );
}

export default LinkBox;
