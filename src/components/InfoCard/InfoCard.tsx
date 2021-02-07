import React, { useEffect, useState } from 'react';
import { useDimensions } from '../../hooks';
import InfoCardIcons from './InfoCardIcons';

export interface InfoCardProps {
  title: string;
  icon: number;
  text: Array<string>;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, icon, text }) => {
  const [iconSize, setIconSize] = useState(50);
  const { width } = useDimensions();
  useEffect(() => {
    if (width > 576 && width <= 1200) {
      setIconSize(75);
    } else if (width > 1200) {
      setIconSize(90);
    }
  }, [width]);
  return (
    <div className="infocenter__card">
      <div className="infocenter__card--header">
        <h4 className="infocenter__card--title">{title}</h4>
        <InfoCardIcons size={iconSize} icon={icon} />
      </div>
      <div className="infocenter__card--text">
        {text.map((s, i) => {
          return (
            <p className="infocenter__card--text-p" key={`textstring-${i}`}>
              {s}
            </p>
          );
        })}
      </div>
      <p className="infocenter__card--more">Детальніше...</p>
    </div>
  );
};

export default InfoCard;
