import React from 'react';
import Profile from '../Profile/Profile';
import Introduce from '../Introduce/Introduce';
import About from '../About/About';
import Resume from '../Resume/Resume';
import Specializations from '../Specializations/Specializations';
import MySkills from '../MySkills/MySkills';
import Portfolio from '../Portfolio/Portfolio';
import Testimonials from '../Testimonials/Testimonials';
import Brands from '../Brands/Brands';
import Pricing from '../Pricing/Pricing';
import ContactUs from '../ContactUs/ContactUs';
import SideNav from '../SideNav/SideNav';

const Home = () => {
    return (
        <div className='grid xl:grid-cols-8 grid-cols-1 gap-4 lg:w-[98%] w-[90%] mx-auto'>
            <div className='xl:col-span-2 lg:mt-12 mt-6'>
                <Profile />
            </div>
            <div className='xl:col-span-6 relative'>
                <SideNav />
                <Introduce />
                <About />
                <Resume />
                <Specializations />
                <MySkills />
                <Portfolio />
                <Testimonials />
                <Brands />
                <Pricing />
                <ContactUs />
            </div>
        </div>
    );
};

export default Home;