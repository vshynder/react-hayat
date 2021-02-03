import React from 'react';
import StepSvg from './StepSvg';

interface StepButtonProps {
  name: string;
  file: string;
}

export interface StepProps {
  step: string;
  text: string;
  buttons: Array<StepButtonProps>;
  index: number;
}

const Step: React.FC<StepProps> = ({ step, text, buttons, index }) => {
  return (
    <div className="supplier__card">
      <div className="supplier__card--cover">
        <h3 className="supplier__card--title">{step}</h3>
        <StepSvg step={index + 1} />
        <p className="supplier__card--text">{text}</p>
      </div>
      <div className="supplier__card--buttons">
        {buttons.map((b, i) => {
          return (
            <a
              href="#"
              rel="noreferrer"
              key={i}
              className="supplier__card--button"
            >
              {b.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Step;
