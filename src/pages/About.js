import React from 'react';
import Hero from '../components/Hero';
import Overview from '../components/Overview';

const About = () => {
    return (
        <>
            <Hero title="About Us" description="Hi! I'm Rohit Jangid, a frontend developer dedicated to crafting captivating online experiences. Let's build something amazing together!" iscontent={false} />
            <Overview />
        </>
    )
}

export default About;