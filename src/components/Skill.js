import React from 'react';
import { skills } from "../constants/Constant";
import Card from './Card';

const Skill = () => {
    return (
        <>
            {/* Skills section start here */}
            <section className='py-10 bg-white px-5 sm:px-0'>
                <div className='container mx-auto'>
                    <div className='flex flex-col gap-y-1'>
                        <h3 className='text-[#757575] text-sm sm:text-base'>TECHNOLOGIES USED</h3>
                        <h4 className='text-[#f26200] text-[34px] sm:text-[44px] font-semibold'>Skills</h4>
                        <p className='text-black text-base'>I'm a frontend developer proficient in HTML, CSS, and JavaScript, with expertise in frameworks like React.js, Angular, and Next.js. My focus on UI/UX principles ensures intuitive, visually appealing web applications. Experienced in Git and modern development tools, I prioritize delivering innovative solutions that surpass client needs.</p>
                    </div>

                    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10'>
                        {skills.map((skill, index) => (
                            <Card index={index} icon={skill.icon} title={skill.skill} />
                        ))}
                    </div>
                </div>
            </section>
            {/* Skills section end here */}
        </>
    )
}

export default Skill;