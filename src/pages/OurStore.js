import React from 'react';
//import Marquee from "react-fast-marquee";
//import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const OurStore = (OurStore) => {
    return (
<section className='featured-wrapper py-5 home-wrapper-2'>
<div className='container-xxl'>
  <div className='row'>
    <div className='col-12'>
      <h3 className='section-heading'> 
        Featured Products
      </h3>
    </div>
    <ProductCard />
    <ProductCard /> 
    <ProductCard />
    <ProductCard />
    <ProductCard /> 
    <ProductCard />
    <ProductCard /> 
    <ProductCard />
    <ProductCard />
    <ProductCard /> 
    <ProductCard />
    <ProductCard /> 
    <ProductCard />
    <ProductCard />
    <ProductCard /> 
    <ProductCard />
    <ProductCard /> 
    <ProductCard />
    <ProductCard />
    <ProductCard /> 
    <ProductCard />
    <ProductCard /> 
    <ProductCard />
    <ProductCard />
    <ProductCard /> 
  </div>
</div>
</section>

);
};

export default OurStore;