import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import resume from "./../assets/resume/Rohit_Jangid_(Frontend_Developer)_1.8EX.pdf";
import { Link } from 'react-router-dom';

const Hero = ({ title, description, iscontent }) => {
    return (
        <section className="bg-[#f5ecdb] h-screen flex flex-col items-center justify-center overflow-hidden">
            <div className="flex flex-col h-full justify-center items-center gap-y-[22px] px-5 container">
                <h1 className="animate-slideUp text-center font-[900] text-[#f26200] text-[44px] leading-[50px] sm:text-[50px] sm:leading-[56px] md:text-[64px] md:leading-[80px]">
                    {title}
                </h1>
                <p className="animate-fadeIn text-base text-center md:text-lg lg:text-xl mb-4 md:mb-6">
                    {description}
                </p>

                {iscontent ? (
                    <>
                        <a href={resume} download target='_blank' title='Rohit Resume' rel="noreferrer">
                            <button className="bg-[#f26200] text-white rounded-full px-6 py-1 text-base font-medium animate-bounce">
                                Download Resume
                            </button>
                        </a>
                        <div className='flex items-center gap-x-5'>
                            <Link to="https://www.linkedin.com/in/rohit-jangid-984729225/" className='text-[#f26200] text-3xl animate-bounceIn' target="_blank">
                                <LinkedInIcon />
                            </Link>
                            <Link to="https://github.com/Rohitjangid17" className='text-[#f26200] text-3xl animate-bounceIn' target="_blank">
                                <GitHubIcon />
                            </Link>
                            <Link to="https://www.instagram.com/monu_jangid76/" className='text-[#f26200] text-3xl animate-bounceIn' target="_blank">
                                <InstagramIcon />
                            </Link>
                        </div>
                    </>
                ) : null}
            </div>
        </section>
    );
}

export default Hero;