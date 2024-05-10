import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Get input field value
    const getInputValue = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    // Collect user details and send message
    const sendMessage = async (event) => {
        event.preventDefault();
        console.log(formData);
        axios.post('https://dashboard.emailjs.com/send', formData)
            .then(response => {
                if (response.status === 200) {
                    alert('Message sent successfully!');
                    setFormData({
                        name: '',
                        email: '',
                        message: ''
                    });
                } else {
                    alert('Failed to send message. Please try again later.');
                }
            })
            .catch(error => {
                console.error('Error sending message:', error);
                alert('An error occurred. Please try again later.');
            });
    }

    return (
        <>
            <form className='flex flex-col gap-y-4' onSubmit={sendMessage}>
                <div className='flex flex-col w-100 gap-y-1'>
                    <label htmlFor='name' className='text-black'>Your Name</label>
                    <input placeholder="What's your name?" className='py-3 px-5 rounded-lg border border-solid border-[#f26200] bg-[#f5ecdb] outline-none text-[#757575] contact-input' name='name' id='name' onChange={getInputValue} />
                </div>
                <div className='flex flex-col w-100 gap-y-1'>
                    <label htmlFor='email' className='text-black'>Your Email</label>
                    <input placeholder="What's your email?" className='py-3 px-5 rounded-lg border border-solid border-[#f26200] bg-[#f5ecdb] outline-none text-[#757575] contact-input' name='email' id='email' onChange={getInputValue} />
                </div>
                <div className='flex flex-col w-100 gap-y-1'>
                    <label htmlFor='message' className='text-black'>Message</label>
                    <textarea rows="7" placeholder="What do you want to say?" className='py-3 px-5 rounded-lg border border-solid border-[#f26200] bg-[#f5ecdb] outline-none text-[#757575] contact-input' name='message' id='message' onChange={getInputValue}></textarea>
                </div>

                <button className="max-w-max text-base bg-[#f26200] text-white px-10 py-1 rounded-full" type='submit'>Send Message</button>
            </form>
        </ >
    )
}

export default ContactForm;