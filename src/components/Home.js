import React from 'react';
import portfolioItems from './PortfolioItems';
import Intro from './Intro';
import { FaCss3, FaCode, FaPaintBrush } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';



const Home = () => (
  <div>
  <Intro />
    <section className='Portfolio main'>
    <div className="title-wrap">
      <h3>Recent work</h3>
      </div>
      <ul className='portfolio-list'>
          {portfolioItems.slice(0, 3).map(({ siteName, link, img }) => (
              <li key={ siteName } className='portfolio-item'>
                      <h3>{siteName}</h3>
                      <img src={img} alt="site-img"/>
                      <a href={link}>{link}</a>
              </li>
          ))}
      </ul>
      </section>
    <section className='tools main'>
    <div className="title-wrap">
<h3>Tech Stack</h3>
</div>
  <ul className='tech-list'>
      <li className='tech-item'>
        <span>HTML5</span>
            <p><FaHtml5 /></p>
      </li>
      <li className='tech-item'>
      <span>CSS3</span>
          <p><FaCss3 /></p>
    </li>
    <li className='tech-item'>
    <span>Javascript</span>
        <p><FaCode /></p>
  </li>
  <li className='tech-item'>
  <span>SCSS</span>
      <p><FaCss3 /></p>
</li>
<li className='tech-item'>
<span>UX</span>
    <p><FaPaintBrush /></p>
</li>
<li className='tech-item'>
<span>jQuery</span>
    <p><FaCode /></p>
</li>
<li className='tech-item'>
<span>Cypress</span>
    <p><FaCode /></p>
</li>
<li className='tech-item'>
<span>Gulp</span>
    <p><FaCode /></p>
</li>
<li className='tech-item'>
<span>React</span>
    <p><FaCode /></p>
</li>
</ul>


    
    
    </section>

  </div>
);




export default Home;




