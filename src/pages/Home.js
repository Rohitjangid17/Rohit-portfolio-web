import React from 'react';
import Hero from '../components/Hero';
import CodeIcon from '@mui/icons-material/Code';
import { skills } from "../constants/Constant";
import ContactForm from '../components/ContactForm';

const Home = () => {
    return (
        <>
            <Hero />
         

            {/* Work Experience section start here */}
            {/* <section className='py-10 bg-white px-5 sm:px-0'>
                <div className='container mx-auto'>
                    <div className='flex flex-col gap-y-1'>
                        <h3 className='text-[#757575] text-sm sm:text-base'>WHAT I HAVE DONE SO FAR</h3>
                        <h4 className='text-[#f26200] text-[34px] sm:text-[44px] font-semibold'>Work Experience</h4>
                        <p className='text-black text-base'>I am a passionate and detail-oriented front-end developer with a strong foundation in web technologies. My journey in the world of web development has been marked by hands-on experience, creativity, and a commitment to delivering visually appealing and intuitive user interfaces. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!</p>
                    </div>
                    <div className='grid grid-cols-2 sm:grid-cols-2 gap-3 mt-10'>
                        <div>
                            <div>
                                <h4>Software Developer</h4>
                                <p>Durapid Technologies Pvt. Ltd - Jaipur, Rajasthan</p>
                            </div>

                            <ul>
                                <li>Developed and maintained user interfaces using HTML5, CSS3, and JavaScript ES6.</li>
                                <li>Developed and maintained user interfaces using HTML5, CSS3, and JavaScript ES6.</li>
                                <li>Developed and maintained user interfaces using HTML5, CSS3, and JavaScript ES6.</li>
                                <li>Developed and maintained user interfaces using HTML5, CSS3, and JavaScript ES6.</li>
                            </ul>
                        </div>
                        <div> </div>
                        <div>
                            <span>Sept 2022 - Present</span>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* Work Experience section end here */}

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
                            <div key={index} className='flex flex-col items-center gap-y-3 border shadow-md bg-[#f5ecdb] border-solid border-[#f26200] rounded-xl p-4'>
                                {skill.icon}
                                <h4 className='text-[#f26200] text-base text-center font-semibold'>{skill.skill}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Skills section end here */}

            {/* Projects section start here */}
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
            {/* Projects section end here */}

            {/* Testimonials section start here */}
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
            {/* Testimonials section end here */}

            {/* Contact section start here */}
            <section className='py-10 bg-white px-5 sm:px-0'>
                <div className='container mx-auto'>
                    <div className='flex flex-col gap-y-1'>
                        <h3 className='text-[#757575] text-sm sm:text-base'>GET IN TOUCH</h3>
                        <h4 className='text-[#f26200] text-[34px] sm:text-[44px] font-semibold'>Contact</h4>
                        <p className='text-black text-base'>Need to get in touch? Drop me a message using the form below. Whether you have a project in mind, want to discuss potential collaborations, or simply want to say hello, I'm all ears. Looking forward to hearing from you!</p>
                    </div>

                    <div className='bg-[#f5ecdb] p-4 rounded-lg mt-10'>
                       <ContactForm />
                    </div>
                </div>
            </section>
            {/* Contact section end here */}
        </>
    )
}

export default Home;