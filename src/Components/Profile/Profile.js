import React from 'react';
import logo from '../../media/logo.png';
import mainPic from '../../media/picmain.jpg';


const Profile = () => {
    const today = new Date().getFullYear();

    return (
        <div className='sticky top-12 border border-[#565656] bottom-0 right-0 left-0 flex flex-col gap-6 p-6 rounded-[27px]'>
            <div className="flex gap-2 justify-between items-start w-full">
                <img className="w-[110px]" src={logo} alt="" />
                <div className="text-end text-white">
                    <p className='text-[14px] mb-1'>Full Stack</p>
                    <p className='text-[14px]'>Dev.</p>
                </div>
            </div>
            <img className="w-[230px] h-[190px] rounded-[22px] mt-2 mb-3 mx-auto object-cover" src={mainPic} alt="" />
            <div className="text-center text-white">
                <h2 className='text-[21px] font-[500] tracking-wider pop-font'>Imtiaz Hossain</h2>
                <p className='text-[14px] mt-1 font-[200] tracking-wider'>Dhaka, BD</p>
            </div>
            <p className='text-[13px] text-center text-secondary'>© {today} Imtiaz.h All Rights Reserved</p>
            <div className="flex justify-center gap-2">
                <a hr className='w-[40px] h-[40px] rounded-full border flex justify-center items-center border-[#565656] text-[#565656] hover:text-primary hover:border-primary duration-300' href='https://www.facebook.com/imtiaz.h.z/' target='_blank' rel="noreferrer"><i class="fa-brands fa-facebook"></i></a>
                <a className='w-[40px] h-[40px] rounded-full border flex justify-center items-center border-[#565656] text-[#565656] hover:text-primary hover:border-primary duration-300' href=''><i class="fa-brands fa-linkedin"></i></a>
                <a className='w-[40px] h-[40px] rounded-full border flex justify-center items-center border-[#565656] text-[#565656] hover:text-primary hover:border-primary duration-300' href='https://www.instagram.com/imtiazhoo/' target='_blank' rel="noreferrer"><i class="fa-brands fa-instagram"></i></a>
                <a className='w-[40px] h-[40px] rounded-full border flex justify-center items-center border-[#565656] text-[#565656] hover:text-primary hover:border-primary duration-300' href='https://github.com/imtiazho' target='_blank' rel="noreferrer"><i class="fa-brands fa-github"></i></a>
            </div>
            <a href='#contact' className='btn btn-primary rounded-full bg-primary hover:bg-transparent border-transparent hover:border-primary hover:text-primary duration-300'> <i class="fa-regular fa-envelope"></i><p className='text-[14px]'>Hire Me</p></a>
        </div >
    );
};

export default Profile;