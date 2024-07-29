import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import resume from "./../assets/Resume/Rohit_Jangid_Front_End_Developer.pdf";
import { Link } from 'react-router-dom';

const Hero = ({ title, description, iscontent }) => {
    return (
        <>
            <section className="relative hero-bg h-screen flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" className="background-svg" fill="none">
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stop-color="#d46a1e" stop-opacity="0.5" />
                                <stop offset="100%" stop-color="#d46a1e" stop-opacity="0.2" />
                            </linearGradient>
                        </defs>
                        <path d="M0,400 C300,150 900,150 1200,400 C1500,650 1800,400 1200,400" stroke="url(#grad1)" stroke-width="4" className="wave" />
                        <path d="M0,600 C300,300 900,300 1200,600 C1500,900 1800,600 1200,600" stroke="url(#grad1)" stroke-width="4" className="wave" />
                    </svg>
                </div>

                <div className="relative z-10 flex flex-col h-screen justify-center items-center gap-y-[22px] px-5">
                    <h1 className="text-center font-[900] text-[#f26200] text-[44px] leading-[50px] sm:text-[50px] sm:leading-[56px] md:text-[64px] md:leading-[80px] fade-in-up hero-heading">
                        {title}
                    </h1>
                    <p className="text-base text-center md:text-lg lg:text-xl mb-4 md:mb-6 fade-in-up hero-text">
                        {description}
                    </p>

                    {iscontent ? (
                        <>
                            <a href={resume} download target='_blank' rel='noopener noreferrer' title='Rohit Resume'>
                                <button className="bg-[#f26200] text-white rounded-full px-6 py-1 text-base font-medium shadow-lg transition-transform transform hover:scale-110 hover:bg-[#d46a1e] focus:outline-none focus:ring-2 focus:ring-[#f26200] focus:ring-opacity-50 animate-bounce">
                                    Download Resume
                                </button>
                            </a>
                            <div className='flex items-center gap-x-5'>
                                <Link to="https://www.linkedin.com/in/rohit-jangid-984729225/" className='text-[#f26200] text-3xl transition-transform transform hover:text-[#e25c00] animate-pulse' target="_blank"> <LinkedInIcon /></Link>
                                <Link to="https://github.com/Rohitjangid17" className='text-[#f26200] text-3xl transition-transform transform hover:text-[#e25c00] animate-pulse' target="_blank"> <GitHubIcon /></Link>
                                <Link to="https://www.instagram.com/monu_jangid76/" className='text-[#f26200] text-3xl transition-transform transform hover:text-[#e25c00] animate-pulse' target="_blank"> <InstagramIcon /></Link>
                            </div>
                        </>
                    ) : null}
                </div>
            </section>
        </>
    )
}

export default Hero;
