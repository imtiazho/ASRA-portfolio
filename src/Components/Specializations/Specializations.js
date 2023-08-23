import React from 'react';

const Specializations = () => {
    return (
        <div className='xl:ml-20 xl:mt-24 mt-12' id='service'>
            <div className='flex gap-2 items-baseline w-fit border border-[#565656] py-2 px-5 rounded-full text-[11px]'>
                <i class="fa-regular fa-handshake"></i>
                <p>Services</p>
            </div>
            <div className='xl:mt-10 mt-6'>
                <p data-aos="fade-up"
                    data-aos-duration="900" className='md:text-[40px] sm:text-[33px] text-[28px] text-white'>My <span className='text-primary'>Specializations</span></p>
            </div>
            <div className='lg:w-[80%] w-[95%] lg:mt-10 mt-6 flex flex-col gap-4'>
                <div data-aos="fade-up"
                    data-aos-duration="1000" className='border md:p-8 p-5 border-[#565656] hover:border-primary duration-300 rounded-[15px] flex flex-col gap-5'>
                    <div className='flex justify-between'>
                        <div>
                            <p className='md:text-[24px] text-[20px]  text-white mb-[5px] text-[300]'>Frontend Development</p>
                            <p className='md:text-[14px] text-[12px] text-secondary text-[300]'>I am able to create website according to your idea using Reactjs, Tailwind Css, daisy UI or your recommended css frame.</p>
                        </div>
                        <div className='md:text-[30px] text-[25px] text-primary'>
                            <i class="fa-solid fa-bezier-curve"></i>
                        </div>
                    </div>

                    <p className='md:text-[12px] text-[10px] hover:underline-offset-1'>15+ PROJECTS</p>
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="1000" className='border md:p-8 p-5 border-[#565656] hover:border-primary duration-300 rounded-[15px] flex flex-col gap-5'>
                    <div className='flex justify-between'>
                        <div>
                            <p className='md:text-[24px] text-[20px]  text-white mb-[5px] text-[300]'>Backend Development</p>
                            <p className='md:text-[14px] text-[12px] text-secondary text-[300]'>I am able to make or modify your website to give some functionality by using Nodejs and Express js. So, that user can use your site for dynamically</p>
                        </div>
                        <div className='md:text-[30px] text-[25px] text-primary'>
                            <i class="fa-solid fa-code"></i>
                        </div>
                    </div>

                    <p className='md:text-[12px] text-[10px] hover:underline-offset-1'>10+ PROJECTS</p>
                </div>
            </div>
        </div>
    );
};

export default Specializations;