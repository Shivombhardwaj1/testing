import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const CarouselProduct = () => {
  return (
    <div className='bg-white ml-2 pl-2'>
         <div className="text-2xl font-semibold p-3 mt-8">Best Sellers</div>
  <Swiper  
        slidesPerView={9}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation]}
     
        className="h-[50%]">
 <SwiperSlide>
          <img src={"../images/product_8_small.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/product_2_small.jpg"} alt="" />
        </SwiperSlide> <SwiperSlide>
          <img src={"../images/product_1_small.jpg"} alt="" />
        </SwiperSlide> <SwiperSlide>
          <img src={"../images/product_8_small.jpg"} alt="" />
        </SwiperSlide> <SwiperSlide>
          <img src={"../images/product_4_small.jpg"} alt="" />
        </SwiperSlide> <SwiperSlide>
          <img src={"../images/product_2_small.jpg"} alt="" />
        </SwiperSlide> <SwiperSlide>
          <img src={"../images/product_4_small.jpg"} alt="" />
        </SwiperSlide> <SwiperSlide>
          <img src={"../images/product_8_small.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/product_4_small.jpg"} alt="" />
        </SwiperSlide><SwiperSlide>
          <img src={"../images/product_8_small.jpg"} alt="" />
        </SwiperSlide><SwiperSlide>
          <img src={"../images/product_2_small.jpg"} alt="" />
        </SwiperSlide><SwiperSlide>
          <img src={"../images/product_2_small.jpg"} alt="" />
        </SwiperSlide>
        
    </Swiper>
    
    </div>
  )
}

export default CarouselProduct