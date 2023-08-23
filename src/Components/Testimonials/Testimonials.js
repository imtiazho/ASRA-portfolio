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
                                    <p className='text-white mb-[2px]'>Noman Sadi</p>
                                    <p className='text-secondary md:text-[11px] text-[9px]'>Founder of <span className='text-primary'>Atibhooj</span></p>
                                </div>
                            </div>
                            <p className='md:text-[19px] text-[13px] font-[300]'>“Imtiaz is an exceptional web developer. His innovative designs and efficient coding greatly enhanced the functionality and aesthetics of our site.”</p>
                            <a target='_blank' rel="noreferrer" href='https://rad-mousse-1da45a.netlify.app/' className='text-white md:text-[11px] text-[9px]'>PROJECT</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text-white border-2 border-[#565656] duration-300 hover:border-[#28e98c] rounded-2xl md:p-14 p-8 flex flex-col lg:gap-8 gap-5'>
                            <div className='flex items-center gap-3'>
                                <img className='w-[60px] h-[60px] object-cover rounded-full' src={t2} alt="" />
                                <div>
                                    <p className='text-white mb-[2px]'>Ashrafi Oli</p>
                                    <p className='text-secondary md:text-[11px] text-[9px]'>Founder of <span className='text-primary'>Alinar</span></p>
                                </div>
                            </div>
                            <p className='md:text-[19px] text-[13px] font-[300]'>“Remarkable service and upright behavior. Work is exceptionally good. Can communicate properly for betterment. Can work accordingly just like you wanted. worth it recommended.”</p>
                            <a target='_blank' rel="noreferrer" href='https://cute-gelato-0e49d8.netlify.app/' className='text-white md:text-[11px] text-[9px]'>PROJECT</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text-white border-2 border-[#565656] duration-300 hover:border-[#28e98c] rounded-2xl md:p-14 p-8  flex flex-col lg:gap-8 gap-5'>
                            <div className='flex items-center gap-3'>
                                <img className='w-[60px] h-[60px] object-cover rounded-full' src={t3} alt="" />
                                <div>
                                    <p className='text-white mb-[2px]'>Mehdi Hasan Price</p>
                                    <p className='text-secondary md:text-[11px] text-[9px]'>Co - Founder of <span className='text-primary'>STUDIO D' VOID</span></p>
                                </div>
                            </div>
                            <p className='md:text-[19px] text-[13px] font-[300]'>“Fast response, incredible service and good behavior. Work is up to the mark. Can communicate properly for better comprehension. Very much recommended.”</p>
                            <a className='text-white md:text-[11px] text-[9px]'>PROJECT</a>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;