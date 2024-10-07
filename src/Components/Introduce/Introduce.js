import React from 'react';
import roundText from '../../media/round-text.png';
import './Introduce.css';

const Introduce = () => {

    return (
        <div className='xl:ml-20 ml-0 md:mt-20 mt-10' id='top'>
            <div className='flex gap-2 block items-baseline w-fit border border-[#565656] py-2 px-5 rounded-full text-[11px]'>
                <i class="fa-solid fa-house"></i>
                <p>INTRODUCE</p>
            </div>
            <div className="md:mt-8 mt-4">
                <p className='lg:text-[70px] md:text-[60px] text-[35px] text-white'>Hey! <span className='text-primary'><strong>Arbab</strong></span>, <br /> Graphic Designer</p>
                <p className='md:mt-6 mt-4 lg:text-[14px] text-[13px] text-seconary lg:w-[67%] md:w-[80%] w-[90%] leading-loose font-[300] tracking-wide'>As a versatile graphic designer, I specialize in crafting visually stunning designs that capture attention and convey messages effectively. With proficiency in Adobe Photoshop, Illustrator, and AutoCAD, I bring concepts to life through logo design, flyer creation, poster development, visiting card design, and product visualization. My passion for design lies in creating impactful visuals that resonate with audiences and leave a lasting impression. Thank you!</p>
            </div>

            <div className='xl:ml-[25rem] ml-0 xl:mt-6 xl:mb-12 mb-12 mt-12 relative flex justify-center items-center'>
                <span className='absolute text-[25px]'>
                    <i class="fa-solid fa-arrow-down-long"></i>
                </span>
                <div className='roundtext w-[175px] h-[175px] rounded-full border border-[#565656] flex justify-center items-center'>
                    <img className='' src={roundText} alt="" />
                </div>
            </div>

            <div className='flex items-center gap-[6rem]'>
                <div className='flex flex-col md:gap-3'>
                    <p className='text-primary md:text-[55px] text-[35px]'>01+</p>
                    <p className='md:text-[13px] text-[11px] text-secondary'>YEARS OF <br />EXPERIENCE</p>
                </div>
                <div className='flex flex-col md:gap-3'>
                    <p className='text-primary md:text-[55px] text-[35px]'>150+</p>
                    <p className='md:text-[13px] text-[11px] text-secondary'>PROJECTS COMPLETED ON<br />MY COUNTRY</p>
                </div>
            </div>
        </div>
    );
};

export default Introduce;