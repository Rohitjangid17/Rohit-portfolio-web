import React from 'react';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
    return (
        <>
            <footer className='py-10 bg-[#f5ecdb] px-5 sm:px-0'>
                <div className='container mx-auto'>
                    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                        <div className='flex flex-col gap-y-3'>
                            <h4 className='text-[#f26200] text-2xl font-semibold'>ROHIT</h4>
                            <div className='flex items-center gap-x-3'>
                                <Link to="https://www.linkedin.com/in/rohit-jangid-984729225/" className='text-[#f26200]' target="_blank"> <LinkedInIcon /></Link>
                                <Link to="https://github.com/Rohitjangid17" className='text-[#f26200]' target="_blank"> <GitHubIcon /></Link>
                                <Link to="https://google.com" className='text-[#f26200]' target="_blank"> <InstagramIcon /></Link>
                            </div>
                        </div>
                        <div className='flex flex-col gap-y-3'>
                            <h4 className='text-[#f26200] text-xl font-semibold'>Quick Links</h4>

                            <ul className='flex flex-col gap-y-2'>
                                <li>
                                    <Link to="/" className='text-[#757575] text-base font-light'>Home</Link>
                                </li>
                                <li>
                                    <Link to="/about" className='text-[#757575] text-base font-light'>About</Link>
                                </li>
                                <li>
                                    <Link to="/work" className='text-[#757575] text-base font-light'>Work Experience</Link>
                                </li>
                                <li>
                                    <Link to="/contact" className='text-[#757575] text-base font-light'>Contact</Link>
                                </li>
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
                        <div className='flex flex-col gap-y-3'>
                            <h4 className='text-[#f26200] text-xl font-semibold'>Connect</h4>

                            <ul className='flex flex-col gap-y-2'>
                                <li>
                                    <Link className='text-[#757575] text-base font-light'>jangidrohit817@gmail.com</Link>
                                </li>
                                <li>
                                    <Link className='text-[#757575] text-base font-light'>+91 9587683849</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className='text-center pt-10'>
                        <span className='text-[#757575] text-base font-light'>Copyright ©2024 All rights reserved | This template is made with <FavoriteIcon className='text-[#f26200]'/> by Rohit Jangid</span>
                    </div>
                </div>
            </footer >
        </>
    )
}

export default Footer;