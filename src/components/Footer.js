import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const footer = () => {
  return (
    <mainfooter>
      <footer className='py-5'> 
        <div className='container-fluid'>
            <div className='row align-items-center text-center text-md-start'>

              <div className='col-md-5 mb-3 mb-md-0'>
                <div className='footer-top-data d-flex gap-30 align-items-center'>
                  <img src='images/newsletter.png' alt='newsletter' />
                  <h2 className='mb-0 text-white'> Sign Up for Newsletter</h2>
                </div>
              </div>

              <div className='col-md-7' >
                <div class="input-group">
                  <input type="text" 
                    className="form-control py-1" 
                    placeholder="Your Email Address" 
                    aria-label="Your Email Address"
                    aria-describedby="basic-addon2"
                  />
                  <span 
                    class="input-group-text p-2" 
                    id="basic-addon2"> Subscribe
                  </span>
                </div>
              </div>
            </div>
          </div>
      </footer>
      <footer className='py-3'> 
        <div className='container-fluid'>
          <div className='row text-center text-md-start'> 
            <div className='col-lg-3 col-md-6 col-sm-12 mb-4'>
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div className='footer-link d-flex flex-column'>
                <address className='text-white fs-6'>
                  Kirinyaga, Kutus
                </address>
                <a href='tel: +254798962254' 
                className='mt-4 d-block mb-3 text-white'>
                  +254798962254
                </a>
                <a href=' mailto:wacchyelectronics@gmail.com'
                    className='mt-4 d-block mb-3 text-white'
                > 
                  wacchyelectronics@gmail.com
                </a>
                <div className='social_icons d-flex gap-3 justify-content-center justify-content-md-start'>
                  <a className='text-white'>
                    <BsLinkedin className='fs-4'/>
                  </a>
                  <a className='text-white'>
                    <BsInstagram className='fs-4'/>
                  </a>
                  <a className='text-white'>
                    <BsYoutube className='fs-4'/>
                  </a>
                  <a className='text-white'>
                    <BsFacebook className='fs-4'/>
                  </a>

                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12 mb-4'>
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
                <Link className='text-white py-2 mb-1'>Refund Policy</Link>
                <Link className='text-white py-2 mb-1'>Shipping Policy</Link>
                <Link className='text-white py-2 mb-1'>Terms of Service</Link>
                <Link className='text-white py-2 mb-1'>Blog</Link>

              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12 mb-4'>
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Search</Link>
                <Link className='text-white py-2 mb-1'>About Us</Link>
                <Link className='text-white py-2 mb-1'>Faq</Link>
                <Link className='text-white py-2 mb-1'>Contact</Link>
                <Link className='text-white py-2 mb-1'>Size Chart</Link>

              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12 mb-4'>
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Laptops</Link>
                <Link className='text-white py-2 mb-1'>Headphones</Link>
                <Link className='text-white py-2 mb-1'>Tablets</Link>
                <Link className='text-white py-2 mb-1'>Watch</Link>
              </div>
            </div>
          </div>

        </div>
      </footer>

      <footer className='py-4'> 
      <div className='container-fluid'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'> 
                &copy;{new Date() .getFullYear()}; 
                Powered by Wacchy Electronics
                </p>

            </div>
          </div>
        </div>
      </footer>
      
    </mainfooter>
  );
};

export default footer;