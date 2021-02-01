import React, { useEffect, useState } from 'react';
import { CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import { WORK_WITH_US } from '../../constants';
import { SLIDER_INTERVAL } from '../Slider/Slider';
import Homka from '../../assets/partners/homka.png';
import McDonalds from '../../assets/partners/mcdonalds.png';
import PulpMillPrint from '../../assets/partners/pulp-mill-print.png';
import Tulchin from '../../assets/partners/tulchin.png';
import { useDimensions } from '../../hooks';

export interface LogoSliderProps {}

const chooseImage = (name: string) => {
  switch (name) {
    case 'Homka':
      return Homka;
    case 'McDonalds':
      return McDonalds;
    case 'PulpMillPrint':
      return PulpMillPrint;
    case 'Tulchin':
      return Tulchin;
    default:
      return '';
  }
};

const LogoSlider: React.FC<LogoSliderProps> = ({}) => {
  const { width } = useDimensions();
  const [visibleSlides, setVisibleSlides] = useState<number>(3);
  useEffect(() => {
    if (width > 768 && width <= 992) {
      setVisibleSlides(4);
    } else if (width > 992 && width <= 1200) {
      setVisibleSlides(5);
    } else if (width > 1200) {
      setVisibleSlides(6);
    } else {
      setVisibleSlides(3);
    }
  }, [width]);
  return (
    <CarouselProvider
      totalSlides={WORK_WITH_US.length}
      naturalSlideHeight={100}
      naturalSlideWidth={100}
      infinite
      isPlaying={true}
      interval={SLIDER_INTERVAL}
      visibleSlides={visibleSlides}
    >
      <Slider>
        {WORK_WITH_US.map((e, i) => {
          return (
            <Slide
              key={i}
              className="partners__slide"
              innerClassName="partners__slide--inner"
              index={i}
            >
              <img
                className="partners__slide--image"
                src={chooseImage(e.name)}
                alt="logo"
              />
            </Slide>
          );
        })}
      </Slider>
    </CarouselProvider>
  );
};

export default LogoSlider;
