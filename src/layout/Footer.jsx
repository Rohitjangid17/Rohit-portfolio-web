import React, { useEffect, useState } from 'react';
import { navLinks } from '../constants/Constant';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    // Scroll to top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        // set current year
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <>
            <footer className='py-10 bg-[#f5ecdb] px-5 sm:px-0'>
                <div className='container mx-auto'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 lg:gap-10'>
                        <div className='flex flex-col gap-y-3'>
                            <h4 className='text-[#f26200] text-2xl font-semibold font-mono'>रोहित जांगिड़_</h4>
                            <div className='flex items-center gap-x-3'>
                                <Link to="https://www.linkedin.com/in/rohit-jangid-984729225/" className='text-[#f26200]' target="_blank"> <LinkedInIcon /></Link>
                                <Link to="https://github.com/Rohitjangid17" className='text-[#f26200]' target="_blank"> <GitHubIcon /></Link>
                                <Link to="https://www.instagram.com/monu_jangid76/" className='text-[#f26200]' target="_blank"> <InstagramIcon /></Link>
                            </div>
                        </div>
                        <div className='flex flex-col gap-y-3'>
                            <h4 className='text-[#f26200] text-xl font-semibold'>Quick Links</h4>

                            <ul className='flex flex-col gap-y-2'>
                                {navLinks.map((navLink) => (
                                    <li key={navLink.id}>
                                        <Link
                                            className={`text-base text-[#757575] hover:text-[#f26200] hover:transition-all duration-300 font-normal`}
                                            to={navLink.path}
                                        >
                                            {navLink.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='flex flex-col gap-y-3'>
                            <h4 className='text-[#f26200] text-xl font-semibold'>Projects</h4>

                            <ul className='flex flex-col gap-y-2'>
                                <li>
                                    <Link to="https://admin.shopiana.io/" target="_blank" className='text-[#757575] text-base font-light'>E-Commerce Admin</Link>
                                </li>
                                <li>
                                    <Link to="https://www.theamycollections.com/" target="_blank" className='text-[#757575] text-base font-light'>E-Commerce Website</Link>
                                </li>
                                <li>
                                    <Link to="https://ctpl.timelabs.in/" target="_blank" className='text-[#757575] text-base font-light'>HRMS Portal</Link>
                                </li>
                                <li>
                                    <Link to="https://shopiana.io/" target="_blank" className='text-[#757575] text-base font-light'>Shopiana Website</Link>
                                </li>
                                <li>
                                    <Link to="https://www.timelabs.in/" target="_blank" className='text-[#757575] text-base font-light'>Timelabs Product Website</Link>
                                </li>
                                <li>
                                    <Link to="https://www.cynosuretech.com/" target="_blank" className='text-[#757575] text-base font-light'>Cynosure Website</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-y-3 relative'>
                            <h4 className='text-[#f26200] text-xl font-semibold'>Connect</h4>

                            <ul className='flex flex-col gap-y-2'>
                                <li>
                                    <Link to="mailto:jangidrohit817@gmail.com" className='text-[#757575] text-base font-light'>jangidrohit817@gmail.com</Link>
                                </li>
                                <li>
                                    <Link to="#" className='text-[#757575] text-base font-light'>Jaipur, Rajasthan, India</Link>
                                </li>
                                <li>
                                    <Link to="tel:+919587683849" className='text-[#757575] text-base font-light'>+91 9587683849</Link>
                                </li>
                            </ul>

                            <button type="button" onClick={scrollToTop} className='absolute bottom-0 right-0 bg-[#f26200] w-10 h-10 rounded-full text-black text-base font-normal'><ExpandLessIcon /></button>
                        </div>
                    </div>

                    <div className='text-center pt-10'>
                        <span className='text-[#757575] text-base font-light'>Copyright ©{currentYear} All rights reserved | This portfolio is made with <FavoriteIcon className='text-[#f26200]' /> by Rohit Jangid</span>
                    </div>
                </div>
            </footer >
        </>
    )
}

export default Footer;