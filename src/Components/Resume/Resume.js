import React from 'react';

const Resume = () => {
    const today = new Date().getFullYear();
    return (
        <div className='xl:ml-20 xl:mt-24 mt-12' id='resume'>
            <div className='flex gap-2 items-baseline w-fit border border-[#565656] py-2 px-5 rounded-full text-[11px]'>
                <i class="fa-brands fa-creative-commons-nd"></i>
                <p>RESUME</p>
            </div>
            <div className='xl:mt-10 mt-6'>
                <p data-aos="fade-up"
                    data-aos-duration="900" className='md:text-[40px] sm:text-[33px] text-[28px] text-white'>Education & <span className='text-primary'>Experience</span></p>
                <div data-aos="fade-up"
                    data-aos-duration="1000" className="border-l-2 border-[#565656] mt-8 relative">
                    <div className='ml-8 md:mb-16 mb-[2.5rem]'>
                        <div className='w-[12px] h-[12px] bg-primary rounded-full absolute -left-[6px]'></div>
                        <div className='text-secondary'>
                            <p className='md:text-[15px] text-[13px] md:mb-5 mb-2'>{today} - Present</p>
                            <div className='flex flex-col md:gap-6 gap-3'>
                                <div>
                                    <p className='md:text-[23px] text-[20px] text-white font-[300] mb-[3px]'>Studying Computer Science and Engineering</p>
                                    <p className='md:text-[12px] text-[11px] font-[300]'>Dhaka City College</p>
                                </div>
                                <div>
                                    <p className='md:text-[23px] text-[20px] text-white font-[300] mb-[3px]'>Senior Graphic Designer</p>
                                    <p className='md:text-[12px] text-[11px] font-[300]'>Genziz - Cloting Brand</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='ml-8 pb-4'>
                        <div className='w-[12px] h-[12px] bg-primary rounded-full absolute -left-[6px]'></div>
                        <div className='text-secondary'>
                            <p className='md:text-[15px] text-[13px] md:mb-5 mb-2'>2021 - 2023</p>
                            <div className='flex flex-col md:gap-6 gap-3'>
                                <div>
                                    <p className='md:text-[23px] text-[20px] text-white font-[300] md:mb-[3px] mb-[2px]'>Management and Quality Control </p>
                                    <p className='text-[12px] font-[300]'>Western cover Bd & Unique cover Bd</p>
                                </div>
                                <div>
                                    <p className='md:text-[23px] text-[20px] text-white font-[300] md:mb-[3px] mb-[2px]'>Cultural Club President</p>
                                    <p className='text-[12px] font-[300]'>Government Science College (2020-2022)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;