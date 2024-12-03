

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import styled from 'styled-components';
import 'swiper/css'; 
import 'swiper/css/navigation'; 
import { useState } from 'react';

// Карточка
const Card = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 200px;
  border-radius: 15px;
  background-color: ${({ isActive }) => (isActive ? '#D8156B' : '#373839')};
  color: white;
  font-size: ${({ isActive }) => (isActive ? '24px' : '18px')};
  transform: ${({ isActive }) => (isActive ? 'scale(1.1)' : 'scale(1)')};
  transition: transform 0.3s ease, background-color 0.3s ease;
`;

// Контейнер для стрелок
const SliderContainer = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;

  .swiper-button-next,
  .swiper-button-prev {
    position: absolute;
    z-index: 10;
    bottom: -40px; 
    color: #999;
    transition: color 0.3s ease;

    &:hover {
      color: #fff;
    }
  }

  .swiper-button-prev {
    left: 0; /* Привязка к левому краю первого слайда */
    bottom: -50px;
  }

  .swiper-button-next {
    right: auto; /* Убираем смещение вправо */
    left: 290px; /* Расположение рядом с предыдущей стрелкой */
  }`

function SliderComponent() {
    const [activeIndex, setActiveIndex] = useState(0);
  return (
    <SliderContainer>
      <Swiper
        slidesPerView={3} // Показываем 3 карточки
    
        spaceBetween={30} // Расстояние между карточками
        navigation={true} // Добавляем стрелки
    modules={[Navigation]}
    onSlideChange={(swiper: any) => setActiveIndex(swiper.realIndex)} // Обновляем активный индекс
    onInit={(swiper: any) => setActiveIndex(swiper.realIndex)}
      >
         {[...Array(5)].map((_, index) => (
          <SwiperSlide key={index}>
            <Card isActive={index === activeIndex}>
              Card {index + 1}
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
};

export default SliderComponent;
