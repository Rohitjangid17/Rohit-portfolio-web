import React from 'react';
import Hero from '../components/Hero';
import Loader from '../components/Loader';

const Work = () => {
    return (
        <>
            <Hero title="Work Experience" description="At ABC Web Solutions since 2020, I've led frontend projects, optimized performance, and mentored junior devs." iscontent={false} />
            <Loader />
        </>
    )
}

export default Work;