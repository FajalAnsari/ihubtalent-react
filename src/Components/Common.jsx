import React from 'react';
import { Link } from 'react-router-dom';

function Common(props) {
  return (
    <>
      <section id="header-section" className='d-flex alig-item-center'> 
        <div id="header" className="container-fluid mt-5">
          <div className="row">
            <div className='col-10 mx-auto'>
              <div className='row'id='here'>
                <div className='col-md-6 order-2 order-lg-1 d-flex justify-content-center flex-column' > 
                  <h1>{props.name}<strong className='navbar-brand'>iHUB TALENT</strong></h1>
                  <h2 className='my-3'>
                    {props.tagline}
                  </h2>
                  <div className='mt-3'>
                    <Link to={props.visit} className='btn-get-started'>
                      {props.btname}
                    </Link>
                  </div>
                </div>
                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                  <img src={props.imgsrc} className="img-fluid animated" alt='home-img' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Common;
