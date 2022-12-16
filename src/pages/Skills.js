import './App.css';
import React from 'react';
import { useTitle } from '../hooks/UseTitle';
import CollapsibleBox from '../components/CollabsibleBox';
import LinkBox from '../components/LinkBoxImageText';

const POHTOGRAPHY_TEXT =
  "Some photos I have taken with my Canon EOS 1100D. Mostly urban wildlife and plants, as they seem to be the most readily available subject on short notice.";


function SkillsPage() {
  useTitle("Skills");
  return (
    <section>
      <h1>Skills</h1>
      <CollapsibleBox title="Programming Languages">
        <div>
          <img src={require(`../images/LightMode_WebPortfolioLogo512.png`)} alt="Logo" />
          <p className='neon-text-white'>C#</p>
        </div>
        <div>
          <img src={require(`../images/LightMode_WebPortfolioLogo512.png`)} alt="Logo" />
          <p className='neon-text-white'>C</p>
        </div>
        <div>
          <img src={require(`../images/LightMode_WebPortfolioLogo512.png`)} alt="Logo" />
          <p className='neon-text-white'>HTML</p>
        </div>
        <div>
          <img src={require(`../images/LightMode_WebPortfolioLogo512.png`)} alt="Logo" />
          <p className='neon-text-white'>CSS</p>
        </div>
        <div>
          <img src={require(`../images/LightMode_WebPortfolioLogo512.png`)} alt="Logo" />
          <p className='neon-text-white'>Java</p>
        </div>
        <div>
          <img src={require(`../images/LightMode_WebPortfolioLogo512.png`)} alt="Logo" />
          <p className='neon-text-white'>Javascript</p>
        </div>
        <div>
          <img src={require(`../images/LightMode_WebPortfolioLogo512.png`)} alt="Logo" />
          <p className='neon-text-white'>Python</p>
        </div>
      </CollapsibleBox>

      <CollapsibleBox title="General">
        <div>
          <img src={require(`../images/LightMode_WebPortfolioLogo512.png`)} alt="Logo" />
          <p className='neon-text-white'>Friendly Personality</p>
        </div>
        <div>
          <img src={require(`../images/LightMode_WebPortfolioLogo512.png`)} alt="Logo" />
          <p className='neon-text-white'>Communication Skills</p>
        </div>
        <div>
          <img src={require(`../images/LightMode_WebPortfolioLogo512.png`)} alt="Logo" />
          <p className='neon-text-white'>Work Ethic</p>
        </div>
        <div>
          <img src={require(`../images/LightMode_WebPortfolioLogo512.png`)} alt="Logo" />
          <p className='neon-text-white'>Quick Learner</p>
        </div>
        <div>
          <img src={require(`../images/LightMode_WebPortfolioLogo512.png`)} alt="Logo" />
          <p className='neon-text-white'>Attention to Detail</p>
        </div>
        <div>
          <img src={require(`../images/LightMode_WebPortfolioLogo512.png`)} alt="Logo" />
          <p className='neon-text-white'>Problem Solving</p>
        </div>
      </CollapsibleBox>
      <p>P.S. I know all the images are the same, I just haven't gotten around to changing them yet</p>
      
      {/* <article className='neon-border-purple skills-article'>
        <img src={require(`../images/LightMode_WebPortfolioLogo512.png`)} alt="Logo" />
        <img src={require(`../images/LightMode_WebPortfolioLogo512.png`)} alt="Logo" />
        <img src={require(`../images/LightMode_WebPortfolioLogo512.png`)} alt="Logo" />
      </article> */}
    </section>
  );
}

export default SkillsPage;
