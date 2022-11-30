import React from 'react';
import CC from './CC';

function Footer() {
  return (
    <footer>
        <img className='footer-img' alt='Website Logo' src={require(`../images/DarkMode_WebPortfolioLogo512.png`)}></img>
        <CC/>
    </footer>
  );
}

export default Footer;
