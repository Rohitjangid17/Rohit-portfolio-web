import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Overview from '../components/Overview';
import Loader from '../components/Loader';
import Skill from '../components/Skill';
import Project from '../components/Project';
import WorkExperience from '../components/WorkExperience';
import Contact from '../components/Contact';

const Home = () => {
    const title = "Welcome to Rohit's Portfolio";
    const description = "Welcome to my digital playground! I'm Rohit Jangid, a frontend developer with a passion for creating beautiful, user-friendly websites and applications. Explore my portfolio to discover how I blend design and technology to craft engaging online experiences. Let's innovate, collaborate, and bring your digital visions to life!";

    // Set title
    const setTitle = () => {
        document.title = "Rohit Portfolio | Home";
    }

    useEffect(() => {
        setTitle();
    }, []);

    return (
        <>
            <Hero title={title} description={description} iscontent={true} />
            <Overview />
            <WorkExperience />
            <Skill />
            <Project />
            {/* <Testimonials /> */}
            <Contact />
            <Loader />
        </>
    )
}

export default Home;