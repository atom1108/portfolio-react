import "./App.css";
import { React, useState } from "react";
import { useTitle } from "../hooks/UseTitle";

//#region GALLERY VIEW
function Tile(props) {
  return (
    <div className="gallery_tile">
      <a href={props.fullResSrc} target="_blank" rel="noreferrer">
        <img src={props.src} alt="" />
      </a>
    </div>
  );
}

function DisplayGallery() {
  return (
    <div className="gallery_container neon-border-teal">
      {
        // Get all images in location and create Tiles from them
        require
          .context("../images/Gallery", false, /\.(png|jpe?g|JPG|svg)$/)
          .keys()
          .map((item, index) => {
            let name = String(item).substring(1);
            return (
              <Tile
                key={index}
                src={require("../images/Gallery" + name)}
                fullResSrc={require("../images/FullSizeGallery" + name)}
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
function HandleCardButtons(e) {
  if (e.target.value === "left") {
    // LEFT button
    // Get next card indecies to left with overflow
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : numCards;
    const secondNextIndex = nextIndex - 1 >= 0 ? nextIndex - 1 : numCards;

    // Get div objects of required cards
    const currCard = document.querySelector(`[data-index="${activeIndex}"]`);
    const nextCard = document.querySelector(`[data-index="${nextIndex}"]`);
    const secondNextCard = document.querySelector(
      `[data-index="${secondNextIndex}"]`
    );

    // Change status of cards to shift to left
    currCard.setAttribute("data-status", "right");
    nextCard.setAttribute("data-status", "active");
    secondNextCard.setAttribute("data-status", "left");

    // Update active index
    activeIndex = nextIndex;
  } else {
    // RIGHT button
    // Get next card indecies to right with overflow
    const nextIndex = activeIndex + 1 <= numCards ? activeIndex + 1 : 0;
    const secondNextIndex = nextIndex + 1 <= numCards ? nextIndex + 1 : 0;

    // Get div objects of required cards
    const currCard = document.querySelector(`[data-index="${activeIndex}"]`);
    const nextCard = document.querySelector(`[data-index="${nextIndex}"]`);
    const secondNextCard = document.querySelector(
      `[data-index="${secondNextIndex}"]`
    );

    // Change status of cards to shift to right
    currCard.setAttribute("data-status", "left");
    nextCard.setAttribute("data-status", "active");
    secondNextCard.setAttribute("data-status", "right");

    // Update active index
    activeIndex = nextIndex;
  }
}

function Card(props) {
  return (
    <div
      data-status={props.status} // Whether it is active, left, right, or unknown
      data-index={props.index} // THe position of the card in the stack on initialisation
      className="photo-card neon-border-teal"
    >
      <a href={props.fullResSrc} target="_blank" rel="noreferrer">
        <img src={props.src} alt="" />
      </a>
    </div>
  );
}

function DisplayCards() {
  return (
    <div className="photo-cards-container">
      {
        // Get all images in location and create Cards from them
        require
          .context("../images/Gallery", false, /\.(png|jpe?g|JPG|svg)$/)
          .keys()
          .map((item, index) => {
            let name = String(item).substring(1);
            // If last card, return with "active" tag
            if (
              Number(index) ===
              Number(
                require
                  .context("../images/Gallery", false, /\.(png|jpe?g|JPG|svg)$/)
                  .keys().length - 1
              )
            ) {
              numCards = index;
              activeIndex = index;
              return (
                <Card
                  index={index}
                  key={index}
                  status="active"
                  src={require("../images/Gallery" + name)}
                  fullResSrc={require("../images/FullSizeGallery" + name)}
                />
              );
            }
            // If not last card return with "unknown" tag
            return (
              <Card
                status="unknown"
                key={index}
                index={index}
                src={require("../images/Gallery" + name)}
                fullResSrc={require("../images/FullSizeGallery" + name)}
              />
            );
          })
      }
      {/* Buttons handling card changing */}
      <div className="photo-cards-btn-container">
        <button
          className="neon-border-white neon-text-white"
          onClick={HandleCardButtons}
          value={"left"}
        >
          &#8612;
        </button>
        <button
          className="neon-border-white neon-text-white"
          onClick={HandleCardButtons}
          value={"right"}
        >
          &#8614;
        </button>
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
  function HandleChange(e) {
    setDisplayMethod(Number(e.target.value));
  }

  // Toggles display:block class for content on button click
  function HandleDropdown(e) {
    e.target.parentNode.children[1].classList.toggle("show-dropdown");
  }

  // Dropdown box for display method
  function DisplaySelector() {
    return (
      <div className="dropdown">
        <button className="dropbtn" onClick={HandleDropdown}>
          View Options
        </button>
        <div className="dropdown-content neon-border-purple">
          <button value={1} onClick={HandleChange}>
            Gallery
          </button>
          <button value={2} onClick={HandleChange}>
            Cards
          </button>
        </div>
      </div>
    );
  }

  // Default option, gallery. Shows all images at once
  if (displayMethod === 1) {
    return (
      <div>
        <h1>Photography</h1>
        <DisplaySelector />
        <DisplayGallery />
      </div>
    );
  }
  // Cards display, shows one at a time with swap buttons
  else if (displayMethod === 2) {
    return (
      <div>
        <h1>Photography</h1>
        <DisplaySelector />
        <DisplayCards />
      </div>
    );
  }
}

export default Gallery;
