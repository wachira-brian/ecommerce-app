import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className='header-top-strip py-3' style={{ maxHeight: '120px' }}>
        <div className='container-fluid' style={{ marginLeft: '0px' }}>
          <div className='row align-items-center text-center text-md-start'>
            <div className='col-md-6'>
              <p className='text-white mb-0'>Free Delivery over Ksh.10000</p>
            </div>
            <div className='col-md-6 text-md-end'>
              <p className='text-white mb-0'>
                Hotline:
                <a className='text-white' href='tel: +254798962254' style={{ marginLeft: '0' }}>
                  {' '}
                  +254798962254
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className='header-upper py-3'>
        <div className='container-fluid'>
          <div className='row align-items-center'>
            <div className='col-lg-2 col-md-3 col-sm-6 text-center text-md-start'>
              <h2>
                <Link className='text-white' style={{ fontSize: '20px', marginRight: '0px' }}>
                  {' '}
                  Wacchy Electronics
                </Link>
              </h2>
            </div>

            {/* Search Bar (Hidden on Small Screens) */}
            <div className='col-lg-5 col-md-6 d-none d-md-block'>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control py-2'
                  placeholder='Search Item'
                  aria-label='Search Item'
                  aria-describedby='basic-addon2'
                />
                <span className='input-group-text p-3' id='basic-addon2'>
                  <BsSearch className='fs-6' />
                </span>
              </div>
            </div>

            {/* Header Icons */}
            <div className='col-lg-5 col-md-3 col-sm-6'>
              <div className='d-flex justify-content-around align-items-center flex-wrap nav-link'>
                {[
                  { img: 'compare.svg', text: 'Compare', link: '/Compare' },
                  { img: 'wishlist.svg', text: 'Wishlist', link: '/Wishlist' },
                  { img: 'user.svg', text: 'Account', link: '/Account' },
                  { img: 'cart.svg', text: 'Cart', link: '/Cart' },
                ].map((item, index) => (
                  <Link key={index} className='d-flex align-items-center gap-2 text-white'>
                    <img src={`images/${item.img}`} alt={item.text} />
                    <p className='mb-0 d-none d-lg-block'>{item.text}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className='header-bottom py-3'>
        <div className='container-fluid'>
          <nav className='navbar navbar-expand-md navbar-dark'>
            <div className='container-fluid'>
              {/* Dropdown for Shop Categories */}
              <div className='dropdown me-3'>
                <button
                  className='btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center'
                  type='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  <img src='images/menu.svg' alt='menu' />
                  <span className='me-5 d-inline-block'>Shop Categories</span>
                </button>
                <ul className='dropdown-menu'>
                  <li>
                    <Link className='dropdown-item text-white' to='/category1'>
                      Category 1
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item text-white' to='/category2'>
                      Category 2
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item text-white' to='/category3'>
                      Category 3
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Toggle button for mobile */}
              <button
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarNav'
              >
                <span className='navbar-toggler-icon'></span>
              </button>

              {/* Navigation Links */}
              <div className='collapse navbar-collapse' id='navbarNav'>
                <ul className='navbar-nav ms-auto'>
                  <li className='nav-item'>
                    <NavLink className='nav-link' to='/'>
                      Home
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink className='nav-link' to='/OurStore'>
                      Our Store
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink className='nav-link' to='/Blogs'>
                      Blogs
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink className='nav-link' to='/Contacts'>
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;