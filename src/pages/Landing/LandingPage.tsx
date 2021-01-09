import React from 'react';
import { ImageBlock, Slider } from '../../components';

export interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = ({}) => {
  return (
    <div className="landing">
      <ImageBlock />
      <Slider />
    </div>
  );
};

export default LandingPage;
