import React from 'react';
import Hero from '../components/Hero';
import Overview from '../components/Overview';

const About = () => {
    return (
        <>
            <Hero title="About Us" description="I am a passionate and detail-oriented front-end developer with a strong foundation in web technologies. My journey in the world of web development has been marked by hands-on experience, creativity, and a commitment to delivering visually appealing and intuitive user interfaces. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!" iscontent={false} />
            <Overview />
        </>
    )
}

export default About;