import dOne from '../assets/d1.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/bundle';
import { Autoplay, Pagination} from 'swiper/modules';

const Banner = () => {
    return (
        <div className="grid grid-cols-2 lg:mx-24 mt-4 mx-3 md:mt-24">
            <div className=" md:w-[554px] col-span-2 lg:col-span-1 items-center content-center">
                <div className="lg:pl-4">
                    <p>Luxury Real Estate</p>
                    <p className='md:text-7xl text-3xl mt-2 font-light font-serif'>ITS TIME TO FIND YOUR LUXURY HOME</p>
                    <p className='md:text-xl text-base text-gray-500 md:mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid alor the old familer olfre idunt ut labore ellt.</p>
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
                    <SwiperSlide><img src={dOne} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={dOne} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={dOne} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={dOne} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={dOne} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={dOne} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={dOne} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={dOne} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={dOne} alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;