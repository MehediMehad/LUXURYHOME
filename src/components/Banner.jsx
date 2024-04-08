import dOne from '../assets/d1.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/bundle';
import { Autoplay, Pagination} from 'swiper/modules';

const Banner = () => {
    return (
        <div className="grid grid-cols-2 mx-52 mt-60">
            <div className="col-span-1 w-[554px] items-center content-center">
                <div className="">
                    <p>Luxury Real Estate</p>
                    <p className='text-7xl mt-2 font-light font-serif'>ITS TIME TO FIND YOUR LUXURY HOME</p>
                    <p className='text-xl text-gray-500 mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid alor the old familer olfre idunt ut labore ellt.</p>
                </div>
            </div>
            <div className="col-span-1">
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