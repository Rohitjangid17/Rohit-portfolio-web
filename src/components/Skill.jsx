import React from 'react';
import { skills } from "../constants/constant";
// import Card from './Card';

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

                    <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-x-5 gap-y-10 mt-10'>
                        {skills.map((skill) => (
                            <div key={skill.id} className="cursor-pointer w-full flex flex-col gap-y-4">
                                <img src={skill.image} width={skill.width} height={skill.height} className="w-14 h-14 mx-auto" alt={skill.title} />
                                <h5 className="text-[#f26200] text-base sm:text-lg font-semibold tracking-wide text-center">{skill.title}</h5>
                            </div>
                            // <Card key={skill.id} icon={skill.icon} title={skill.skill} isTestimonial={false} isHastag={false} />
                        ))}
                    </div>
                </div>
            </section>
            {/* Skills section end here */}
        </>
    )
}

export default Skill;