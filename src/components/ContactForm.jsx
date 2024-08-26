import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const getInputValue = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const sendMessage = async (event) => {
        event.preventDefault();
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
        <form className='flex flex-col gap-y-4'>
            <div className='flex flex-col w-100 gap-y-1 transition-opacity duration-500 delay-1200'>
                <label htmlFor='name' className='text-black'>Your Name</label>
                <input
                    placeholder="What's your name?"
                    className='py-3 px-5 rounded-lg border border-solid border-[#f26200] bg-[#f5ecdb] outline-none text-[#757575] transition-opacity duration-500'
                    name='name'
                    id='name'
                    onChange={getInputValue}
                />
            </div>
            <div className='flex flex-col w-100 gap-y-1 transition-opacity duration-500 delay-1200'>
                <label htmlFor='email' className='text-black'>Your Email</label>
                <input
                    placeholder="What's your email?"
                    className='py-3 px-5 rounded-lg border border-solid border-[#f26200] bg-[#f5ecdb] outline-none text-[#757575] transition-opacity duration-500'
                    name='email'
                    id='email'
                    onChange={getInputValue}
                />
            </div>
            <div className='flex flex-col w-100 gap-y-1 transition-opacity duration-500 delay-1200'>
                <label htmlFor='message' className='text-black'>Message</label>
                <textarea
                    rows="7"
                    placeholder="What do you want to say?"
                    className='py-3 px-5 rounded-lg border border-solid border-[#f26200] bg-[#f5ecdb] outline-none text-[#757575] transition-opacity duration-500'
                    name='message'
                    id='message'
                    onChange={getInputValue}
                ></textarea>
            </div>

            <button
                className="max-w-max text-base bg-[#f26200] text-white px-10 py-1 rounded-full transition-transform duration-300 hover:scale-105"
                type='submit' onClick={sendMessage}
            >
                Send Message
            </button>
        </form>
    )
}

export default ContactForm;