import React from 'react';
import project1 from '../../media/portfolio1.jpg';
import project2 from '../../media/p2.jpg';
import project3 from '../../media/p3.jpg';
import project4 from '../../media/p4.jpg';
import project5 from '../../media/p5.jpg';
import project6 from '../../media/p6.jpg';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <div className='xl:ml-20 xl:mt-24 mt-12' id='portfolio'>
            <div className='flex gap-2 items-baseline w-fit border border-[#565656] py-2 px-5 rounded-full text-[11px]'>
                <i class="fa-solid fa-diagram-project"></i>
                <p>PORTFOLIO</p>
            </div>
            <div className='xl:mt-10 mt-6'>
                <p data-aos="fade-up"
                    data-aos-duration="900" className='md:text-[40px] sm:text-[33px] text-[28px] text-white'>Featured <span className='text-primary'>Projects</span></p>
            </div>
            <div className='xl:w-[80%] w-[95%] mt-10 flex flex-col gap-20'>
                <div data-aos="fade-up"
                    data-aos-duration="1000" className='cus-hover'>
                    <div className='relative'>
                        <img className='rounded-xl object-cover' src={project1} alt="" />
                        <div className='flex items-center md:gap-6 gap-3 absolute bottom-[15px] left-[15px]'>
                            <p className='hov-unitone bg-white md:px-5 px-3 md:py-[5px] py-[3px] text-black md:text-[14px] text-[12px] font-[300] rounded-full'>Photoshop</p>
                        </div>
                    </div>
                    <a href='' target='_blank' rel="noreferrer" className='relative top-[30px] md:text-[24px] text-[20px] font-[300] text-white hov-unitone-i duration-300'>Pizza || Poster Design</a>
                </div>

                <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-[5rem]'>
                    <div data-aos="fade-up"
                        data-aos-duration="1000" className='cus-hover'>
                        <div className='relative'>
                            <img className='rounded-xl object-cover' src={project3} alt="" />
                            <div className='flex items-center md:gap-6 gap-3 absolute bottom-[15px] left-[15px]'>
                                <p className='hov-unitone bg-white md:px-5 px-3 md:py-[5px] py-[3px] text-black md:text-[14px] text-[12px] font-[300] rounded-full'>Photoshop</p>
                            </div>
                        </div>
                        <a href='' target='_blank' rel="noreferrer" className='relative top-[30px] md:text-[24px] text-[20px] font-[300] text-white hov-unitone-i duration-300'>Starbucks || Poster Design</a>
                    </div>
                    
                    <div data-aos="fade-up"
                        data-aos-duration="1000" className='cus-hover'>
                        <div className='relative'>
                            <img className='rounded-xl object-cover' src={project6} alt="" />
                            <div className='flex items-center md:gap-6 gap-3 absolute bottom-[15px] left-[15px]'>
                                <p className='hov-unitone bg-white md:px-5 px-3 md:py-[5px] py-[3px] text-black md:text-[14px] text-[12px] font-[300] rounded-full'>Photoshop</p>
                            </div>
                        </div>
                        <a href='' target='_blank' rel="noreferrer" className='relative top-[30px] md:text-[24px] text-[20px] font-[300] text-white hov-unitone-i duration-300'>Nike || Poster Design</a>
                    </div>
                </div>

                <div data-aos="fade-up"
                    data-aos-duration="1000" className='cus-hover'>
                    <div className='relative'>
                        <img className='rounded-xl object-cover' src={project2} alt="" />
                        <div className='flex items-center md:gap-6 gap-3 absolute bottom-[15px] left-[15px]'>
                            <p className='hov-unitone bg-white md:px-5 px-3 md:py-[5px] py-[3px] text-black md:text-[14px] text-[12px] font-[300] rounded-full'>Photoshop</p>
                        </div>
                    </div>
                    <a href='' target='_blank' rel="noreferrer" className='relative top-[30px] md:text-[24px] text-[20px] font-[300] text-white hov-unitone-i duration-300'>Delivery || Poster Design</a>
                </div>

                <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-[5rem]'>
                    <div data-aos="fade-up"
                        data-aos-duration="1000" className='cus-hover'>
                        <div className='relative'>
                            <img className='rounded-xl object-cover' src={project5} alt="" />
                            <div className='flex items-center md:gap-6 gap-3 absolute bottom-[15px] left-[15px]'>
                                <p className='hov-unitone bg-white md:px-5 px-3 md:py-[5px] py-[3px] text-black md:text-[14px] text-[12px] font-[300] rounded-full'>Illustrator</p>
                            </div>
                        </div>
                        <a href='' target='_blank' rel="noreferrer" className='relative top-[30px] md:text-[24px] text-[20px] font-[300] text-white hov-unitone-i duration-300'>Commercial || Card Design - 1</a>
                    </div>

                    <div data-aos="fade-up"
                        data-aos-duration="1000" className='cus-hover'>
                        <div className='relative'>
                            <img className='rounded-xl object-cover' src={project4} alt="" />
                            <div className='flex items-center md:gap-6 gap-3 absolute bottom-[15px] left-[15px]'>
                                <p className='hov-unitone bg-white md:px-5 px-3 md:py-[5px] py-[3px] text-black md:text-[14px] text-[12px] font-[300] rounded-full'>Illustrator</p>
                            </div>
                        </div>
                        <a href='' target='_blank' rel="noreferrer" className='relative top-[30px] md:text-[24px] text-[20px] font-[300] text-white hov-unitone-i duration-300'>Commercial || Flyer Design</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;