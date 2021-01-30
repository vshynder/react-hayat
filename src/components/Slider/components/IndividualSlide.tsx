import React from 'react';

export interface IndividualSlideProps {
  text: Array<string>;
}

const IndividualSlide: React.FC<IndividualSlideProps> = ({ text }) => {
  return (
    <div>
      <div className="slider__slide--text">
        {text.map((c) => {
          return <p className="slider__slide--text--p">- {c}</p>;
        })}
      </div>
    </div>
  );
};

export default IndividualSlide;
