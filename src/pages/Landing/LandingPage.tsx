import React from 'react';
import { ImageBlock, Slider, WorkWithUs } from '../../components';

export interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = ({}) => {
  return (
    <div className="landing">
      <ImageBlock />
      <Slider />
      <WorkWithUs />
    </div>
  );
};

export default LandingPage;
