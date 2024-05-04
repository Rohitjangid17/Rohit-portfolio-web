import React from 'react';
import Hero from '../components/Hero';
import CodeIcon from '@mui/icons-material/Code';
import { skills } from "../constants/Constant";

const Home = () => {
    console.log(skills);
    return (
        <>
            <Hero />

            <section className='py-10 bg-white px-5 sm:px-0'>
                <div className='container mx-auto'>
                    <div className='flex flex-col gap-y-1'>
                        <h3 className='text-[#757575] text-sm sm:text-base'>INTRODUCTION</h3>
                        <h4 className='text-[#f26200] text-[34px] sm:text-[44px] font-semibold'>Overview</h4>
                        <p className='text-black text-base'>I am a passionate and detail-oriented front-end developer with a strong foundation in web technologies. My journey in the world of web development has been marked by hands-on experience, creativity, and a commitment to delivering visually appealing and intuitive user interfaces. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!</p>
                    </div>

                    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10'>
                        <div className='flex flex-col items-center gap-y-3 border shadow-md bg-[#f5ecdb] border-solid border-[#f26200] rounded-xl p-4'>
                            <CodeIcon className='icon text-black' />
                            <h4 className='text-[#f26200] text-base text-center font-semibold'>Front-End Web Development</h4>
                        </div>
                        <div className='flex flex-col items-center gap-y-3 border shadow-md bg-[#f5ecdb] border-solid border-[#f26200] rounded-xl p-4'>
                            <CodeIcon className='icon text-black' />
                            <h4 className='text-[#f26200] text-base text-center font-semibold'>Angular Development</h4>
                        </div>
                        <div className='flex flex-col items-center gap-y-3 border shadow-md bg-[#f5ecdb] border-solid border-[#f26200] rounded-xl p-4'>
                            <CodeIcon className='icon text-black' />
                            <h4 className='text-[#f26200] text-base text-center font-semibold'>React Development</h4>
                        </div>
                        <div className='flex flex-col items-center gap-y-3 border shadow-md bg-[#f5ecdb] border-solid border-[#f26200] rounded-xl p-4'>
                            <CodeIcon className='icon text-black' />
                            <h4 className='text-[#f26200] text-base text-center font-semibold'>Next.js Development</h4>
                        </div>
                        <div className='flex flex-col items-center gap-y-3 border shadow-md bg-[#f5ecdb] border-solid border-[#f26200] rounded-xl p-4'>
                            <CodeIcon className='icon text-black' />
                            <h4 className='text-[#f26200] text-base text-center font-semibold'>API Integration</h4>
                        </div>
                        <div className='flex flex-col items-center gap-y-3 border shadow-md bg-[#f5ecdb] border-solid border-[#f26200] rounded-xl p-4'>
                            <CodeIcon className='icon text-black' />
                            <h4 className='text-[#f26200] text-base text-center font-semibold'>Performance Optimization</h4>
                        </div>
                        <div className='flex flex-col items-center gap-y-3 border shadow-md bg-[#f5ecdb] border-solid border-[#f26200] rounded-xl p-4'>
                            <CodeIcon className='icon text-black' />
                            <h4 className='text-[#f26200] text-base text-center font-semibold'>Code Maintenance and Documentation</h4>
                        </div>
                        <div className='flex flex-col items-center gap-y-3 border shadow-md bg-[#f5ecdb] border-solid border-[#f26200] rounded-xl p-4'>
                            <CodeIcon className='icon text-black' />
                            <h4 className='text-[#f26200] text-base text-center font-semibold'>Project Collaboration</h4>
                        </div>
                        <div className='flex flex-col items-center gap-y-3 border shadow-md bg-[#f5ecdb] border-solid border-[#f26200] rounded-xl p-4'>
                            <CodeIcon className='icon text-black' />
                            <h4 className='text-[#f26200] text-base text-center font-semibold'>Content Creation</h4>
                        </div>
                        <div className='flex flex-col items-center gap-y-3 border shadow-md bg-[#f5ecdb] border-solid border-[#f26200] rounded-xl p-4'>
                            <CodeIcon className='icon text-black' />
                            <h4 className='text-[#f26200] text-base text-center font-semibold'>Web Designing</h4>
                        </div>
                        <div className='flex flex-col items-center gap-y-3 border shadow-md bg-[#f5ecdb] border-solid border-[#f26200] rounded-xl p-4'>
                            <CodeIcon className='icon text-black' />
                            <h4 className='text-[#f26200] text-base text-center font-semibold'>Photography</h4>
                        </div>
                        <div className='flex flex-col items-center gap-y-3 border shadow-md bg-[#f5ecdb] border-solid border-[#f26200] rounded-xl p-4'>
                            <CodeIcon className='icon text-black' />
                            <h4 className='text-[#f26200] text-base text-center font-semibold'>Artist</h4>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-10 bg-white px-5 sm:px-0'>
                <div className='container mx-auto'>
                    <div className='flex flex-col gap-y-1'>
                        <h3 className='text-[#757575] text-sm sm:text-base'>TECHNOLOGIES USED</h3>
                        <h4 className='text-[#f26200] text-[34px] sm:text-[44px] font-semibold'>Skills</h4>
                        <p className='text-black text-base'>I'm a frontend developer proficient in HTML, CSS, and JavaScript, with expertise in frameworks like React.js, Angular, and Next.js. My focus on UI/UX principles ensures intuitive, visually appealing web applications. Experienced in Git and modern development tools, I prioritize delivering innovative solutions that surpass client needs.</p>
                    </div>

                    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10'>
                        {skills.map((skill, index) => (
                            <div key={index} className='flex flex-col items-center gap-y-3 border shadow-md bg-[#f5ecdb] border-solid border-[#f26200] rounded-xl p-4'>
                                {skill.icon}
                                <h4 className='text-[#f26200] text-base text-center font-semibold'>{skill.skill}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className='py-10 bg-white px-5 sm:px-0'>
                <div className='container mx-auto'>
                    <div className='flex flex-col gap-y-1'>
                        <h3 className='text-[#757575] text-sm sm:text-base'>MY WORK</h3>
                        <h4 className='text-[#f26200] text-[34px] sm:text-[44px] font-semibold'>Projects</h4>
                        <p className='text-black text-base'>Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively. I approach each project with a blend of creativity and functionality, ensuring that the user experience is not only visually engaging but also intuitive and seamless. My dedication to clean code and best practices reflects in the efficiency and maintainability of my projects.</p>
                    </div>

                    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10'>
                        <div className='flex flex-col items-center gap-y-3 border shadow-md bg-[#f5ecdb] border-solid border-[#f26200] rounded-xl p-4'>
                            <CodeIcon className='icon text-black' />
                            <h4 className='text-[#f26200] text-base text-center font-semibold'>Front-End Web Development</h4>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-10 bg-white px-5 sm:px-0'>
                <div className='container mx-auto'>
                    <div className='flex flex-col gap-y-1'>
                        <h3 className='text-[#757575] text-sm sm:text-base'>WHAT OTHERS SAY</h3>
                        <h4 className='text-[#f26200] text-[34px] sm:text-[44px] font-semibold'>Testimonials</h4>
                        <p className='text-black text-base'>In my portfolio, you'll find a collection of endorsements from satisfied clients and collaborators who have experienced the quality and value of my work firsthand. These endorsements serve as powerful testimonials to my skills, professionalism, and dedication to delivering exceptional results. From glowing reviews to heartfelt recommendations, each endorsement reflects the trust and confidence that others have placed in me. As you explore my portfolio, I invite you to consider these endorsements as evidence of my ability to meet and exceed your expectations.</p>
                    </div>

                    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10'>
                        <div className='flex flex-col items-center gap-y-3 border shadow-md bg-[#f5ecdb] border-solid border-[#f26200] rounded-xl p-4'>
                            <CodeIcon className='icon text-black' />
                            <h4 className='text-[#f26200] text-base text-center font-semibold'>Front-End Web Development</h4>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;