import React from 'react';
import { COLORS } from '../../../constants';
import Svg from './Svg';

export interface IndividualSlideProps {
  text: Array<string>;
}

const IndividualSlide: React.FC<IndividualSlideProps> = ({ text }) => {
  return (
    <div>
      <Svg color={COLORS.yellow} />
      <div>
        {text.map((c) => {
          return <p>- {c}</p>;
        })}
      </div>
    </div>
  );
};

export default IndividualSlide;
