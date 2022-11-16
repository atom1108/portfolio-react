import './App.css';
import React from "react";
import { useTitle } from '../hooks/UseTitle';
import {Unity, useUnityContext} from "react-unity-webgl";

function Topdown() {
  useTitle("Topdown");
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/topdown.loader.js",
    dataUrl: 'build/topdown.data',
    frameworkUrl: "build/topdown.framework.js",
    codeUrl: "build/topdown.wasm",
  });

  return (
    <div className="full-w-flex-col">
      <Unity className="unity-box" unityProvider={unityProvider} />
      <p>Enter a name, Connect, and use WASD to move</p>
    </div>
  );
}

export default Topdown;
