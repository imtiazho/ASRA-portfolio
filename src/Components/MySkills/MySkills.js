import React from 'react';
import { DiPhotoshop } from 'react-icons/di';
import { SiAdobeillustrator, SiAndroidauto } from 'react-icons/si';
import { RiPresentationFill } from 'react-icons/ri';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const MySkills = () => {
    return (
        <div className='xl:ml-20 xl:mt-24 mt-12' id='skills'>
            <div className='flex gap-2 items-baseline w-fit border border-[#565656] py-2 px-5 rounded-full text-[11px]'>
                <i class="fa-solid fa-code"></i>
                <p>SKILLS</p>
            </div>
            <div className='xl:mt-10 mt-6'>
                <p data-aos="fade-up"
                    data-aos-duration="900" className='md:text-[40px] sm:text-[33px] text-[28px] text-white'>My <span className='text-primary'>Advantages</span></p>
            </div>
            <div className='mt-8 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8 justify-center xl:w-[80%] w-[90%]'>
                <div data-aos="fade-up"
                    data-aos-duration="1000" className='flex flex-col gap-4 items-center'>
                    <div className='border-2 border-[#565656] hover:border-primary duration-300 flex flex-col gap-[1rem] md:py-12 py-8 md:px-8 px-6 items-center rounded-full'>
                        <DiPhotoshop className='text-[92px] text-[#31A8FF]' />
                        <p className='text-[27px] font-[300 text-primary'>90%</p>
                    </div>
                    <p className='text-white'>Photoshop</p>
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="1000" className='flex flex-col gap-4 items-center'>
                    <div className='border-2 border-[#565656] hover:border-primary duration-300 flex flex-col gap-[1rem] md:py-12 py-8 md:px-8 px-6 items-center rounded-full'>
                        <SiAdobeillustrator className='text-[92px] text-[#FF9B00]' />
                        <p className='text-[27px] font-[300 text-primary'>80%</p>
                    </div>
                    <p className='text-white'>Adobe Illustrator</p>
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="1000" className='flex flex-col gap-4 items-center'>
                    <div className='border-2 border-[#565656] hover:border-primary duration-300 flex flex-col gap-[1rem] md:py-12 py-8 md:px-8 px-6 items-center rounded-full'>
                        <SiAndroidauto className='text-[92px] text-[#F33726]' />
                        <p className='text-[27px] font-[300 text-primary'>60%</p>
                    </div>
                    <p className='text-white'>Autocad</p>
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="1000" className='flex flex-col gap-4 items-center'>
                    <div className='border-2 border-[#565656] hover:border-primary duration-300 flex flex-col gap-[1rem] md:py-12 py-8 md:px-8 px-6 items-center rounded-full'>
                        <RiPresentationFill className='text-[92px] text-[#FFFF00]' />
                        <p className='text-[27px] font-[300 text-primary'>75%</p>
                    </div>
                    <p className='text-white'>Presentation</p>
                </div>
            </div>
        </div>
    );
};

export default MySkills;