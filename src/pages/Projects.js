import React from 'react';
import Hero from '../components/Hero';
import Loader from '../components/Loader';

const Projects = () => {
    return (
        <>
            <Hero title="Projects" description="At ABC Web Solutions since 2020, I've led frontend projects, optimized performance, and mentored junior devs." iscontent={false} />

            <Loader />
        </>
    )
}

export default Projects;