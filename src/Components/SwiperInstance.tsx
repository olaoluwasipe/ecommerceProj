import React from 'react'
import { Swiper as Swipe, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Swiper from 'swiper';
import 'swiper/css';

interface Subcategory {
    id: number;
    name: string;
  }
  
  interface Category {
    id: number;
    name: string;
    subcategories: Subcategory[];
  }
  
  interface FashionStoreData {
    categories: Category[];
  }

interface SwiperInstanceProps {
    space: number;
    slides: number;
    data: FashionStoreData;
    slideComponent: React.ReactElement;
  }

const SwiperInstance: React.FC<SwiperInstanceProps> = ( {space=50, slides=3, slideComponent, data } ) => {
  return (
    <Swipe
        modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={space}
      slidesPerView={slides}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper : Swiper) => console.log(swiper)}
    >
        {data.categories.map(category => (
            <SwiperSlide key={category.id}>
                <div>
                    <h2>{category.name}</h2>
                </div>
            </SwiperSlide>
        ))}
    </Swipe>
  )
}

export default SwiperInstance