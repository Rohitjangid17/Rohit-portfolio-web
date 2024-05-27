import React from 'react'
import Loader from './Loader'
import Hero from './Hero'
import { useParams } from 'react-router-dom';

function ProjectDetails() {
    const title = "Project Details";
    const description = "Test";
    let { id } = useParams();

    return (
        <>
            <Hero title={title} description={description} iscontent={true} />

            <h2>Project Details</h2>
            <p>Project ID: {id}</p>
            <Loader />
        </>
    )
}

export default ProjectDetails;