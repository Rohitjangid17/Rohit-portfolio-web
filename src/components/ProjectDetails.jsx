import React from 'react';
import Loader from './Loader';
import Hero from './Hero';
import Details from "../components/Details";

function ProjectDetails() {
    const title = "Project Details";
    const description = "Test";

    return (
        <>
            <Hero title={title} description={description} iscontent={true} />

            <Details />
            <Loader />
        </>
    )
}

export default ProjectDetails;