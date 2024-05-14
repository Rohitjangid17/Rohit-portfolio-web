import React from 'react';
import Loader from '../components/Loader';
import Hero from './Hero';

function Sketch() {
    const title = "Sketches";
    const description = "Sketches";

    return (
        <>

            <Hero title={title} description={description} iscontent={false} />
            <h1 className='text-5xl text-center py-5 font-bold'>Comming Soon</h1>
            <Loader />
        </>
    )
}

export default Sketch
