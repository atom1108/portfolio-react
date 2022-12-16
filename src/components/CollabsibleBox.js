import {React, useRef, useState } from 'react';


/// Colapsible Box Component, neon styling
/// Shows the first 3 items encapsulated by <CollapsibleBox><CollapsibleBox/>
/// Displays the rest onm toggle click
function CollapsibleBox(props) {
  // The state of the box (expended [open] or collapsed [!open])
  const [open, setOpen] = useState(false);

  const expandBtn = useRef();

  // Swaps state on button click
  function toggleBox(){
    if(open){
      expandBtn.current.innerHTML = "&#9661;"
    }
    else{
      expandBtn.current.innerHTML = "&#9651;"
    }
    setOpen(!open);
  }

  return (
    <article className={`neon-border-purple collapsible-article ${props.className}`}>
      <h2>{props.title}</h2>
      <div className={`collapsible-content ${open ? "collapsible-expand" : "collapsible-collapse"}`}>
        {props.children}
        {/* {props.children.slice(0,3)}
        {open && props.children.slice(3)} */}
      </div>
      <button ref={expandBtn} className='neon-text-white' onClick={toggleBox}>&#9661;</button>
    </article>
  );
}

export default CollapsibleBox;
