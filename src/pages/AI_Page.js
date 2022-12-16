import "./App.css";
import {React, useState, useEffect} from "react";
import { useTitle } from "../hooks/UseTitle";
// import * as tf from '@tensorflow/tfjs';
// import '@tensorflow/tfjs-react-native';






function AI_Page() {
  useTitle("Tensorflow");
  // const modelJSON = require("../AI/sentiM/model.json");
  
  return (
    <div>
      <h2 className="WIP_text">WORK IN PROGRESS</h2>
      <p>Tensorflow, possible future sentiment analysis AI</p>
    </div>
  );
}

export default AI_Page;
