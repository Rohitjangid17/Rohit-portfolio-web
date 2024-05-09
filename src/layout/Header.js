import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { navLinks } from '../constants/Constant';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`bg-[#f5ecdb] py-3 px-5 sm:px-0 sticky top-0 ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <div className='container mx-auto relative'>
          <nav className='flex justify-between items-center'>
            <div>
              <Link to="/"><h3 className='text-[#f26200] text-2xl font-semibold'>ROHIT</h3></Link>
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
              {navLinks.map((navLink, index) => (
                <li key={index}>
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
      {/* {isMobileMenuOpen && (
        <>
          <div className="backdrop" onClick={closeMobileMenu} /> */}
      {/* Your side menu here */}
      {/* </>
      )} */}
    </>

  );
};

export default Header;
