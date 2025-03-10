import React from 'react';
import { Link } from 'react-router-dom';

const Blogcard = () => {
  return (
    <div className='col-lg-3 col-md-4 col-sm-6 mb-3'>

        <div className='blog-card'> 
            <div className='card-image'>
                <img src='images/blog-1.jpg' className='img-fluid' alt='blog' />
            </div>

            <div className='blog-content'>
                <p className='date'>1 Dec, 2022 </p>
                <h5 className='title'>A beautiful sunday morning renaissance</h5>
                <p className='desc'>
              This passage speaks about the fact that if someone deliberately
                keeps on sinning after receiving the knowledge of the truth, there no longer 
                remains a sacrifice for sins, but only a fearful expectation of judgment.
                </p>
                <Link to='/' className='button'> 
                Read More
                </Link>
            </div>
        </div>
    </div>

  )
}

export default Blogcard