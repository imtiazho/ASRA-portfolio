import React, { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { toast } from 'react-hot-toast';

const ContactUs = () => {
    const [state, handleSubmit] = useForm("xrgwbeyg");
    useEffect(() => {
        if (state.succeeded) {
            toast.success('Thanks for messaging us!', {
                style: {
                    border: '1px solid #28e98c',
                    padding: '13px',
                    color: '#28e98c',
                    background: '#1f1f1f',
                },
                iconTheme: {
                    primary: '#28e98c',
                    secondary: '#FFFAEE',
                },
            });
        }
    }, [state.succeeded])

    return (
        <div className='xl:ml-20 xl:mt-24 mt-12 lg:w-[80%] w-[95%]' id='contact'>
            <div className='flex gap-2 items-baseline w-fit border border-[#565656] py-2 px-5 rounded-full text-[11px]'>
                <i class="fa-regular fa-envelope"></i>
                <p>CONTACT</p>
            </div>
            <p data-aos="fade-up"
                data-aos-duration="1000" className='xl:mt-10 mt-6 md:text-[40px] sm:text-[33px] text-[28px] text-white md:mb-12 mb-6'>Let's Work <span className='text-primary'> Together!</span></p>
            <form data-aos="fade-up"
                data-aos-duration="1000" onSubmit={handleSubmit} className='md:mb-12 mb-6'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-12'>
                    <div>
                        <label htmlFor='fullname' className='text-[11px] text-white'>FULL NAME <span className='text-[#FF0000]'>*</span></label>
                        <input name="UserName" id='fullname' placeholder='Your Full Name' type="text" className='w-full focus:outline-0 h-full bg-transparent text-black text-white text-[14px] font-[300]' />
                    </div>
                    <div>
                        <label htmlFor='emailId' className='text-[11px] text-white'>EMAIL <span className='text-[#FF0000]'>*</span></label>
                        <input name="EmailId" id='emailId' placeholder='Your Email' type="text" className='w-full focus:outline-0 h-full bg-transparent text-black text-white text-[14px] font-[300]' />
                    </div>
                    <div>
                        <label htmlFor='numberPhone' className='text-[11px] text-white'>PHONE (OPTIONAL)</label>
                        <input name="PhoneNumber" id='numberPhone' placeholder='Your Phone Number' type="text" className='w-full focus:outline-0 h-full bg-transparent text-black text-white text-[14px] font-[300]' />
                    </div>
                    <div>
                        <label htmlFor='subject' className='text-[11px] text-white'>SUBJECT <span className='text-[#FF0000]'>*</span></label>
                        <input name="SubjectName" id='subject' placeholder='Frontend or Beckend?' type="text" className='w-full focus:outline-0 h-full bg-transparent text-black text-white text-[14px] font-[300]' />
                    </div>
                </div>

                <div className='mt-12 border-b border-[#565656] mb-4'>
                    <label htmlFor='message' className='text-[11px] text-white'>SUBJECT <span className='text-[#FF0000]'>*</span></label>
                    <textarea name="message" id='message' placeholder='Frontend or Beckend?' type="text" className='w-full focus:outline-0 h-full bg-transparent text-black text-white text-[14px] font-[300] mt-[12px] w-full h-[200px] resize-none	' ></textarea>
                </div>

                <input type='submit' value='SEND MESSAGE' className='btn btn-primary rounded-full bg-primary hover:bg-transparent border-transparent hover:border-primary hover:text-primary duration-300 font-[500]'></input>
            </form>
        </div>
    );
};

export default ContactUs;