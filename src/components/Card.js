import React from 'react';

const Card = ({ title, icon, index }) => {
    return (
        <>
            <div key={index} className='flex flex-col items-center gap-y-3 border shadow-md bg-[#f5ecdb] border-solid border-[#f26200] rounded-xl p-4'>
                <img src={icon} className='w-10' alt={title} />
                <h4 className='text-[#757575] text-base text-center font-medium'>{title}</h4>
            </div>
        </>
    )
}

export default Card;