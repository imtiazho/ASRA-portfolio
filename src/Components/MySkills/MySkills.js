import React from 'react';
import { BiLogoFirebase, BiLogoMongodb, BiLogoNodejs, BiLogoReact, BiLogoTailwindCss } from 'react-icons/bi';
import { SiDaisyui, SiExpress } from 'react-icons/si';
import { TbBrandBootstrap } from 'react-icons/tb';
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
                    <div className='border-2 border-[#565656] hover:border-primary duration-300 flex flex-col gap-[.25rem] md:py-12 py-8 md:px-8 px-6 items-center rounded-full'>
                        <BiLogoReact className='text-[92px] text-[#00D8FF]' />
                        <p className='text-[27px] font-[300 text-primary'>90%</p>
                    </div>
                    <p className='text-white'>React js</p>
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="1000" className='flex flex-col gap-4 items-center'>
                    <div className='border-2 border-[#565656] hover:border-primary duration-300 flex flex-col gap-[.25rem] md:py-12 py-8 md:px-8 px-6 items-center rounded-full'>
                        <BiLogoNodejs className='text-[92px] text-[#509941]' />
                        <p className='text-[27px] font-[300 text-primary'>80%</p>
                    </div>
                    <p className='text-white'>Node js</p>
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="1000" className='flex flex-col gap-4 items-center'>
                    <div className='border-2 border-[#565656] hover:border-primary duration-300 flex flex-col gap-[.25rem] md:py-12 py-8 md:px-8 px-6 items-center rounded-full'>
                        <SiExpress className='text-[92px] text-[#fff]' />
                        <p className='text-[27px] font-[300 text-primary'>85%</p>
                    </div>
                    <p className='text-white'>Express js</p>
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="1000" className='flex flex-col gap-4 items-center'>
                    <div className='border-2 border-[#565656] hover:border-primary duration-300 flex flex-col gap-[.25rem] md:py-12 py-8 md:px-8 px-6 items-center rounded-full'>
                        <BiLogoMongodb className='text-[92px] text-[#509941]' />
                        <p className='text-[27px] font-[300 text-primary'>75%</p>
                    </div>
                    <p className='text-white'>Mongodb</p>
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="1000" className='flex flex-col gap-4 items-center'>
                    <div className='border-2 border-[#565656] hover:border-primary duration-300 flex flex-col gap-[.25rem] md:py-12 py-8 md:px-8 px-6 items-center rounded-full'>
                        <BiLogoFirebase className='text-[92px] text-[#FFCC2F]' />
                        <p className='text-[27px] font-[300 text-primary'>70%</p>
                    </div>
                    <p className='text-white'>Firebase</p>
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="1000" className='flex flex-col gap-4 items-center'>
                    <div className='border-2 border-[#565656] hover:border-primary duration-300 flex flex-col gap-[.25rem] md:py-12 py-8 md:px-8 px-6 items-center rounded-full'>
                        <BiLogoTailwindCss className='text-[92px] text-[#00D8FF]' />
                        <p className='text-[27px] font-[300 text-primary'>97%</p>
                    </div>
                    <p className='text-white'>Tailwind Css</p>
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="1000" className='flex flex-col gap-4 items-center'>
                    <div className='border-2 border-[#565656] hover:border-primary duration-300 flex flex-col gap-[.25rem] md:py-12 py-8 md:px-8 px-6 items-center rounded-full'>
                        <TbBrandBootstrap className='text-[92px] text-[#7111F5]' />
                        <p className='text-[27px] font-[300 text-primary'>80%</p>
                    </div>
                    <p className='text-white'>Bootstrap 5</p>
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="1000" className='flex flex-col gap-4 items-center'>
                    <div className='border-2 border-[#565656] hover:border-primary duration-300 flex flex-col gap-[.25rem] md:py-12 py-8 md:px-8 px-6 items-center rounded-full'>
                        <SiDaisyui className='text-[92px] text-[#1AD1A5]' />
                        <p className='text-[27px] font-[300 text-primary'>90%</p>
                    </div>
                    <p className='text-white'>Daisy UI</p>
                </div>
            </div>
        </div>
    );
};

export default MySkills;