import React from 'react';
import Hero from '../components/Hero';
import Overview from '../components/Overview';
import Loader from '../components/Loader';

const About = () => {
    const title = "About Us";
    const description = "I am a passionate and detail-oriented front-end developer with a strong foundation in web technologies. My journey in the world of web development has been marked by hands-on experience, creativity, and a commitment to delivering visually appealing and intuitive user interfaces. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!";

    return (
        <>
            <Hero title={title} description={description} iscontent={false} />
            <Overview />
            <Loader />
        </>
    )
}

export default About;