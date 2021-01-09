import React from 'react';
import HayatInfo from '../HayatInfo';

export interface ImageBlockProps {}

const ImageBlock: React.FC<ImageBlockProps> = ({}) => {
  return (
    <div className="imageblock">
      <div className="container">
        <div className="imageblock__place">
          <HayatInfo />
        </div>
      </div>
    </div>
  );
};

export default ImageBlock;
