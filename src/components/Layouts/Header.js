import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faShoppingCart,
  faUser,
  faHeart as faSolidHeart,
  faBars,
  faXmark
} 
from '@fortawesome/free-solid-svg-icons';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/style.css';
import '../../styles/responsive.css';
import '../../styles/arabicStyle.css';
import logo from '../../assets/leaf.webp';
import customFunction from '../../js/Custom';


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    customFunction(); // Call your jQuery translation
  }, []);

  return (
    <header className='no-change'>
      <div className='Dark_Bg'>
        <div className='container'>
          <div className='d-flex align-items-center justify-content-between gap-2'>
            <p>Special Offer - Get 50% off on Vagetables </p>
            <div>
              <div className="language-dropdown no-translate no-change">
                <input className="d-none" type="checkbox" id="language-toggle" name="language-toggle" />

                <label
                  className="position-relative d-flex align-items-end justify-content-center border-0 gap-2"
                  htmlFor="language-toggle"
                >
                  <span className="hover4">
                    Language <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                </label>

                <div className="d-flex flex-column gap-2">
                  <button className="language-dropdown-item" data-lang="en">English</button>
                  <button className="language-dropdown-item" data-lang="ar">Arabic</button>
                  <button className="language-dropdown-item" data-lang="fr">French</button>
                  <button className="language-dropdown-item" data-lang="zh">Chinese</button>
                  <button className="language-dropdown-item" data-lang="es">Spanish</button>
                  <button className="language-dropdown-item" data-lang="de">German</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className='d-flex justify-content-between align-items-center CustomNav'>
          <a href="/Home" className='DesktopLogo'>
            <h1>Fresh<img rel="preload" as="image" src={logo} alt="small leaf" /></h1>
          </a>

          {/* Top Navigation */}
          <nav className='d-lg-block d-none'>
            <ul className="nav">
              <li className="nav-item active"><Link to="/Home">Home</Link></li>
              <li className="nav-item"><Link to="/About">Shop</Link></li>
              <li className="nav-item"><Link to="/Menu">Blog</Link></li>
              <li className="nav-item"><Link to="/Blog">Contact Us</Link></li>
              <li className="nav-item dropdown">
                <a href="#!" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
                <ul className="dropdown-menu">
                  <li><Link to="/page1" className="dropdown-item">Meal Deals</Link></li>
                  <li><Link to="/page2" className="dropdown-item">Sides & Snacks</Link></li>
                  <li><Link to="/page1" className="dropdown-item">Our Blogs</Link></li>
                  <li><Link to="/page2" className="dropdown-item">BlogDetails</Link></li>
                  <li><Link to="/page2" className="dropdown-item">Testimonials</Link></li>
                  <li><Link to="/page2" className="dropdown-item">Gallery</Link></li>
                  <li><Link to="/page2" className="dropdown-item">FAQs</Link></li>
                  <li><Link to="/page2" className="dropdown-item">Coming Soon</Link></li>
                  <li><Link to="/page2" className="dropdown-item">404 Error</Link></li>
                </ul>
              </li>
            </ul>
          </nav>

          {/* Account Buttons */}
          <div className="Account_Btn d-flex align-items-center">
            <Link to="/login" className="account-card"><FontAwesomeIcon icon={faUser} className='icon' /></Link>
            <Link to="/register" className="account-card"><FontAwesomeIcon icon={faSolidHeart} className='icon' /></Link>
            <Link to="/favorites" className="account-card"><FontAwesomeIcon icon={faShoppingCart} className='icon' /></Link>
          </div>

          <button className="menu-toggle d-lg-none d-flex" onClick={() => setIsOpen(true)}>
            <FontAwesomeIcon icon={faBars} />
          </button>

          {/* Sidebar */}
          <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className='d-flex justify-content-between align-items-center'>
              <Link to="/Home" className="sidebar-logo">
                <h1>Fresh<img rel="preload" as="image" src={logo} alt="small leaf" /></h1>
              </Link>
              <button className="close-btn" onClick={() => setIsOpen(false)}><FontAwesomeIcon icon={faXmark} /></button>
            </div>
            <nav className="sidebar-nav">
              <ul className="sidebar-menu">
                <li><Link to="/Home" className="sidebar-link active">Home</Link></li>
                <li><Link to="/About" className="sidebar-link">Shop</Link></li>
                <li><Link to="/Menu" className="sidebar-link">Blog</Link></li>
                <li><Link to="/Blog" className="sidebar-link">Contact Us</Link></li>
                <li className="sidedrops dropdown">
                  <a href="#!" className="sidebar-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
                  <ul className="dropdown-menu">
                    <li><Link to="/page1" className="side_items">Meal Deals</Link></li>
                    <li><Link to="/page2" className="side_items">Sides & Snacks</Link></li>
                    <li><Link to="/page1" className="side_items">Our Blogs</Link></li>
                    <li><Link to="/page2" className="side_items">BlogDetails</Link></li>
                    <li><Link to="/page2" className="side_items">Testimonials</Link></li>
                    <li><Link to="/page2" className="side_items">Gallery</Link></li>
                    <li><Link to="/page2" className="side_items">FAQs</Link></li>
                    <li><Link to="/page2" className="side_items">Coming Soon</Link></li>
                    <li><Link to="/page2" className="side_items">404 Error</Link></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Overlay */}
          {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}
        </div>
      </div>
    </header >
  );
}

export default Header;
