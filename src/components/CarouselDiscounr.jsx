import React from 'react'
import HomePageCard from './HomePageCard'
const CarouselDiscounr = () => {
  return (
    <div>
<br></br>
<div className='grid grid-cols-4 '  >
    <HomePageCard
            title={"Explore more"}
            img={"../images/s1.png"}
            link={"See terms and conditions" }
          />
           <HomePageCard
            title={"Up to 60% off | Outdoor & toys"}
            img={"../images/s4.png"}
            link={"See more..."}
          />
          <HomePageCard
            title={"Up to 60% off | Start youreslf fit"}
            img={"../images/s3.png"}
            link={"Find out more"}
          />
          <HomePageCard
            title={"Bestsellers | Jewellery, bags & more"}
            img={"../images/s4.png"}
            link={"Browse Kindle Unlimited"}
          />
           
          
    </div>
    </div>
  )
}

export default CarouselDiscounr