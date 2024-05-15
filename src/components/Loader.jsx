import React, { useEffect, useState } from 'react'
import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
    const [isLoader, setIsLoader] = useState(true);

    // Handle scrollbar when loader active
    const handleLoaderScrollbar = () => {
        return isLoader ? document.body.classList.add('no-scroll') : document.body.classList.remove('no-scroll');
    }

    handleLoaderScrollbar();

    useEffect(() => {
        const delay = setTimeout(() => {
            setIsLoader(false);
        }, 3000);
        return () => clearTimeout(delay);
    }, []);

    return (
        <>
            {isLoader && (
                <div className='loader'>
                    <ThreeDots visible={true} height="80" width="80" color="#f26200" radius="9" ariaLabel="three-dots-loading" />
                </div>
            )}
        </>
    )
}

export default Loader;