import React from 'react';
import {
  CarouselProvider,
  Slider as PureSlider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const SLIDER_INTERVAL = 3000;

export interface SliderProps {}

const Slider: React.FC<SliderProps> = ({}) => {
  return (
    <CarouselProvider
      className="slider container"
      naturalSlideHeight={100}
      naturalSlideWidth={100}
      totalSlides={10}
      infinite
      isPlaying={true}
      interval={SLIDER_INTERVAL}
    >
      <PureSlider>
        <Slide className="slider__slide" index={0}>
          Slide 1
        </Slide>
        <Slide className="slider__slide" index={1}>
          Slide 2
        </Slide>
        <Slide className="slider__slide" index={2}>
          Slide 3
        </Slide>
        <Slide className="slider__slide" index={3}>
          Slide 4
        </Slide>
        <Slide className="slider__slide" index={4}>
          Slide 5
        </Slide>
        <Slide className="slider__slide" index={5}>
          Slide 6
        </Slide>
        <Slide className="slider__slide" index={6}>
          Slide 7
        </Slide>
        <Slide className="slider__slide" index={7}>
          Slide 8
        </Slide>
        <Slide className="slider__slide" index={8}>
          Slide 9
        </Slide>
        <Slide className="slider__slide" index={9}>
          Slide 10
        </Slide>
      </PureSlider>

      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  );
};

export default Slider;
