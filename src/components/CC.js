import React from 'react';

function CC() {
  return (
    <div className='cc'>
      <p 
      {...{'xmlns:cc':"http://creativecommons.org/ns#"} }
     {...{ 'xmlns:dct':"http://purl.org/dc/terms/"}}>
        <a property="dct:title" 
        rel="cc:attributionURL" 
        href="https://atom1108.github.io/portfolio-react/">
          Aidan Thompson's Portfolio of Works 
          </a> 
          {/* by  */}
          {/* <span property="cc:attributionName"> Aidan Thompson</span> */} is licensed under 
          <a 
          href="http://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1" 
          target="_blank" 
          rel="license noopener noreferrer" 
          className='cc-link'> CC BY-NC 4.0
            <img 
            src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"/>
            <img 
              src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"/>
            <img
              src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"/>
          </a>
      </p>
      </div>
  );
}

export default CC;
