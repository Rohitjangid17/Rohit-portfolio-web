import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import resume from "./../assets/Resume/Rohit_Jangid_Front_End_Developer.pdf";
import { Link } from 'react-router-dom';

const Hero = ({ title, description, iscontent }) => {
    return (
        <>
            <section className='h-[55vh] sm:[50vh] md:h-[60vh] lg:h-screen bg-[#f5ecdb]'>
                <div className='container mx-auto h-full'>
                    <div className='flex flex-col h-full justify-center items-center gap-y-[22px] px-5'>
                        <h1 className='text-center font-[900] text-[#f26200] text-[44px] leading-[50px] sm:text-[50px] sm:leading-[56px] md:text-[64px] md:leading-[80px]'>{title}</h1>
                        {/* <h2 className='text-center text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl'>I develop Progressive web applications</h2> */}
                        <p className='text-center font-normal text-[#757575] text-lg'>{description}</p>
                        {iscontent ? (
                            <>
                                <a href={resume} download target='_blank' rel='noopener noreferrer' title='Rohit Resume'>
                                    <button className="text-base bg-[#f26200] text-white px-10 py-1 rounded-full">Download Resume</button>
                                </a>
                                <div className='flex items-center gap-x-5'>
                                    <Link to="https://www.linkedin.com/in/rohit-jangid-984729225/" className='text-[#f26200]' target="_blank"> <LinkedInIcon /></Link>
                                    <Link to="https://github.com/Rohitjangid17" className='text-[#f26200]' target="_blank"> <GitHubIcon /></Link>
                                    <Link to="https://www.instagram.com/monu_jangid76/" className='text-[#f26200]' target="_blank"> <InstagramIcon /></Link>
                                </div>
                            </>
                        ) : null}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;
