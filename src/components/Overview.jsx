import React from 'react';
import Card from './Card';
import { overviews } from '../constants/Constant';

function Overview() {
    return (
        <div>
            {/* Overview section start here */}
            <section className='py-10 bg-white px-5 sm:px-0'>
                <div className='container mx-auto'>
                    <div className='flex flex-col gap-y-1'>
                        <h3 className='text-[#757575] text-sm sm:text-base'>INTRODUCTION</h3>
                        <h4 className='text-[#f26200] text-[34px] sm:text-[44px] font-semibold'>Overview</h4>
                        <p className='text-black text-base'>I am a passionate and detail-oriented front-end developer with a strong foundation in web technologies. My journey in the world of web development has been marked by hands-on experience, creativity, and a commitment to delivering visually appealing and intuitive user interfaces. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!</p>
                    </div>

                    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10'>
                        {overviews.map((overview) => (
                            <Card key={overview.id} icon={overview.icon} title={overview.skill} isTestimonial={false} isHastag={false} />
                        ))}
                    </div>
                </div>
            </section>
            {/* Overview section end here */}
        </div>
    )
}

export default Overview;
