import React from 'react'
import { useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();

    // Fetch product details using the ID from local data
    const project = { id: parseInt(id), name: `Project ${id}` };
    console.log(project);

    return (
        <>
            <section className='py-10 bg-white px-5 sm:px-0'>
                <div className='container mx-auto'>
                    <h2>Project Details</h2>
                    <p>ID: {project.id}</p>
                    <p>Name: {project.name}</p>
                </div>
            </section>
        </>
    )
}

export default Details;