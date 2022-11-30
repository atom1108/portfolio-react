import React from "react";
import { Link, useLocation } from "react-router-dom";

const ROOT_PATH = "/";

// Returns styled <Link> as navbar component
function Navlink(props){
    if(props.avtivePage === props.link){
        return( // If the link is active
            <Link to={props.link}><li 
            className="navbox active_navbox neon-text-white neon-border-white"
            >{props.text}</li></Link>
        );
    }
    else{ // If NOT active link
        return( 
            <Link to={props.link}><li 
            className="navbox neon-text-white"
            >{props.text}</li></Link>
        );
    }
}

// TODO: on small window, hamburger menu with sidebar
export default function Navbar(){
    const location = useLocation();

    // Paths
    const homePageNav = ROOT_PATH;
    const aboutPageNav = ROOT_PATH+"about";
    const projectsPageNav = ROOT_PATH+"projects";

    function toggleDownNav(e){
        // console.log( e.target.parentNode.children[0].classList);
        e.target.parentNode.children[0].classList.toggle("show-dropdown-nav");
        if(e.target.innerHTML.charCodeAt(0) === 10005)
        {
            e.target.innerHTML = `&#9776;`;
        }
        else{
            e.target.innerHTML = `&#10005;`;
        }
    }

    // If NOT using a touch acreen device
    return(
        <nav>
            {/* For Larger Screens */}
            <div className="default-nav">
                <div > 
                    {/* On left side of navbar */}
                    <ul>
                        <Navlink avtivePage={location.pathname} link={homePageNav} text="Home"/>
                        <Navlink avtivePage={location.pathname} link={projectsPageNav} text="Projects"/>
                    </ul>
                </div>
                <div className="nav-right">
                    {/* On right side of navbar */}
                    <ul>
                        <Navlink avtivePage={location.pathname} link={aboutPageNav} text="About"/>
                    </ul>
                </div>
            </div>
            {/* For Smaller Screens */}
            <div className="mobile-nav">
                <div id="small-screen-nav" className="dropdown-nav">
                    <Navlink avtivePage={location.pathname} link={homePageNav} text="Home"/>
                    <Navlink avtivePage={location.pathname} link={projectsPageNav} text="Projects"/>
                    <Navlink avtivePage={location.pathname} link={aboutPageNav} text="About"/>
                </div>
                <button onClick={toggleDownNav} name="Llama" className="nav-btn neon-text-white">&#9776;</button>
            </div>
        </nav>
    );    
}