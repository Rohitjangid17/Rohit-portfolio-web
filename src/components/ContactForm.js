import React from 'react'

const ContactForm = () => {
    return (
        <>
            <form className='flex flex-col gap-y-4'>
                <div className='flex flex-col w-100 gap-y-1'>
                    <label htmlFor='name' className='text-black'>Your Name</label>
                    <input placeholder="What's your name?" className='py-3 px-5 rounded-lg border border-solid border-[#f26200] bg-[#f5ecdb] outline-none text-[#757575] contact-input' name='name' id='name' />
                </div>
                <div className='flex flex-col w-100 gap-y-1'>
                    <label htmlFor='email' className='text-black'>Your Email</label>
                    <input placeholder="What's your email?" className='py-3 px-5 rounded-lg border border-solid border-[#f26200] bg-[#f5ecdb] outline-none text-[#757575] contact-input' name='email' id='email' />
                </div>
                <div className='flex flex-col w-100 gap-y-1'>
                    <label htmlFor='message' className='text-black'>Message</label>
                    <textarea rows="7" placeholder="What do you want to say?" className='py-3 px-5 rounded-lg border border-solid border-[#f26200] bg-[#f5ecdb] outline-none text-[#757575] contact-input' name='message' id='message'></textarea>
                </div>

                <button className="max-w-max text-base bg-[#f26200] text-white px-10 py-1 rounded-full">Send Message</button>
            </form>
        </ >
    )
}

export default ContactForm