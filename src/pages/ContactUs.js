import React from 'react';
import Hero from '../components/Hero';
import Loader from '../components/Loader';
import Contact from '../components/Contact';

const ContactUs = () => {
    return (
        <>
            <Hero title="Contact Us" description="Test" iscontent={false} />
            <Contact />
            <Loader />
        </>
    )
}

export default ContactUs;