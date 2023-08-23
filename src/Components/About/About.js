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
                    data-aos-duration="1000" className='md:mt-7 mt-4 text-secondary md:text-[14px] text-[13px] md:w-[85%] md:leading-[30px] leading-[27px]'>As a skilled MERN (MongoDB, Express.js, React.js, Node.js) developer with expertise in Firebase, Tailwind CSS, Bootstrap, and Daisy UI, I bring a comprehensive set of skills to create powerful and visually appealing web applications. With a strong focus on user experience and seamless functionality, I strive to deliver high-quality solutions that meet clients' unique needs. Combining my proficiency in front-end and back-end development, I have the ability to create dynamic and responsive websites that engage users and drive business growth. I am passionate about creating intuitive and efficient solutions that leave a lasting impression.</p>
            </div>
        </div>
    );
};

export default About;