import React from 'react';

const SideNav = () => {
    return (
        <div className="absolute right-20 hidden xl:block">
            <div className='fixed top-[10rem] bottom-0 flex flex-col p-3 rounded-full gap-4 items-center border border-[#565656] text-secondary h-fit'>
                <a className='hover:text-primary' href="/#top"><i className="fa-solid fa-house"></i></a>
                <a className='hover:text-primary' href="/#about"><i className="fa-regular fa-user"></i></a>
                <a className='hover:text-primary' href="/#resume"><i className="fa-brands fa-creative-commons-nd"></i></a>
                <a className='hover:text-primary' href="/#service"><i className="fa-regular fa-handshake"></i></a>
                <a className='hover:text-primary' href="/#skills"><i className="fa-solid fa-code"></i></a>
                <a className='hover:text-primary' href="/#portfolio"><i className="fa-solid fa-diagram-project"></i></a>
                <a className='hover:text-primary' href="/#testimonials"><i className="fa-solid fa-message"></i></a>
                <a className='hover:text-primary' href="/#contact"><i className="fa-regular fa-envelope"></i></a>
            </div>
        </div>
    );
};

export default SideNav;