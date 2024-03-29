import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
import slide2 from '../images/slide2.png'
import slide6 from '../images/slide6.png'
import slide3 from '../images/slide3.png'
import slide5 from '../images/slide5.png'
import slide1 from '../images/slide1.png'
import slide4 from '../images/slide4.png'
import "../App.css";

// import required modules
import { Pagination } from "swiper";

export default function Carousel() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: false,
        }}
        modules={[Pagination]}
        style={{
            "--swiper-pagination-color": "darkgreen"
        }}
        className="py-3 rounded-md"
      >
        <SwiperSlide>
        <img src={slide1} className="rounded-md w-fluid" alt="AI generated golfer walking down a paved cart path with a beautiful golf course in the background"/>
            <h5 className="contentFont font-bold pt-2">Step 1: </h5>
            <p className="contentFont text-sm mx-2 pb-2">Login or create an account. It's literally free and your golf game will thank you one day!</p>
        </SwiperSlide>
        <SwiperSlide><img src={slide2} className="rounded-md w-fluid" alt="AI generated golf club heads"/>
            <h5 className="contentFont font-bold pt-2">Step 2: </h5>
            <p className="contentFont text-sm mx-2 pb-2">Add clubs to your virtual bag from your profile page.</p></SwiperSlide>
        <SwiperSlide>
            <img src={slide3} className="rounded-md w-fluid" alt="Logo for the toptracer range that's commonly used at topgolf and other locations that allow golfers to measure golf performance"/>
            <h5 className="contentFont font-bold pt-2">Step 3: </h5>
            <p className="contentFont text-sm mx-2 pb-2">Head to any driving range with TopTracer technology and get ready to hit some balls.</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide4} className="rounded-md w-fluid" alt="AI generated golf ball"/>
            <h5 className="contentFont font-bold pt-2">Step 4: </h5>
            <p className="contentFont text-sm mx-2 pb-2">Select the club that you want to calibrate or recalibrate, then record the distances from your 5 swings.</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide5} className="rounded-md w-fluid" alt="Screenshot from this website of what a user would see when they're calibrating a club. A form with room to enter 5 golf shots and then data that presents the low, high, and average of those shot distances"/>
            <h5 className="contentFont font-bold pt-2">Step 5: </h5>
            <p className="contentFont text-sm mx-2 pb-2">Click the "Calculate" button to get a low, high, and average distance. Then click "Update Club" to have those stats saved to your profile.</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide6} className="rounded-md w-fluid" alt="AI generated golfer with a club in his hand walking off into the sunset"/>
            <h5 className="contentFont font-bold pt-2">Step 6: </h5>
            <p className="contentFont text-sm mx-2 pb-2">Never second guess your distances again and enjoy the game of golf!</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}