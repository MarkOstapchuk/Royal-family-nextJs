'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const CarouselSlider = ({dir, count}) => {
    const arr = []
    for (let i = 1; i <= +count; i++) {
        arr.push(i)
    }

 return (
  <>
      <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
      >
          {arr.map((item,index) => (
              <SwiperSlide key={item} style={{height: '500px'}}><img src={`/${dir}/${item}.jpeg`}/></SwiperSlide>
          ))}
      </Swiper>

  </>
 );
};

export default CarouselSlider;