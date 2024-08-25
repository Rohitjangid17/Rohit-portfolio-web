import React from 'react';
import { projects } from '../constants/Constant';
import { Link } from 'react-router-dom';
// import Card from './Card';

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

                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                        {projects.map((project) => (
                            <div key={project.id} className="w-full bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl card-entrance">
                                <div className="relative">
                                    <img src={project.img} alt="Project Screenshot" className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-30"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                                        <h3 className="text-white text-xl font-semibold text-shadow-md">{project.name}</h3>
                                        <img src="https://www.timelabs.in//images/banner/access_control.webp" alt="Project Logo" className="w-14 h-14 rounded-full border-4 border-white bg-gray-900 p-2 rotate-in" />
                                    </div>
                                </div>

                                <div className="p-6">
                                    <p className="text-gray-700 text-sm mb-4">{project.description}</p>
                                    <ul className="flex flex-wrap gap-2 mb-4">
                                        {
                                            project.hashTag.map((tag) => {
                                                // Function to determine class based on tag value
                                                const getTagClass = (tag) => {
                                                    switch (tag.toLowerCase()) {
                                                        case 'html':
                                                            return 'bg-orange-400 text-white'; // Orange
                                                        case 'css':
                                                            return 'bg-blue-500 text-white'; // Blue
                                                        case 'bootstrap':
                                                            return 'bg-purple-500 text-white'; // Purple
                                                        case 'tailwindcss':
                                                            return 'bg-teal-500 text-white'; // Teal
                                                        case 'react.js':
                                                            return 'bg-blue-600 text-white'; // Dark Blue
                                                        case 'angular':
                                                            return 'bg-red-600 text-white'; // Red
                                                        case 'material angular':
                                                            return 'bg-green-600 text-white'; // Green
                                                        case 'typescript':
                                                            return 'bg-blue-300 text-blue-900'; // Light Blue
                                                        case 'jquery':
                                                            return 'bg-gray-400 text-gray-900'; // Gray
                                                        case 'dot net core':
                                                            return 'bg-blue-800 text-white'; // Dark Blue
                                                        case 'next.js':
                                                            return 'bg-gray-800 text-white'; // Dark Gray
                                                        case 'javascript':
                                                            return 'bg-yellow-400 text-yellow-800'; // Yellow
                                                        default:
                                                            return 'bg-gray-200 text-gray-800'; // Default Gray
                                                    }
                                                };

                                                return (
                                                    <li key={tag} className={`${getTagClass(tag)} rounded-full px-3 py-1 text-xs font-medium`}>
                                                        {tag}
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>

                                    <div className="flex justify-center gap-4">
                                        <Link to={project.projectUrl} target="_blank" className="bg-[#f26200] text-white rounded-full px-6 py-1 text-base font-medium transition-transform duration-300 ease-in-out shadow-pulse">Live Demo</Link>
                                        {(
                                            project.githubUrl === "" ? "" : <Link to={project.githubUrl} target="_blank" className="bg-[#f26200] text-white rounded-full px-6 py-1 text-base font-medium transition-transform duration-300 ease-in-out shadow-pulse">GitHub</Link>
                                        )}
                                    </div>
                                </div>
                                <div className="bg-[#f5ecdb] text-center py-2">
                                    <p className="text-[#757575] text-xs">Completed: July 2024</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Projects section end here */}
        </>
    );
}

export default Project;



// import React from 'react';
// import { projects } from '../constants/Constant';
// import { Link } from 'react-router-dom';
// // import Card from './Card';

// const Project = () => {
//     return (
//         <>
//             {/* Projects section start here */}
//             <section className='py-10 bg-white px-5 sm:px-0'>
//                 <div className='container mx-auto'>
//                     <div className='flex flex-col gap-y-1'>
//                         <h3 className='text-[#757575] text-sm sm:text-base'>MY WORK</h3>
//                         <h4 className='text-[#f26200] text-[34px] sm:text-[44px] font-semibold'>Projects</h4>
//                         <p className='text-black text-base'>Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively. I approach each project with a blend of creativity and functionality, ensuring that the user experience is not only visually engaging but also intuitive and seamless. My dedication to clean code and best practices reflects in the efficiency and maintainability of my projects.</p>
//                     </div>

//                     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10'>
//                         {projects.map((project) => (
//                             <div key={project.id} class="w-full bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl card-entrance">
//                                 <div class="relative">
//                                     <img src={project.img} alt="Project Screenshot" class="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110" />
//                                     <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-30"></div>
//                                     <div class="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
//                                         <h3 class="text-white text-xl font-semibold">{project.name}</h3>
//                                         <img src="https://www.timelabs.in//images/banner/access_control.webp" alt="Project Logo" class="w-14 h-14 rounded-full border-4 border-white bg-gray-900 p-2 rotate-in" />
//                                     </div>
//                                 </div>

//                                 <div class="p-6">
//                                     <p class="text-gray-700 text-sm mb-4">{project.description}</p>
//                                     <ul class="flex flex-wrap gap-2 mb-4">
//                                         {
//                                             project.hashTag.map((tag) => {
//                                                 // Function to determine class based on tag value
//                                                 const getTagClass = (tag) => {
//                                                     switch (tag.toLowerCase()) {
//                                                         case 'html':
//                                                             return 'bg-orange-400 text-white'; // Orange
//                                                         case 'css':
//                                                             return 'bg-blue-500 text-white'; // Blue
//                                                         case 'bootstrap':
//                                                             return 'bg-purple-500 text-white'; // Purple
//                                                         case 'tailwind css':
//                                                             return 'bg-teal-500 text-white'; // Teal
//                                                         case 'react':
//                                                             return 'bg-blue-600 text-white'; // Dark Blue
//                                                         case 'angular':
//                                                             return 'bg-red-600 text-white'; // Red
//                                                         case 'material angular':
//                                                             return 'bg-green-600 text-white'; // Green
//                                                         case 'typescript':
//                                                             return 'bg-blue-300 text-blue-900'; // Light Blue
//                                                         case 'jquery':
//                                                             return 'bg-gray-400 text-gray-900'; // Gray
//                                                         case 'dot net core':
//                                                             return 'bg-blue-800 text-white'; // Dark Blue
//                                                         case 'next.js':
//                                                             return 'bg-gray-800 text-white'; // Dark Gray
//                                                         case 'javascript':
//                                                             return 'bg-yellow-400 text-yellow-800'; // Yellow
//                                                         default:
//                                                             return 'bg-gray-200 text-gray-800'; // Default Gray
//                                                     }
//                                                 };

//                                                 return (
//                                                     <li key={tag} className={`${getTagClass(tag)} rounded-full px-3 py-1 text-[10px] font-medium`}>
//                                                         {tag}
//                                                     </li>
//                                                 );
//                                             })
//                                         }
//                                     </ul>

//                                     {/* <ul class="flex flex-wrap gap-2 mb-4">
//                                         <li class="bg-blue-200 text-blue-800 rounded-full px-3 py-1 text-xs font-medium">HTML</li>
//                                         <li class="bg-green-200 text-green-800 rounded-full px-3 py-1 text-xs font-medium">CSS</li>
//                                         <li class="bg-yellow-200 text-yellow-800 rounded-full px-3 py-1 text-xs font-medium">JavaScript</li>
//                                     </ul> */}
//                                     <div class="flex justify-center gap-4">
//                                         <Link to={project.projectUrl} target="_blank" class="bg-[#f26200] text-white rounded-full px-6 py-1 text-base font-medium transition-transform duration-300 ease-in-out shadow-pulse">Live Demo</Link>
//                                         {(
//                                             project.githubUrl === "" ? "" : <Link href={project.githubUrl} target="_blank" class="bg-[#f26200] text-white rounded-full px-6 py-1 text-base font-medium transition-transform duration-300 ease-in-out shadow-pulse">GitHub</Link>
//                                         )}
//                                     </div>
//                                 </div>
//                                 <div class="bg-[#f5ecdb] text-center py-2">
//                                     <p class="text-[#757575] text-xs">Completed: July 2024</p>
//                                 </div>
//                             </div>
//                             // <Card key={project.id} projectId={project.id} projectLink={project.projectUrl} icon={project.img} title={project.name} desciption={project.description} hastagList={project.hashTag} isTestimonial={false} isHastag={true} isProductDetails={true} />
//                         ))}
//                     </div>
//                 </div>
//             </section>
//             {/* Projects section end here */}
//         </>
//     )
// }

// export default Project;