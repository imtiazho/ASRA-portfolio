import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import t1 from '../../media/t1.jpg';
import t2 from '../../media/t2.jpg';
import t3 from '../../media/t3.jpg';
// Import Swiper styles
import 'swiper/css';
// import required modules
import { Autoplay } from 'swiper/modules';

const Testimonials = () => {
    return (
        <div className='xl:ml-20 xl:mt-24 mt-16' id='testimonials'>
            <div className='flex gap-2 items-baseline w-fit border border-[#565656] py-2 px-5 rounded-full text-[11px]'>
                <i class="fa-solid fa-message"></i>
                <p>TESTIMONIAL</p>
            </div>
            <p data-aos="fade-up"
                data-aos-duration="900" className='xl:mt-10 mt-6 md:text-[40px] sm:text-[33px] text-[28px] text-white'>Trusted by <span className='text-primary'>Many Clients</span></p>
            <div className='lg:w-[80%] w-[95%] md:mt-8 mt-5'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className='rounded-2xl mySwiper'
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <SwiperSlide>
                        <div data-aos="fade-up"
                            data-aos-duration="1000" className='text-white border-2 border-[#565656] duration-300 hover:border-[#28e98c] rounded-2xl md:p-14 p-8 flex flex-col lg:gap-8 gap-5'>
                            <div className='flex items-center gap-3'>
                                <img className='w-[60px] h-[60px] object-cover rounded-full' src={t1} alt="" />
                                <div>
                                    <p className='text-white mb-[2px]'>Rahman Shabab</p>
                                    <p className='text-secondary md:text-[11px] text-[9px]'>CEO of<span className='text-primary'> Western Cover BD</span></p>
                                </div>
                            </div>
                            <p className='md:text-[19px] text-[13px] font-[300]'>I'm absolutely blown away by the graphic design work you've done for my project. The visuals are not only visually stunning but also perfectly capture the essence of my brand. Your attention to detail and ability to bring my ideas to life is truly impressive. Thank you for your exceptional work!</p>
                            <a target='_blank' rel="noreferrer" href='' className='text-white md:text-[11px] text-[9px]'>PROJECT</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div data-aos="fade-up"
                            data-aos-duration="1000" className='text-white border-2 border-[#565656] duration-300 hover:border-[#28e98c] rounded-2xl md:p-14 p-8 flex flex-col lg:gap-8 gap-5'>
                            <div className='flex items-center gap-3'>
                                <img className='w-[60px] h-[60px] object-cover rounded-full' src={t3} alt="" />
                                <div>
                                    <p className='text-white mb-[2px]'>Redwan Ahmed</p>
                                    <p className='text-secondary md:text-[11px] text-[9px]'>CEO of <span className='text-primary'> bright celebration
                                    </span></p>
                                </div>
                            </div>
                            <p className='md:text-[19px] text-[13px] font-[300]'>Your graphic design work is a breath of fresh air. The creativity and innovation you've brought to my project are truly inspiring. I've received countless compliments on the visuals, and I can't thank you enough for your talent and dedication. Your work has made a huge difference in the success of my project.</p>
                            <a target='_blank' rel="noreferrer" href='' className='text-white md:text-[11px] text-[9px]'>PROJECT</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div data-aos="fade-up"
                            data-aos-duration="1000" className='text-white border-2 border-[#565656] duration-300 hover:border-[#28e98c] rounded-2xl md:p-14 p-8 flex flex-col lg:gap-8 gap-5'>
                            <div className='flex items-center gap-3'>
                                <img className='w-[60px] h-[60px] object-cover rounded-full' src={t2} alt="" />
                                <div>
                                    <p className='text-white mb-[2px]'>Prottoy Haroon</p>
                                    <p className='text-secondary md:text-[11px] text-[9px]'>Manager of<span className='text-primary'> Aperture And Canvas</span></p>
                                </div>
                            </div>
                            <p className='md:text-[19px] text-[13px] font-[300]'>I just wanted to take a moment to express my sincere gratitude for your incredible graphic design skills. Your designs have exceeded my expectations in every way. The colors, typography, and overall aesthetic are exactly what I was looking for. I'm so happy with the final product and can't wait to share it with others. Thank you again for your amazing work!</p>
                            <a target='_blank' rel="noreferrer" href='' className='text-white md:text-[11px] text-[9px]'>PROJECT</a>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;