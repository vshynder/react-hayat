import React from 'react';
import { useHistory } from 'react-router-dom';

import NavLinks from './NavLinks';

import Logo from '../../assets/logo.png';

export interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const history = useHistory();
  return (
    <div className="header__outer">
      <div className="container">
        <div className="header__inner">
          <img alt="logo" onClick={() => history.push('/')} src={Logo} />
          <NavLinks />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
