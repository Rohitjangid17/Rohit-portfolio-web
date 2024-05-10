import React from 'react';
import Hero from '../components/Hero';
import Loader from '../components/Loader';

const Work = () => {
    const title = "Work Experience";
    const description = "At ABC Web Solutions since 2020, I've led frontend projects, optimized performance, and mentored junior devs.";

    return (
        <>
            <Hero title={title} description={description} iscontent={false} />
            <Loader />
        </>
    )
}

export default Work;