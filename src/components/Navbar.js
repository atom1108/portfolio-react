import React from "react";
import { Link, useLocation } from "react-router-dom";
const ROOT_PATH = "/portfolio-react/";

function Navlink(props){
    if(props.avtivePage === props.link){
        return(
            <Link to={props.link}><li 
            className="bg-slate-500 inline-flex w-24 px-2 py-2 -mr-px text-lg text-white hover:text-white border border-2 border-slate-500 place-content-center hover:bg-slate-700 ease-linear duration-300"
            >{props.text}</li></Link>
        );
    }
    else{
        return(
            <Link to={props.link}><li 
            className="inline-flex w-24 px-2 py-2 -mr-px text-lg text-white hover:text-white border border-2 border-slate-500 place-content-center hover:bg-slate-700 ease-linear duration-300"
            >{props.text}</li></Link>
        );
    }
}

export default function Navbar(){
    const location = useLocation();
    const homePageNav = ROOT_PATH;
    const aboutPageNav = ROOT_PATH+"about";
    const projectsPageNav = ROOT_PATH+"projects";

    return(
        <div className="flex mt-3 mx-3 mb-5 pb-1 border-t-0 border-l-0 border-r-0 border-double border-4 border-slate-300 ">
            <div className=" w-full">
                <ul className="place-center">
                    <Navlink avtivePage={location.pathname} link={homePageNav} text="Home"/>
                    <Navlink avtivePage={location.pathname} link={projectsPageNav} text="Projects"/>
                </ul>
            </div>
            <div className="">
                <ul className="">
                    <Navlink avtivePage={location.pathname} link={aboutPageNav} text="About"/>
                </ul>
            </div>
        </div>
);

    
}