import React from 'react';
import Common from '../src/Components/Common';
import web from '../src/images/rocket.svg';

function About() {
  return (
    <div>
      <Common 
      name="Welcome to about page "
      tagline="We have team of talented teacher's" 
      imgsrc={web} 
      visit="/contact" 
      btname="Contact Now" />

    </div>
  );
}

export default About;
