import React from 'react';

const Card = ({ title, icon, index }) => {
    return (
        <>
            <div key={index} className='flex flex-col items-center gap-y-3 border shadow-md bg-[#f5ecdb] border-solid border-[#f26200] rounded-xl p-4'>
                {icon}
                <h4 className='text-[#f26200] text-base text-center font-semibold'>{title}</h4>
            </div>
        </>
    )
}

export default Card;