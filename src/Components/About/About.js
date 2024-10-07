import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const About = () => {
    return (
        <div className='xl:ml-20 xl:mt-24 mt-12' id='about'>
            <div className='flex gap-2 items-baseline w-fit border border-[#565656] py-2 px-5 rounded-full text-[11px]'>
                <i class="fa-regular fa-user"></i>
                <p>ABOUT</p>
            </div>

            <div className='xl:mt-10 mt-6 xl:w-[65%] w-[97%]'>
                <p data-aos="fade-up"
                    data-aos-duration="900" className='md:text-[40px] sm:text-[33px] text-[28px] text-white'>Every great design begins with a <span className='text-primary'>better story</span> </p>
                <p data-aos="fade-up"
                    data-aos-duration="1000" className='md:mt-7 mt-4 text-secondary md:text-[14px] text-[13px] md:w-[85%] md:leading-[30px] leading-[27px]'>As a graphic design maestro with a flair for the fantastical, I'm your go-to wizard for conjuring captivating visuals that leave a spellbinding impression. Armed with the magical tools of Adobe Photoshop, Illustrator, and AutoCAD, I weave intricate tapestries of design, transforming ordinary ideas into extraordinary masterpieces. From logo design that's as iconic as a unicorn's horn to flyers that are more enticing than a dragon's treasure, I'm dedicated to crafting designs that are not just visually stunning but also enchantingly effective. So let's embark on a creative adventure together and watch your brand soar to new heights!</p>
            </div>
        </div>
    );
};

export default About;