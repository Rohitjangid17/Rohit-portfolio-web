import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Card = ({ title, icon, isHastag, hastagList, desciption, isTestimonial, isDesignation, duration, isDuration, isExperience, isProductDetails, projectLink, projectId }) => {

    return (
        <>
            <div className={`flex items-center border shadow-md bg-[#f5ecdb] border-solid border-[#f26200] rounded-xl p-4 ${isExperience ? 'bg-transparent border-none shadow-none rounded-none p-0 !flex-row gap-x-2' : ''} ${isTestimonial ? 'flex-row gap-x-3' : 'flex-col gap-y-2'} ${isHastag ? 'min-h-96' : 'h-auto'} ${isTestimonial ? 'flex-row' : 'h-auto'}`}>
                <img src={icon} className={`${isHastag ? 'w-full' : 'w-10'} ${isExperience ? 'w-[70px] h-full rounded-lg' : 'w-10'} ${isTestimonial ? 'rounded-[100px] w-[100px] h-[100px]' : 'flex-col'}`} loading='lazy' alt={title} />
                {/* Experience content */}
                {isExperience ? (
                    <>
                        <div>
                            <h4 className='text-[#757575] text-base text-left font-medium'>{title}</h4>
                            {isHastag || isDesignation ? (<p className='text-[#757575] text-base text-left font-normal'>{desciption}</p>) : null}
                            {isDuration ? (<p className='text-[#757575] text-base text-left font-normal'>{duration}</p>) : null}
                        </div>
                    </>
                ) : (
                    <>
                        <h4 className='text-[#757575] text-base text-center font-medium'>{title}</h4>
                        {isHastag || isDesignation ? (<p className='text-[#757575] text-base text-center font-normal'>{desciption}</p>) : null}
                    </>
                )}

                {/* Hastag list */}
                {isHastag ? (
                    <>
                        <ul className='flex gap-x-5 flex-wrap justify-center'>
                            {hastagList.map((hastag, index) => (
                                <li key={index} className='text-[#757575] text-base'>{hastag}</li>
                            ))}
                        </ul>
                    </>
                ) : null}

                {isProductDetails ? (
                    <>
                        <div className='flex justify-between w-full mt-2'>
                            <Link className='text-[#f26200] font-medium text-base' target='_blank' to={projectLink}>Project Link</Link>
                            <Link className='text-[#f26200] font-medium text-base' to={`/project-details/${projectId}`}>View More</Link>
                        </div>
                    </>
                ) : null}
            </div>
        </>
    )
}

export default Card;