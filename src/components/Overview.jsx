import React from 'react';
import { overviews } from '../constants/Constant';

function Overview() {
    return (
        <div>
            {/* Overview section start here */}
            <section className='py-10 bg-white px-5 sm:px-0'>
                <div className='container mx-auto'>
                    <div className='flex flex-col gap-y-1'>
                        <h2 className='text-[#757575] text-sm sm:text-base'>INTRODUCTION</h2>
                        <h2 className='text-[#f26200] text-[34px] sm:text-[44px] font-semibold'>Overview</h2>
                        <p className='text-black text-base'>I am a passionate and detail-oriented front-end developer with a strong foundation in web technologies. My journey in the world of web development has been marked by hands-on experience, creativity, and a commitment to delivering visually appealing and intuitive user interfaces. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10 mt-10">
                        {overviews.map((overview) => (
                            <div key={overview.id} className="cursor-pointer w-full flex flex-col gap-y-4">
                                <img src={overview.image} width={overview.width} height={overview.height} className="w-14 h-14 mx-auto" alt={overview.title} />
                                <h2 className="text-[#f26200] text-base sm:text-lg font-semibold tracking-wide text-center">{overview.title}</h2>
                            </div>
                            // <div key={overview.id} className="cursor-pointer bg-[#f5ecdb] border border-[#f26200] shadow-md rounded-lg p-6 w-full transition-transform duration-300 ease-in-out transform card-hover-effect">
                            //     <img src={overview.icon} className="mb-4 object-cover w-20 h-auto mx-auto p-2" alt={overview.skill} />
                            //     <h5 className="text-[#f26200] text-xl font-semibold mb-2 pb-1 text-center">{overview.skill}</h5>
                            // </div>
                            // <Card key={overview.id} icon={overview.icon} title={overview.skill} isTestimonial={false} isHastag={false} />
                        ))}
                    </div>
                </div>
            </section>
            {/* Overview section end here */}
        </div>
    )
}

export default Overview;
