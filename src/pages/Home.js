import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import resume from "./../assets/Resume/Rohit_Jangid_Front_End_Developer.pdf";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <section className='h-[90vh] bg-gradient-to-b from-[#0F4F93] to-[#001655]'>
                <div className='container mx-auto h-full'>
                    <div className='flex flex-col h-full justify-center items-center gap-y-[30px]'>
                        <h1 className='text-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Welcome to <span className='text-[#FF9E2C]'>Rohit's Portfolio</span></h1>
                        {/* <h2 className='text-center text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl'>I develop Progressive web applications</h2> */}
                        <p className='text-center text-white text-base'>Welcome to my digital playground, where pixels and code collide. I'm a frontend developer, crafting interactive marvels from visions. With creativity and tech savvy, I design captivating interfaces. Dive into my portfolio for the ultimate fusion of design and development.</p>
                        <a href={resume} download target='_blank'rel='noopener noreferrer' title='Rohit Resume'>
                            <button className="text-base bg-[#49A1FF] text-white px-10 py-1 rounded-full">Download Resume</button>
                        </a>
                        <div className='flex items-center gap-x-5'>
                            <Link to="https://google.com" className='text-white' target="_blank"> <InstagramIcon /></Link>
                            <Link to="https://github.com/Rohitjangid17" className='text-white' target="_blank"> <GitHubIcon /></Link>
                            <Link to="https://www.linkedin.com/in/rohit-jangid-984729225/" className='text-white' target="_blank"> <LinkedInIcon /></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;