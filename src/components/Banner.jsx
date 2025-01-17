import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/bundle';
import { Autoplay, Pagination} from 'swiper/modules';

const Banner = () => {
    return (
        <div className="grid grid-cols-2 lg:mx-24 mt-4 mx-3 md:mt-24">
            <div className=" md:w-[554px] col-span-2 lg:col-span-1 items-center content-center">
                <div className="lg:pl-4">
                    <p data-aos="fade-left">Luxury Real Estate</p>
                    <p data-aos="fade-right" className='md:text-7xl text-3xl mt-2 font-light font-serif'>ITS TIME TO FIND YOUR LUXURY HOME</p>
                    <p className='md:text-xl text-base text-gray-500 md:mt-5'>Experience the art of Residential Architecture with our expert team. From concept to creation, we specialize in bringing your dream home to life. Let’s shape your vision into architectural marvels.</p>
                </div>
            </div>
            <div className="lg:col-span-1 col-span-2">
                <Swiper 
                    pagination={
                        {clickable:true}                    }
                    modules={[ Autoplay, Pagination]}
                    loop={true}
                    autoplay={
                        {delay:2000}
                    }

                >
                    <SwiperSlide><img className='w-[834px] h-[574px]' src="https://i.ibb.co/5x5Gkpj/d1.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-[834px] h-[574px]' src="https://i.ibb.co/58mnCyW/apartment.webp" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-[834px] h-[574px]' src="https://i.ibb.co/Mh1Ht79/single-family-home09.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-[834px] h-[574px]' src="https://i.ibb.co/m6CNpwW/townhouse.webp" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-[834px] h-[574px]' src="https://i.ibb.co/92w7bm4/vacation.webp"alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-[834px] h-[574px]' src="https://i.ibb.co/XSx05pC/student7.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-[834px] h-[574px]' src="https://i.ibb.co/92w7bm4/vacation.webp" alt="" /></SwiperSlide>
                </Swiper> 
            </div>
        </div>
    );
};

export default Banner;