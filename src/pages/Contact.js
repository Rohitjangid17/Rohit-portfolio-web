import React from 'react';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <>
            <Hero title="Contact Us" description="Test" iscontent={false} />

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

export default Contact;