import React from 'react';
import { experiences } from "../constants/constant";
// import Card from './Card';

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

                    <div className='grid grid-cols-1 gap-10 mt-10'>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-1/2 w-1 bg-gray-300"></div>
                            <div className="space-y-16">
                                {experiences.map((experience) => (
                                    <div key={experience.id} className="cursor-pointer relative flex items-start space-x-0 flex-wrap space-y-6 sm:space-y-0 sm:space-x-6 sm:flex-nowrap">
                                        <div className="relative w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white shadow-lg transition-transform transform hover:scale-125 mx-auto">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" /></svg>
                                        </div>
                                        <div className="bg-[#f5ecdb] shadow-xl rounded-lg p-6 w-full border border-gray-200 scale-transition">
                                            <h3 className="text-2xl font-semibold text-[#f26200]">{experience.designation} at {experience.title}</h3>
                                            <p className="text-gray-600 mt-1">{experience.duration} | {experience.location} | {experience.employementType} </p>
                                            <p className="text-gray-700 mt-2 mb-4">Developed and maintained scalable web applications with a focus on performance and responsiveness. Collaborated with cross-functional teams to deliver high-quality user experiences.</p>
                                            <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
                                                {experience.achievements.map((achievement) => (
                                                    <li key={achievement.id}>{achievement.description}</li>
                                                ))}
                                            </ul>
                                            <div className="mt-4">
                                                <h4 className="text-lg font-semibold text-gray-800">Key Projects:</h4>
                                                <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                                                    {experience.keyProjects.map((keyProject) => (
                                                        <li key={keyProject.id}><strong>{keyProject.title}:</strong> {keyProject.description}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            {/* Work experience section end here */}
        </>
    )
}

export default WorkExperience;



// <div key={experience.id} className="cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:translate-y-[-0.5rem] hover:shadow-2xl">
//     <div className="bg-[#f26200] text-white p-4 flex items-center gap-x-4">
//         <img src={experience.image} alt={experience.title} className="w-12 h-12 rounded-full" />
//         <div>
//             <h3 className="text-xl text-white font-semibold">{experience.designation}</h3>
//             <p className="text-sm text-white">{experience.time} | {experience.location} | {experience.duration}</p>
//         </div>
//     </div>
//     <div className="p-6">
//         <ul className="list-disc list-inside space-y-2">
//             {experience.achievements.map((achievement) => (
//                 <li key={achievement.id} className='text-[#757575]'>
//                     <strong>{achievement.title}:</strong> {achievement.description}
//                 </li>
//             ))}
//         </ul>
//     </div>
//     <div className="bg-[#f5ecdb] p-4 text-center text-[#757575]">
//         <p>
//             <strong>Key Achievements:</strong> {experience.keyAchievements.join(', ')}
//         </p>
//     </div>
// </div>
// <Card key={experience.id} icon={experience.image} title={experience.title} desciption={experience.designation} duration={experience.duration} isTestimonial={experience.isTestimonial} isDesignation={experience.isDesignation} isDuration={experience.isDuration} isHastag={experience.isHastag} isExperience={experience.isExperience} />