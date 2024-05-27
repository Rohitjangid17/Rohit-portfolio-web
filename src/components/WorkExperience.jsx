import React from 'react';
import { experiences } from "../constants/Constant";
import Card from './Card';

const WorkExperience = () => {
    return (
        <>
            {/* Work experience section start here */}
            <section className='py-10 bg-white px-5 sm:px-0'>
                <div className='container mx-auto'>
                    <div className='flex flex-col gap-y-1'>
                        <h3 className='text-[#757575] text-sm sm:text-base'>TECHNOLOGIES WHAT I HAVE DONE SO FAR</h3>
                        <h4 className='text-[#f26200] text-[34px] sm:text-[44px] font-semibold'>Work Experience</h4>
                        <p className='text-black text-base'> Certainly! Here's a shorter version:As a frontend developer, I specialize in crafting user-friendly interfaces using HTML, CSS, and JavaScript frameworks like React and Vue.js. With a knack for problem-solving and an eye for detail, I collaborate effectively to deliver high-quality solutions on time. My passion for innovation drives me to stay updated on the latest frontend technologies, ensuring superior user experiences and business success.</p>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-10'>
                        {experiences.map((experience) => (
                            <Card key={experience.id} icon={experience.image} title={experience.title} desciption={experience.designation} duration={experience.duration} isTestimonial={experience.isTestimonial} isDesignation={experience.isDesignation} isDuration={experience.isDuration} isHastag={experience.isHastag} isExperience={experience.isExperience} />
                        ))}
                    </div>
                </div>
            </section>
            {/* Work experience section end here */}
        </>
    )
}

export default WorkExperience;
