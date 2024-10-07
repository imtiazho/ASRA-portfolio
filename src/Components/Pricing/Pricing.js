import React from 'react';

const Pricing = () => {
    return (
        <div className='xl:ml-20 xl:mt-24 mt-12 lg:w-[80%] w-[95%]' id='pricing'>
            <div className='flex gap-2 items-baseline w-fit border border-[#565656] py-2 px-5 rounded-full text-[11px]'>
                <i class="fa-solid fa-dollar-sign"></i>
                <p>PRICING</p>
            </div>
            <p data-aos="fade-up"
                data-aos-duration="900" className='xl:mt-10 mt-6 md:text-[40px] sm:text-[33px] text-[28px] text-white'>My <span className='text-primary'>Pricing</span></p>

            <div className='md:mt-10 mt-8'>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-12'>
                    <div data-aos="fade-up"
                        data-aos-duration="1000" className='border border-[#565656] hover:border-primary duration-300 p-8 rounded-3xl  text-white flex flex-col gap-10'>
                        <div className='flex items-start justify-between'>
                            <p className='text-[22px] font-[300]'>FRONTEND</p>
                            <div className="text-end text-secondary">
                                <p className='text-[12px] font-[400]  mb-1'>Not ready the frontend?</p>
                                <p className='text-[12px] font-[400] '>or frontend budget</p>
                            </div>
                        </div>

                        <div className='flex items-baseline gap-4 border-b border-[#565656] pb-8'>
                            <p className='text-[55px] font-[300] text-primary '>$10</p>
                            <span className='text-[25px] font-[300] text-secondary'> / day</span>
                        </div>

                        <div className='flex flex-col gap-3 mb-12'>
                            <p className='text-[13px] font-[300] pop-font'>Need your UI Design</p>
                            <p className='text-[13px] font-[300] pop-font'>Thats design with Figma, Psd etc</p>
                            <p className='text-[13px] font-[300] pop-font'>Implement with Reactjs, Daisy UI, Firebase (If you reccomended)</p>
                            <p className='text-[13px] font-[300] pop-font'>Remote/Online</p>
                            <p className='text-[13px] font-[300] pop-font'>Work in 12/7 days, with weekend.</p>
                            <p className='text-[13px] font-[300] pop-font'>Support 24/7 days (If any bugs occur)</p>
                        </div>

                        <a href='#contact' className='btn btn-primary rounded-full bg-primary hover:bg-transparent border-transparent hover:border-primary hover:text-primary duration-300 font-[500]'><p className='text-[14px]'>Pick this package</p></a>
                    </div>
                </div>
            </div>

            <p className='lg:w-[60%] md:w-[80%] w-[95%] font-[300] text-[13px] md:mt-16 mt-10 leading-loose'>Don't find any package match with your plan! Want to setup a new tailor-made package for only you?. <a className='text-primary' href="#contact">Contact Us</a></p>
        </div>
    );
};

export default Pricing;