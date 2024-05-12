import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Overview from '../components/Overview';
import Loader from '../components/Loader';

const About = () => {
    const title = "About Us";
    const description = "Welcome to my corner of the web! I'm Rohit Jangid, a passionate frontend developer dedicated to crafting immersive digital experiences. With a blend of creativity and technical expertise, I specialize in turning ideas into captivating websites and applications. Join me on this journey as we explore the intersection of design and technology, one pixel at a time.";

    // Set title
    const setTitle = () => {
        document.title = "Rohit Portfolio | About";
    }

    useEffect(() => {
        setTitle();
    }, []);

    return (
        <>
            <Hero title={title} description={description} iscontent={false} />
            <Overview />
            <Loader />
        </>
    )
}

export default About;