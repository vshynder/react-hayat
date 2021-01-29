import React, { Component, RefObject, useRef } from 'react';
import {
  CarouselProvider,
  Slider as PureSlider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
  Dot,
  CarouselProviderProps,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { IndividualSlide } from './components';
import { SUPPLY_CASES } from '../../constants';

const SLIDER_INTERVAL = 3000;

export interface SliderProps {}

const Slider: React.FC<SliderProps> = ({}) => {
  return (
    <CarouselProvider
      className="slider container"
      naturalSlideHeight={20}
      naturalSlideWidth={100}
      totalSlides={3}
      infinite
      isPlaying={true}
      interval={SLIDER_INTERVAL}
    >
      <Dot slide={0} className="slider__dot" />
      <Dot slide={1} className="slider__dot" />
      <Dot slide={2} className="slider__dot" />
      <PureSlider>
        {SUPPLY_CASES.map((c, i) => {
          return (
            <Slide index={i} className="slider__slide">
              <IndividualSlide text={c.text} />
            </Slide>
          );
        })}

        {/* <Slide className="slider__slide" index={1}>
          Slide 2
        </Slide>
        <Slide className="slider__slide" index={2}>
          Slide 3
        </Slide> */}
      </PureSlider>
    </CarouselProvider>
  );
};

export default Slider;
