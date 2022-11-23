import React from 'react';
import { Link } from 'react-router-dom';

function cards(props) {
    return (
        <>
            <div className='col-md-4 col-10'>
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top h-25" alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="" class="btn btn-primary">Read More</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default cards;
