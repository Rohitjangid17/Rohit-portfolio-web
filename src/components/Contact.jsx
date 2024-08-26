import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <section
            className='py-10 bg-white px-5 sm:px-0 transition-opacity duration-1000 opacity-100 delay-1200'
        >
            <div className='container mx-auto'>
                <div className='flex flex-col gap-y-1'>
                    <h3 className='text-[#757575] text-sm sm:text-base'>GET IN TOUCH</h3>
                    <h4 className='text-[#f26200] text-[34px] sm:text-[44px] font-semibold'>Contact</h4>
                    <p className='text-black text-base'>
                        Need to get in touch? Drop me a message using the form below. Whether you have a project in mind, want to discuss potential collaborations, or simply want to say hello, I'm all ears. Looking forward to hearing from you!
                    </p>
                </div>

                <div
                    className='bg-[#f5ecdb] p-4 rounded-lg mt-10 transition-transform duration-500 transform translate-y-0 slide-up-delay-1200'
                >
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default Contact;