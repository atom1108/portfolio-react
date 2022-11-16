import './App.css';
import {React, useState } from 'react';
import CC from '../components/CC';
import { useTitle } from '../hooks/UseTitle';



//#region GALLERY VIEW
function Tile(props){
    return (
        <div className=' gallery_tile '>
        <a href={props.fullResSrc}><img 
        src={props.src}></img>
        </a>
    </div>
    );
}

function DisplayGallery(){
    return(
        <div className='gallery_container'>
            {
                // Get all images in location and create Tiles from them
                require.context('../images/Gallery', false, /\.(png|jpe?g|JPG|svg)$/).keys().map((item, index) => {
                    let name = String(item).substring(1);
                    return (
                        <Tile 
                        key={index} 
                        src={require("../images/Gallery"+name)}
                        fullResSrc={require("../images/FullSizeGallery"+name)}
                        />
                    );
                })
            }
        </div>
    );
}

//#endregion

//#region CARDS VIEW

let numCards;
let activeIndex;

// Swapping buttons
function HandleCardButtons(e){
    if(e.target.value === "left") // LEFT button
    {
        // Get next card indecies to left with overflow
        const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : numCards;
        const secondNextIndex = nextIndex - 1 >= 0 ? nextIndex - 1 : numCards;

        // Get div objects of required cards
        const currCard = document.querySelector(`[data-index="${activeIndex}"]`);
        const nextCard = document.querySelector(`[data-index="${nextIndex}"]`);
        const secondNextCard = document.querySelector(`[data-index="${secondNextIndex}"]`);

        // Change status of cards to shift to left
        currCard.setAttribute("data-status", "right");
        nextCard.setAttribute("data-status", "active");
        secondNextCard.setAttribute("data-status", "left");

        // Update active index
        activeIndex = nextIndex;
    }
    else{ // RIGHT button
        // Get next card indecies to right with overflow
        const nextIndex = activeIndex + 1 <= numCards ? activeIndex + 1 : 0;
        const secondNextIndex = nextIndex + 1 <= numCards ? nextIndex + 1 : 0;

        // Get div objects of required cards
        const currCard = document.querySelector(`[data-index="${activeIndex}"]`);
        const nextCard = document.querySelector(`[data-index="${nextIndex}"]`);
        const secondNextCard = document.querySelector(`[data-index="${secondNextIndex}"]`);

        // Change status of cards to shift to right
        currCard.setAttribute("data-status", "left");
        nextCard.setAttribute("data-status", "active");
        secondNextCard.setAttribute("data-status", "right");

        // Update active index
        activeIndex = nextIndex; 
    }

}

function Card(props){
    return(
        <div 
        data-status={props.status} // Whether it is active, left, right, or unknown
        data-index={props.key} // THe position of the card in the stack on initialisation
        className='card'>
            <a href={props.fullResSrc} target="_blank">
                <img src={props.src} />
            </a>
        </div>
    );
}

function DisplayCards(){
    return(
        <div className='cards-container'>
             {
                // Get all images in location and create Cards from them
                require.context('../images/Gallery', false, /\.(png|jpe?g|JPG|svg)$/).keys().map((item, index) => {
                    let name = String(item).substring(1);
                    // If last card, return with "active" tag
                    if( Number(index) === Number(require.context('../images/Gallery', false, /\.(png|jpe?g|JPG|svg)$/).keys().length-1)){
                        numCards = index;
                        activeIndex = index;
                        return (
                            <Card 
                            key={index}
                            status="active"
                            src={require("../images/Gallery"+name)}
                            fullResSrc={require("../images/FullSizeGallery"+name)}
                            />
                        );
                    }
                    // If not last card return with "unknown" tag
                    return (
                        <Card 
                        status="unknown"
                        key={index}
                        src={require("../images/Gallery"+name)}
                        fullResSrc={require("../images/FullSizeGallery"+name)}
                        />
                    );
                })
            }
            {/* Buttons handling card changing */}
            <div className='cards-btn-container'>
                <button onClick={HandleCardButtons} value={"left"}>&#8612;</button>
                <button onClick={HandleCardButtons} value={"right"}>&#8614;</button>
            </div>
        </div>
    );
}

//#endregion

/// FINAL FUNCTION ///
function Gallery() {
    useTitle("Photography");
    const [displayMethod, setDisplayMethod] = useState(1, Number);

    // When the dropdown box is changed, change the display method
    function HandleChange(e){
        setDisplayMethod(Number(e.target.value));
    }

    // Dropdown box for display method
    function DisplaySelector(){
        return(
            <div className='select-center-container'>
                <select value={displayMethod} onChange={HandleChange}>
                    <option value={1}>Gallery</option>
                    <option value={2}>Cards</option>
                    {/* <option value={3}>Op3</option> */}
                </select>
            </div>
        );
    }
    
    let display; // The display to use

    // Default option, gallery. Shows all images at once
    if (displayMethod === 1){
        display = <DisplayGallery/>
    }
    // Cards display, shows one at a time with swap buttons
    else if (displayMethod === 2){
        console.log("Cards");
        display = <DisplayCards/>
    }
    else{
        display = null;
    }

    return (
        <div >
            <h1>Photography</h1>
            <DisplaySelector/>
            {display}
            <CC/>
        </div>
    );
}

export default Gallery;
