import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='md:w-3/12 mx-auto text-center my-8'>
            <p className='text-yellow-400 mb-2'>---{subHeading}---</p>
            <p className='text-4xl uppercase border-y-4 py-6'>{heading}</p>
        </div>
    );
};

export default SectionTitle;