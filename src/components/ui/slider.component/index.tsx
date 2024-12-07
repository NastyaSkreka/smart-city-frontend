import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore from "swiper";
import { useState, useRef, useEffect } from "react";
import NextIcon from "../../../styles/icons/arr-right.svg";
import PrevIcon from "../../../styles/icons/arr-left.svg";
import NewsCardComponent from "../../cards.components/news.card.component";
import DirectionCardComponent from "../../cards.components/direction.card.component";

const SliderContainer = styled.div<{ isNews: boolean; position: string }>`
  position: ${({ isNews }) => (isNews ? "absolute" : "relative")};
  ${({ position, isNews }) =>
    position === "right"
      ? `right: ${isNews ? "10px" : "0"};`
      : `left: ${isNews ? "10px" : "0"};`}
  top: ${({ isNews }) => (isNews ? "60px" : "0")};
  display: flex;
`;

export const NavButtons = styled.div<{ isNews: boolean, isCenterSlideActive: boolean }>`
  display: flex;
  gap: ${({ isNews, isCenterSlideActive }) =>
  isNews && isCenterSlideActive ? "250px" : isNews ? "242px" : "135px"} !important;
  left: ${({ isNews, isCenterSlideActive }) =>
  isNews && isCenterSlideActive ? "180px" : isNews ? "-5px" : "70px"} !important;
  position: absolute;
  z-index: 10;
  bottom: ${({ isNews, isCenterSlideActive }) =>
  isNews && isCenterSlideActive ? "-53px" : isNews ? "-53px" : "-25px"} !important;
`;

export const PrevButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const NextButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

const SlideNumber = styled.div<{ isNews: boolean, isCenterSlideActive: boolean }>`
    position: absolute;
    ${({ isNews, isCenterSlideActive }) =>
    isNews && isCenterSlideActive ? "left: 14px;" : "right: 43px;"}

    bottom: ${({ isNews, isCenterSlideActive }) =>
    isNews && isCenterSlideActive ? "-43px" : isNews ? "-43px" : "-88px"};
    font-weight: 100;
    font-size: 36px;
    line-height: 120%;
    color: #656565;
`;

export const StyledSwiper = styled(Swiper)<{ isNews: boolean, isCenterSlideActive: boolean }>`
  display: flex;

  max-width: ${({ isNews, isCenterSlideActive }) =>
  isNews && isCenterSlideActive ? "690px" : isNews ? "645px" : "525px"} !important;

  align-items: flex-end;
  position: relative;
`;

export const StyledSwiperSlide = styled(SwiperSlide)<{ isNews: boolean, isCenterSlideActive: boolean }>`
  width: ${({ isNews }) => (isNews ? "218px" : "164px")} !important;
  transition: width 0.3s ease;
  display: flex;
  align-items: flex-end;

  height: ${({ isNews, isCenterSlideActive }) =>
  isNews && isCenterSlideActive ? "300px" : isNews ? "325px" : ""} !important;

  &.swiper-slide-active {
    width: ${({ isNews }) => (isNews ? "303px" : "218px")} !important;
    height: ${({ isNews }) => (isNews ? "405px" : "350px")} !important;
  
    margin-right: ${({ isNews }) => (isNews ? "" : "10px")} !important;
  }

   &.swiper-slide-active:nth-of-type(1) {
    margin-left: 0 !important;
  }
`;

const LineUnderArrows = styled.div<{ isNews: boolean, isCenterSlideActive: boolean }>`
  border: 3px solid #d8156b;
  
  width: ${({ isNews, isCenterSlideActive }) =>
  isNews && isCenterSlideActive ? "315px" : isNews ? "300px" : "186px"};

  position: absolute;
  left: ${({ isNews, isCenterSlideActive }) =>
  isNews && isCenterSlideActive ? "50%" : isNews ? "22%" : "27%" };

  transform: translateX(-50%);
  bottom: -35px;
  bottom: ${({ isNews, isCenterSlideActive }) =>
  isNews && isCenterSlideActive ? "-60px" : isNews ? "-60px" : "-35px"};
  z-index: 2;
`;

const SecondLineUnderArrows = styled.div<{ isNews: boolean, isCenterSlideActive: boolean }>`
  border: 1px solid #bcbcbc;
  width: ${({ isNews, isCenterSlideActive }) =>
  isNews && isCenterSlideActive ? "690px" :  "590px"};
  position: absolute;
  left: ${({ isNews, isCenterSlideActive }) =>
  isNews && isCenterSlideActive ? "50%" :  "55%"}; 
  transform: translateX(-50%);
  bottom:-59px;
  z-index: 1;
`;

function SliderComponent({ slides, isNews = false, position = "left", isCenterSlideActive = false}: any) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  useEffect(() => {
    if (swiperInstance && isNews) {
      const centerIndex = Math.floor(slides.length / 2);
      setActiveIndex(centerIndex);
      swiperInstance.slideToLoop(centerIndex, 0);
    }
  }, [swiperInstance, isNews, slides.length]);

  const handlePrev = () => {
    if (swiperInstance) swiperInstance.slidePrev();
  };

  const handleNext = () => {
    if (swiperInstance) swiperInstance.slideNext();
  };

  return (
    <SliderContainer isNews={isNews} position={position}>
      <StyledSwiper
        isNews={isNews}
        slidesPerView={3}
        isCenterSlideActive={isCenterSlideActive}
        centeredSlides={isCenterSlideActive}
        spaceBetween={isNews ? -4 : 18}
        loop={true}
        modules={[Navigation]}
        onSwiper={(swiper: SwiperCore) => setSwiperInstance(swiper)}
        onSlideChange={(swiper: SwiperCore) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide: any, index: number) => (
          <StyledSwiperSlide key={index} isNews={isNews} isCenterSlideActive={isCenterSlideActive}>
            {isNews ? (
              <NewsCardComponent
                slide={slide}
                isActive={index === activeIndex}
              />
            ) : (
              <DirectionCardComponent
                slide={slide}
                isActive={index === activeIndex}
              />
            )}
          </StyledSwiperSlide>
        ))}
      </StyledSwiper>
      <NavButtons isNews={isNews} isCenterSlideActive={isCenterSlideActive}>
        <PrevButton onClick={handlePrev}>
          <img src={PrevIcon} alt="arrow-icon" />
        </PrevButton>
        <NextButton onClick={handleNext}>
          <img src={NextIcon} alt="arrow-icon" />
        </NextButton>
      </NavButtons>
      <LineUnderArrows isNews={isNews} isCenterSlideActive={isCenterSlideActive}/>
       {isNews && <SecondLineUnderArrows isNews={isNews} isCenterSlideActive={isCenterSlideActive}/>}
      <SlideNumber  isNews={isNews} isCenterSlideActive={isCenterSlideActive}>
        {String(activeIndex + 1).padStart(2, "0")}
      </SlideNumber>
    </SliderContainer>
  );
}

export default SliderComponent;
