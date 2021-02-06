import React from 'react';
import {
  ChangeSupplier,
  Contacts,
  ImageBlock,
  Slider,
  TarifParts,
  WorkWithUs,
} from '../../components';

const LandingPage: React.FC = () => {
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
