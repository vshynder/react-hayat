import React from 'react';
import {
  ChangeSupplier,
  ImageBlock,
  Slider,
  WorkWithUs,
} from '../../components';

export interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = ({}) => {
  return (
    <div className="landing">
      <ImageBlock />
      <Slider />
      <WorkWithUs />
      <ChangeSupplier />
    </div>
  );
};

export default LandingPage;
