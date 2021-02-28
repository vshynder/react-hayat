import React, { useEffect, useState } from 'react';
import { CarouselProvider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import DecoratedComponent from './SliderContext';
import { useDimensions } from '../../hooks';

export const SLIDER_INTERVAL = 15000;

const Slider: React.FC = () => {
  const { width } = useDimensions();
  const [sliderHeight, setSliderHeight] = useState<number>(40);
  useEffect(() => {
    if (width > 576 && width <= 768) {
      setSliderHeight(25);
    } else if (width > 768 && width <= 992) {
      setSliderHeight(15);
    } else if (width > 992 && width <= 1200) {
      setSliderHeight(18);
    } else if (width > 1200) {
      setSliderHeight(20);
    } else {
      setSliderHeight(40);
    }
  }, [width]);
  return (
    <CarouselProvider
      className="slider container"
      naturalSlideHeight={sliderHeight}
      naturalSlideWidth={100}
      totalSlides={3}
      infinite
      isPlaying={true}
      interval={SLIDER_INTERVAL}
    >
      <DecoratedComponent />
    </CarouselProvider>
  );
};

export default Slider;
