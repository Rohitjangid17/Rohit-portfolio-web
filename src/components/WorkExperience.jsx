import React from 'react';
import { skills } from "../constants/Constant";
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

                    <div className='mt-10'>
                        <div className='grid lg:grid-cols-2'>
                            <div className='bg-[#f5ecdb] p-4 flex flex-col gap-y-3 border shadow-md border-solid border-[#f26200] rounded-xl'>
                                <h4 className='text-[#f26200] text-[24px] font-medium'>Software Developer</h4>
                                <p className='text-black text-base'>Durapid Technologies Pvt. Ltd - Jaipur, Rajasthan</p>
                                <ul className='ml-5 list-disc space-y-2'>
                                    <li>Developed and maintained user interfaces using HTML5, CSS3, and JavaScript ES6.</li>
                                    <li>Developed and maintained user interfaces using HTML5, CSS3, and JavaScript ES6.</li>
                                    <li>Developed and maintained user interfaces using HTML5, CSS3, and JavaScript ES6.</li>
                                    <li>Developed and maintained user interfaces using HTML5, CSS3, and JavaScript ES6.</li>
                                    <li>Developed and maintained user interfaces using HTML5, CSS3, and JavaScript ES6.</li>
                                </ul>
                            </div>

                            <div className=''>
                                <span>Sept 2022 - Present</span>
                            </div>
                        </div>
                    </div>

                    {/* <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10'>
                        {skills.map((skill) => (
                            <Card key={skill.id} icon={skill.icon} title={skill.skill} isTestimonial={false} isHastag={false} />
                        ))}
                    </div> */}
                </div>
            </section>
            {/* Work experience section end here */}
        </>
    )
}

export default WorkExperience
