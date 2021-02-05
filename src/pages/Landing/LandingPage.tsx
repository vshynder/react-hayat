import React from 'react';
import {
  ChangeSupplier,
  Contacts,
  ImageBlock,
  Slider,
  TarifParts,
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
      <TarifParts />
      <Contacts />
    </div>
  );
};

export default LandingPage;
