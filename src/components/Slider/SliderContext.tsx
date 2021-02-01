import {
  CarouselInjectedProps,
  Dot,
  Slide,
  Slider as PureSlider,
  WithStore,
} from 'pure-react-carousel';
import React from 'react';
import { COLORS, SUPPLY_CASES } from '../../constants';
import { IndividualSlide } from './components';
import Svg from './components/Svg';

interface UpdateCheckProps extends CarouselInjectedProps {
  //   onSlideChange: (s: number) => void;
}

interface UpdateCheckCarouselState {
  readonly currentSlide: number;
  readonly disableAnimation: boolean;
}

class SliderContext extends React.Component<
  UpdateCheckProps & UpdateCheckCarouselState
> {
  public render() {
    return (
      <>
        <Svg color={COLORS.yellow} />
        <span className="slider__title">КЛЮЧОВІ УМОВИ ПОСТАЧАННЯ</span>
        {SUPPLY_CASES.map((c, i) => {
          return (
            <Dot
              key={i}
              slide={i}
              className={`
                    slider__dot
                  ${this.props.currentSlide === i && 'slider__dot--active'} `}
            />
          );
        })}
        <PureSlider>
          {SUPPLY_CASES.map((c, i) => {
            return (
              <Slide key={i} index={i} className="slider__slide">
                <IndividualSlide text={c.text} />
              </Slide>
            );
          })}
        </PureSlider>
      </>
    );
  }
}

const DecoratedComponent = WithStore<
  UpdateCheckProps,
  UpdateCheckCarouselState
>(SliderContext, (state) => ({
  currentSlide: state.currentSlide,
  disableAnimation: state.disableAnimation,
}));

export default DecoratedComponent;
