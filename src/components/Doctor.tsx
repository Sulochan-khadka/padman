import React from 'react';
import docimg from '../assets/doctor-img.png'
import './doctor.css'

const Doctor = () => {
    return <div className='doctor-container'>
        <div className='inside-content'></div>
        <img src={docimg} alt='docimg' className='doc-img' />
        <div className='doc-content font-light text-gray-500 text-sm'>
            Pat yourself on your back because without your help, we wouldn't have grown in the first place. With innovation in our mind and you at the heart of it, every single creation of ours is thought around you to help you have a better wellness journey. Don't believe us? Ask our 3 Lakh+ happy customers.
        </div>
    </div>;
};

export default Doctor;
