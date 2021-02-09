import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import UserInfoModal from './UserInfoModal';

export interface NavLinksProps {}

const NavLinks: React.FC<NavLinksProps> = ({}) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal((p) => !p);
  return (
    <div>
      <div className="header__tabs">
        <div className="header__tabs--links">
          <NavLink className="header__tabs--links-link" to="/faq">
            FaQ's
          </NavLink>
          <NavLink className="header__tabs--links-link" to="/infocenter">
            ІНФО ЦЕНТР
          </NavLink>
          <NavLink className="header__tabs--links-link" to="/">
            ENERGY ONLINE
          </NavLink>
        </div>

        <div onClick={toggleModal} className="header__tabs--userinfo">
          <svg
            width="22"
            height="24"
            viewBox="0 0 22 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 0C4.92339 0 0 5.20312 0 11.625C0 18.0469 4.92339 23.25 11 23.25C17.0766 23.25 22 18.0469 22 11.625C22 5.20312 17.0766 0 11 0ZM11 4.5C13.1556 4.5 14.9032 6.34688 14.9032 8.625C14.9032 10.9031 13.1556 12.75 11 12.75C8.84435 12.75 7.09677 10.9031 7.09677 8.625C7.09677 6.34688 8.84435 4.5 11 4.5ZM11 20.625C8.39637 20.625 6.06331 19.3781 4.50202 17.4281C5.33589 15.7687 6.96814 14.625 8.87097 14.625C8.97742 14.625 9.08387 14.6438 9.18589 14.6766C9.7625 14.8734 10.3657 15 11 15C11.6343 15 12.2419 14.8734 12.8141 14.6766C12.9161 14.6438 13.0226 14.625 13.129 14.625C15.0319 14.625 16.6641 15.7687 17.498 17.4281C15.9367 19.3781 13.6036 20.625 11 20.625Z"
              fill="#faa41a"
            />
          </svg>
        </div>
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
      <UserInfoModal isShown={showModal} toggleModal={toggleModal} />
    </div>
  );
};

export default NavLinks;
