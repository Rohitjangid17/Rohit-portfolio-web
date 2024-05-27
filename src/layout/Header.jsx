import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { navLinks } from '../constants/Constant';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
      return scrollPosition > 100 ? setIsScrolled(true) : setIsScrolled(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`bg-[#f5ecdb] py-3 sticky top-0 ${isMobileMenuOpen ? 'mobile-menu-open' : ''} ${isScrolled ? 'scrolled' : ''}`}>
        <div className='container mx-auto relative'>
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
            <ul className={`flex gap-6 mobile-menu ${isMobileMenuOpen ? 'open' : 'lg:flex'}`} onClick={closeMobileMenu}>
              {navLinks.map((navLink) => (
                <li key={navLink.id}>
                  <Link
                    className={`text-base text-[#757575] hover:text-[#f26200] hover:transition-all duration-300 font-normal ${location.pathname === navLink.path ? 'text-[#f26200]' : ''}`}
                    to={navLink.path}
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
