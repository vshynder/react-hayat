import React from 'react';

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__inner">
          <p className="footer__left">ХАЙАТ ЕСТЕЙТ</p>
          <p className="footer__right">Енергопостачальна компанія</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
