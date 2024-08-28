import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from "react-router-dom";
import { navLinks } from '../constants/constant';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef(null);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('body-overlay');
    } else {
      document.body.classList.remove('body-overlay');
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className={`bg-[#f5ecdb] relative py-3 sticky top-0 z-10 ${isMobileMenuOpen ? 'mobile-menu-open' : ''} ${isScrolled ? 'scrolled' : ''}`}>
        <div className='container mx-auto'>
          <nav className='flex justify-between items-center px-5'>
            <div>
              <Link to="/" className='text-[#f26200] text-2xl font-semibold'>ROHIT</Link>
            </div>
            <div className="block lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-[#757575] focus:outline-none focus:text-[#757575]"
              >
                {isMobileMenuOpen ? (<CloseIcon className='nav-icon' />) : (<MenuIcon className='nav-icon' />)}
              </button>
            </div>
            <ul
              ref={mobileMenuRef}
              className={`flex gap-6 mobile-menu ${isMobileMenuOpen ? 'open' : 'lg:flex'}`}
            >
              {navLinks.map((navLink) => (
                <li key={navLink.id}>
                  <Link
                    className={`text-base text-[#757575] hover:text-[#f26200] hover:transition-all duration-300 font-normal ${location.pathname === navLink.path ? 'text-[#f26200]' : ''}`}
                    to={navLink.path}
                    onClick={closeMobileMenu} // Close menu on link click
                  >
                    {navLink.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
