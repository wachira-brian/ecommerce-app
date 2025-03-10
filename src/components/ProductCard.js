import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const ProductCard = () => {
  return (
    <> 
    <div className='col-lg-3 col-md-4 col-sm-6 mb-3'> 
      <Link className='product-card position-relative'>
        <div className='wishlist-icon position-absolute'>
          <Link>
          <img src='images/wish.svg' alt='wishlist'/>
          </Link>
        </div>
        <div className='product-image'>
          <img src='images/watch.jpg' alt='product img'/>
          <img src='images/watch-1.jpeg' alt='product img'/>
        </div>
        <div className='product-details'>
          <h6 className='brand'> Havels</h6>
          <h5 className='product-title'>
            Kids Headphones bulk 10 pack multi colored for students
          </h5>
          <ReactStars 
          count={5}
          size={24}
          value= {4}
          edit={false}
          activeColor="#ffd700"
          />
          <p className='price'>$100.00</p>

        </div>
        <div className='action-bar position-absolute'> 
          <div className='d-flex flex-column gap-10'> 
            <Link> 
            <img 
            className='img-fluid'
            src='images/prodcompare.svg' alt='compare'/>
            </Link>
            <Link> 
            <img
            className='img-fluid'
            src='images/view.svg' alt='view'/>
            </Link>
            <Link> 
            <img src='images/add-cart.svg' alt='addcart'/>
            </Link>
          
          </div>
        </div>
      </Link>

    </div>
    </>
  )
}

export default ProductCard