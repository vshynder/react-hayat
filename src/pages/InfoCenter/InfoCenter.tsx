import React from 'react';
import { InfoCard } from '../../components';
import { INFO_CENTER } from '../../constants';

export interface InfoCenterProps {}

const InfoCenter: React.FC<InfoCenterProps> = () => {
  return (
    <div className="container infocenter">
      {INFO_CENTER.map((card, i) => {
        return <InfoCard key={`infocard-${i}`} {...card} />;
      })}
    </div>
  );
};

export default InfoCenter;
