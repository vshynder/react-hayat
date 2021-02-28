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
        <div className="slider__title">КЛЮЧОВІ УМОВИ ПОСТАЧАННЯ</div>
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
          <Slide index={0} className="slider__slide">
            <div className="slider__slide--text">
              <p className="slider__slide--text--p">
                - <span className="boldtext">Прозорий розрахунок</span>{' '}
                собівартості тарифу відповідно до графіку споживання та ціни{' '}
                <span className="boldtext">ДП "Оператор ринку"</span>
              </p>
              <p className="slider__slide--text--p">
                - <span className="boldtext">Мінімальний</span> тариф
                постачальника
              </p>
              <p className="slider__slide--text--p">
                - Авансовий платіж{' '}
                <span className="boldtext">
                  без застосування коефіцієнту витрат постачальника
                </span>
              </p>
            </div>
          </Slide>
          <Slide index={1} className="slider__slide">
            <div className="slider__slide--text">
              <p className="slider__slide--text--p">
                - Зручний, узгоджений зі Споживачем графік{' '}
                <span className="boldtext">авансових платежів</span>
              </p>
              <p className="slider__slide--text--p">
                - Можливість оплати{' '}
                <span className="boldtext">по факту декади /місяця</span>{' '}
                постачання
              </p>
              <p className="slider__slide--text--p">
                - Можливість <span className="boldtext">відтермінування</span>{' '}
                платежів
              </p>
            </div>
          </Slide>
          <Slide index={2} className="slider__slide">
            <div className="slider__slide--text">
              <p className="slider__slide--text--p">
                - <span className="boldtext">Повне</span> покриття небалансу
                споживання електроенергії
              </p>
              <p className="slider__slide--text--p">
                - <span className="boldtext">Відсутність лімітів</span>{' '}
                споживання електроенергії
              </p>
              <p className="slider__slide--text--p">
                - <span className="boldtext">Відсутність штрафів</span> за
                відхилення від замовлених обсягів споживання
              </p>
            </div>
          </Slide>
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
