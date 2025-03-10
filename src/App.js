import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import OurStore from './pages/OurStore';
import Blogs from './pages/Blogs';
import Loginpage from './pages/Loginpage';
import Compare from './pages/Compare';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Account from './pages/Account';



function App() {
  return (
    <>
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='OurStore' element={<OurStore />} />
          <Route path='blogs' element={<Blogs />} />
          <Route path='account' element={<Loginpage />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/Loginpage" element={<Loginpage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="Account" element={<Account />} />
        </Route>
    </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;