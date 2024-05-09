import React from 'react';
import Hero from '../components/Hero';
import Loader from '../components/Loader';
import Contact from '../components/Contact';

const ContactUs = () => {
    const title = "Contact Us";
    const description = "Test";

    return (
        <>
            <Hero title={title} description={description} iscontent={false} />
            <Contact />
            <Loader />
        </>
    )
}

export default ContactUs;