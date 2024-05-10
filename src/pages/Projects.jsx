import React from 'react';
import Hero from '../components/Hero';
import Loader from '../components/Loader';
import Project from '../components/Project';

const Projects = () => {
    const title = "Projects";
    const description = "At ABC Web Solutions since 2020, I've led frontend projects, optimized performance, and mentored junior devs.";

    return (
        <>
            <Hero title={title} description={description} iscontent={false} />
            <Project />
            <Loader />
        </>
    )
}

export default Projects;