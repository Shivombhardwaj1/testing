import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const CarouselCategory = () => {
  return (
    <div className='bg-white ml-2 pl-2'>
      <div className="text-2xl font-semibold p-3 mt-5  ">Today's Deal</div>

        <Swiper  
        slidesPerView={5}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation]}
     
        className="h-[50%]">
        <SwiperSlide>
          <img src={"../images/product_10_small.jpg"} alt="Deal category" />
          <h1 className='ml-12 font-semibold'>Deal of the day</h1>
          <h1 className='ml-12 font-bold'>Rs 7800</h1>

          <div><br></br></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/product_12_small.jpg"} alt="Deal category" />
          <h1 className='ml-12 font-semibold'>Deal of the day</h1>
          <h1 className='ml-12 font-bold'>Rs 8100</h1>

        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/product_13_small.jpg"} alt="Deal category" />
          <h1 className='ml-12 font-semibold'>Deal of the day</h1>     
               <h1 className='ml-12 font-bold'>Rs 9800</h1>


        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/product_11_small.jpg"} alt="Deal category" />
          <h1 className='ml-12 font-semibold'>Deal of the day</h1>
          <h1 className='ml-12 font-bold'>Rs 8800</h1>

        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/product_13_small.jpg"} alt="Deal category" />
          <h1 className='ml-12 font-semibold'>Deal of the day</h1>
          <h1 className='ml-12 font-bold'>Rs 18000</h1>

        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/product_13_small.jpg"} alt="Deal category" />
          <h1 className='ml-12 font-semibold'>Deal of the day</h1>
          <h1 className='ml-12 font-bold'>Rs 1500</h1>

        </SwiperSlide>
        </Swiper>
      
    </div>
  )
}

export default CarouselCategory