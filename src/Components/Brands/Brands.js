import React from 'react';
import c1 from '../../media/brand1.png';
import c2 from '../../media/brand2.png';
import c3 from '../../media/brand3.png';
import c4 from '../../media/brand4.png';

const Brands = () => {
    return (
        <div className='xl:mt-24 mt-16 xl:ml-[80px] lg:w-[80%] w-[90%]'>
            <p data-aos="fade-up"
                data-aos-duration="900" className='text-[13px] text-white font-[300]'>WORK WITH MANY BRANDS WORLDWIDE</p>

            <div className='md:mt-12 mt-8 grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-20'>
                <img data-aos="fade-up"
                    data-aos-duration="1000" className='h-[100px] w-[250px] object-contain' src={c1} alt="" />
                <img data-aos="fade-up"
                    data-aos-duration="1000" className='h-[100px] w-[250px] object-contain' src={c2} alt="" />
                <img data-aos="fade-up"
                    data-aos-duration="1000" className='h-[100px] w-[250px] object-contain' src={c3} alt="" />
                <img data-aos="fade-up"
                    data-aos-duration="1000" className='h-[100px] w-[250px] object-contain' src={c4} alt="" />
            </div>
        </div>
    );
};

export default Brands;