import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Loader from '../components/Loader';
import WorkExperience from '../components/WorkExperience';

const Work = () => {
    const title = "Work Experience";
    const description = "At ABC Web Solutions since 2020, I've led frontend projects, optimized performance, and mentored junior devs.";

    // Set title
    const setTitle = () => {
        document.title = "Rohit Portfolio | Work Experience";
    }

    useEffect(() => {
        setTitle();
    }, []);

    return (
        <>
            <Hero title={title} description={description} iscontent={false} />
            <WorkExperience />
            <Loader />
        </>
    )
}

export default Work;