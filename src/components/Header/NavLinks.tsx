import React from 'react';
import { NavLink } from 'react-router-dom';

export interface NavLinksProps {}

const NavLinks: React.FC<NavLinksProps> = ({}) => {
  return (
    <div>
      <div className="header__tabs">
        <div>
          <NavLink to="/infocenter">ІНФО ЦЕНТР</NavLink>
          <NavLink to="/energyonline">ENERGY ONLINE</NavLink>
        </div>

        <div></div>
      </div>
      <div className="header__menu">
        <svg
          width="22"
          height="19"
          viewBox="0 0 22 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.785714 3.375H21.2143C21.6482 3.375 22 3.03923 22 2.625V0.75C22 0.335766 21.6482 0 21.2143 0H0.785714C0.351754 0 0 0.335766 0 0.75V2.625C0 3.03923 0.351754 3.375 0.785714 3.375ZM0.785714 10.875H21.2143C21.6482 10.875 22 10.5392 22 10.125V8.25C22 7.83577 21.6482 7.5 21.2143 7.5H0.785714C0.351754 7.5 0 7.83577 0 8.25V10.125C0 10.5392 0.351754 10.875 0.785714 10.875ZM0.785714 18.375H21.2143C21.6482 18.375 22 18.0392 22 17.625V15.75C22 15.3358 21.6482 15 21.2143 15H0.785714C0.351754 15 0 15.3358 0 15.75V17.625C0 18.0392 0.351754 18.375 0.785714 18.375Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
};

export default NavLinks;
