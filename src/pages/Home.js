import React from 'react';
import Hero from '../components/Hero';
import Overview from '../components/Overview';
import Loader from '../components/Loader';
import Contact from '../components/Contact';
import Skill from '../components/Skill';
import Project from '../components/Project';
import Testimonials from '../components/Testimonials';

const Home = () => {
    const title = "Welcome to Rohit's Portfolio";
    const description = "Welcome to Rohit's PortfolioWelcome to my digital playground, where pixels and code collide. I'm a frontend developer, crafting interactive marvels from visions. With creativity and tech savvy, I design captivating interfaces. Dive into my portfolio for the ultimate fusion of design and development.";

    return (
        <>
            <Hero title={title} description={description} iscontent={true} />
            <Overview />
            <Skill />
            <Project />
            <Testimonials />
            <Contact />
            <Loader />
        </>
    )
}

export default Home;