import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const Category = () => {
  return (
    <Swiper
    slidesPerView={4}
    spaceBetween={30}
    centeredSlides={true}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className="mySwiper my-16"
  >
    <SwiperSlide>
      <img src={slide1} alt="" />
      <h3 className='text-xl md:text-4xl uppercase text-center -mt-16 text-white'>Salads</h3>
    </SwiperSlide>
    <SwiperSlide>
      <img src={slide2} alt="" />
      <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Pizza</h3>

    </SwiperSlide>
    <SwiperSlide><img src={slide3} alt="" />
    <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Soup</h3>

    </SwiperSlide>
    <SwiperSlide><img src={slide4} alt="" />
    <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Cake</h3>

    </SwiperSlide>
    <SwiperSlide><img src={slide5} alt="" />
    <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Salads</h3>

    </SwiperSlide>
    {/* <SwiperSlide>Slide 6</SwiperSlide>
    <SwiperSlide>Slide 7</SwiperSlide>
    <SwiperSlide>Slide 8</SwiperSlide>
    <SwiperSlide>Slide 9</SwiperSlide> */}
  </Swiper>
  );
};

export default Category;