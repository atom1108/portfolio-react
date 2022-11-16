import React from "react";
import { Link, useLocation } from "react-router-dom";

const ROOT_PATH = "/";

// REturns styled <Link> as navbar component
function Navlink(props){
    if(props.avtivePage === props.link){
        return( // If the link is active
            <Link to={props.link}><li 
            className="navbox active_navbox"
            >{props.text}</li></Link>
        );
    }
    else{ // If NOT active link
        return( 
            <Link to={props.link}><li 
            className="navbox"
            >{props.text}</li></Link>
        );
    }
}

export default function Navbar(){
    const location = useLocation();

    // Paths
    const homePageNav = ROOT_PATH;
    const aboutPageNav = ROOT_PATH+"about";
    const projectsPageNav = ROOT_PATH+"projects";

    return(
        <nav id="navbar">
            <div className="nav_left"> 
                {/* On left side of navbar */}
                <ul>
                    <Navlink avtivePage={location.pathname} link={homePageNav} text="Home"/>
                    <Navlink avtivePage={location.pathname} link={projectsPageNav} text="Projects"/>
                </ul>
            </div>
            <div>
                {/* On right side of navbar */}
                <ul>
                    <Navlink avtivePage={location.pathname} link={aboutPageNav} text="About"/>
                </ul>
            </div>
        </nav>
    );    
}