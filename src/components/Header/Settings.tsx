import React from 'react';
import { NavLink } from 'react-router-dom';

export interface SettingsProps {
  left: number;
  setLeft: (n: number) => void;
  toggleModal: () => void;
}

const Settings: React.FC<SettingsProps> = ({ left, setLeft, toggleModal }) => {
  const closeModal = () => setLeft(10000);
  return (
    <div className="settings" style={{ left }}>
      <div className="container">
        <div className="settings__header">
          <svg
            onClick={closeModal}
            className="settings__header--cross"
            width={22}
            viewBox="0 0 329.26933 329"
            height={22}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
          </svg>
        </div>
        <div onClick={closeModal} className="settings__content">
          <div className="settings__content--links">
            <NavLink className="settings__content--link" to="/">
              ГОЛОВНА
            </NavLink>
            <NavLink className="settings__content--link" to="/faq">
              FaQ's
            </NavLink>
            <NavLink className="settings__content--link" to="/infocenter">
              ІНФО ЦЕНТР
            </NavLink>
            <NavLink className="settings__content--link" to="/">
              ENERGY ONLINE
            </NavLink>
          </div>
          <div onClick={toggleModal} className="settings__content--user">
            <svg
              width="50"
              height="50"
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
      </div>
    </div>
  );
};

export default Settings;
