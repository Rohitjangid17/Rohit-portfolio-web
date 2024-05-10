import React from 'react';

const Card = ({ title, icon, index, isHastag, hastagList, desciption }) => {
    return (
        <>
            <div key={index} className={`flex flex-col items-center gap-y-3 border shadow-md bg-[#f5ecdb] border-solid border-[#f26200] rounded-xl p-4 ${isHastag ? 'min-h-96' : 'h-auto'}`}>
                <img src={icon} className={`${isHastag ? 'w-full' : 'w-10'}`} alt={title} />
                <h4 className='text-[#757575] text-base text-center font-medium'>{title}</h4>
                {isHastag ? (<p className='text-[#757575] text-base text-center font-normal'>{desciption}</p>) : false}
                {isHastag ? (
                    <>
                        <ul className='flex gap-x-5 flex-wrap justify-center'>
                            {hastagList.map((hastag, index) => (
                                <li key={index} className='text-[#757575] text-base'>{hastag}</li>
                            ))}
                        </ul>
                    </>
                ) : false}
            </div>
        </>
    )
}

export default Card;