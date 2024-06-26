import React from 'react';
import { projects } from '../constants/Constant';
import Card from './Card';
import { Link } from 'react-router-dom';

const Project = () => {
    return (
        <>
            {/* Projects section start here */}
            <section className='py-10 bg-white px-5 sm:px-0'>
                <div className='container mx-auto'>
                    <div className='flex flex-col gap-y-1'>
                        <h3 className='text-[#757575] text-sm sm:text-base'>MY WORK</h3>
                        <h4 className='text-[#f26200] text-[34px] sm:text-[44px] font-semibold'>Projects</h4>
                        <p className='text-black text-base'>Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively. I approach each project with a blend of creativity and functionality, ensuring that the user experience is not only visually engaging but also intuitive and seamless. My dedication to clean code and best practices reflects in the efficiency and maintainability of my projects.</p>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10'>
                        {projects.map((project) => (
                            <Card key={project.id} projectId={project.id} projectLink={project.projectUrl} icon={project.img} title={project.name} desciption={project.description} hastagList={project.hashTag} isTestimonial={false} isHastag={true} isProductDetails={true} />
                        ))}
                    </div>
                </div>
            </section>
            {/* Projects section end here */}
        </>
    )
}

export default Project;