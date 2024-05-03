import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <section className='h-[200vh]'>
                <div className='container mx-auto'>
                    <div className='grid grid-cols-2'>
                        <div className='flex flex-col items-start'>
                            <h1>Hello i am Rohit</h1>
                            <p>I develop Progressive web applications</p>
                            <button className=''>Download Resume</button>
                            <div>
                                <Link to="https://google.com" target="_blank"> <InstagramIcon /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;