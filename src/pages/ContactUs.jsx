import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Loader from '../components/Loader';
import Contact from '../components/Contact';

const ContactUs = () => {
    const title = "Contact Us";
    const description = "Let's collaborate! Have a question or project idea? Just want to say hello? Drop me a message below and let's create something amazing together!";
    // Set title
    const setTitle = () => {
        document.title = "Rohit Portfolio | Contact";
    }

    useEffect(() => {
        setTitle();
    }, []);

    return (
        <>
            <Hero title={title} description={description} iscontent={false} />
            <Contact />
            <Loader />
        </>
    )
}

export default ContactUs;