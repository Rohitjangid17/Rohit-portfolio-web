import React from 'react';
import Card from './Card';
import { testimonials } from "../constants/Constant";

const Testimonials = () => {
    console.log(testimonials);
    return (
        <>
            {/* Testimonials section start here */}
            <section className='py-10 bg-white px-5 sm:px-0'>
                <div className='container mx-auto'>
                    <div className='flex flex-col gap-y-1'>
                        <h3 className='text-[#757575] text-sm sm:text-base'>WHAT OTHERS SAY</h3>
                        <h4 className='text-[#f26200] text-[34px] sm:text-[44px] font-semibold'>Testimonials</h4>
                        <p className='text-black text-base'>In my portfolio, you'll find a collection of endorsements from satisfied clients and collaborators who have experienced the quality and value of my work firsthand. These endorsements serve as powerful testimonials to my skills, professionalism, and dedication to delivering exceptional results. From glowing reviews to heartfelt recommendations, each endorsement reflects the trust and confidence that others have placed in me. As you explore my portfolio, I invite you to consider these endorsements as evidence of my ability to meet and exceed your expectations.</p>
                    </div>

                    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 mt-10'>
                        {testimonials.map((testimonial) => (
                            <Card key={testimonial.id} icon={testimonial.image} title={testimonial.name} desciption={testimonial.message} isHastag={false} isTestimonial={true} />
                        ))}
                    </div>
                </div>
            </section>
            {/* Testimonials section end here */}
        </>
    )
}

export default Testimonials;