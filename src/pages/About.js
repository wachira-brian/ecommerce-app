import React from 'react';

const About = () => {
  return (
    <section className='about-wrapper py-5'>
      <div className='container'>
        <h2 className='text-center mb-4'>About Wacchy Electronics</h2>
        <div className='row'>
          <div className='col-md-6'>
            <img 
              src='images/about-us.jpg' 
              alt='About Us' 
              className='img-fluid rounded shadow'
            />
          </div>
          <div className='col-md-6 d-flex align-items-center'>
            <div>
              <p>
                Wacchy Electronics is a premier digital company dedicated to providing top-notch electronics, 
                online shopping experiences, and professional services. We specialize in website development, 
                maintenance, digital marketing, and data analysis, ensuring seamless digital solutions for businesses 
                and individuals alike.
              </p>
              <p>
                Our mission is to bridge the gap between technology and consumers by offering high-quality products 
                and cutting-edge services. Whether you're looking for the latest gadgets or need a reliable tech 
                partner, Wacchy Electronics is your go-to destination.
              </p>
              <p>
                We take pride in our customer satisfaction and strive to deliver excellence in every service we offer. 
                Join us in revolutionizing the digital space!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
