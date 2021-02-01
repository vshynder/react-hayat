import React from 'react';
import LogoSlider from './LogoSlider';

export interface WorkWithUsProps {}

const WorkWithUs: React.FC<WorkWithUsProps> = ({}) => {
  return (
    <div className="partners container">
      <p className="partners__title">З нами працюють:</p>
      <div className="partners__slider">
        <LogoSlider />
      </div>
    </div>
  );
};

export default WorkWithUs;
