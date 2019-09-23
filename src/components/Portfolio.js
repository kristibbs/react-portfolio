import React from 'react';
import portfolioItems from './PortfolioItems';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const Portfolio = () => (
  <div className="carousel-wrapper">
    <Carousel showIndicators={false} emulateTouch>
      {portfolioItems.map(({ siteName, builtWith, link, img }) => (
        <div>
        <p className="slide-intro">{builtWith}</p>
          <img src={img} alt="slide"/>
          <p className="legend">{siteName} <a href={link}> {link}</a></p>
          
        </div>
      ))}
    </Carousel>
  </div>
);


export default Portfolio;