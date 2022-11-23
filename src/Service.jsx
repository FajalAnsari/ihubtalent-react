import React from 'react';
import Cards from '../src/Components/Cards';
import Sdata from '../src/Components/Sdata';

function Service() {
  return (
    <>
      <div id='services'>
        <h1>Our Services</h1>
      </div>
      <div className='container-fluid my-5'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row gy-3'>
              {
                Sdata.map((val, ind) =>  {
                  return <Cards key={ind} imgsrc={val.imgsrc} title={val.title} />
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
