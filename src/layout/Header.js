import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { navLinks } from '../constants/Constant';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className={`bg-white py-3 shadow-md sticky top-0 ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <div className='container mx-auto'>
          <nav className='flex justify-between items-center'>
            <div>
              <Link to="/"><h3 className='text-black text-2xl font-semibold'>ROHIT</h3></Link>
            </div>
            <div className="block lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-black focus:outline-none focus:text-black"
              >
                {isMobileMenuOpen ? (<CloseIcon className='icon' />) : (<MenuIcon className='icon' />)}
              </button>
            </div>
            <ul className={`flex gap-6 mobile-menu ${isMobileMenuOpen ? 'open' : 'lg:flex'}`}>
              {navLinks.map((navLink, index) => (
                <li key={index}>
                  <Link className='text-lg text-[#273746] hover:text-[#FFA726] font-medium' to={navLink.path}>{navLink.title}</Link>
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