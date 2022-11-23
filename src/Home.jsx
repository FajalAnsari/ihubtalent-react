import React from 'react';
import Common from './Components/Common';
import web from '../src/images/rocket.svg';

function Home() {
  return (
    <>
     <Common 
      name="Grow your skill with "
      tagline="We have team of talented trainers" 
      imgsrc={web} 
      visit="/Service" 
      btname="Get Entroll" />
    </>
  );
}

export default Home;
