import React from 'react';
import NavLinks from './NavLinks';

import Logo from '../../assets/logo.png';

export interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <div className="header__outer">
      <div className="container">
        <div className="header__inner">
          <img src={Logo} />
          <NavLinks />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
