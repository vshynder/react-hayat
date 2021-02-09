import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

export interface SettingsProps {
  left: number;
  setLeft: (n: number) => void;
}

const Settings: React.FC<SettingsProps> = ({ left, setLeft }) => {
  const closeModal = () => setLeft(1000);
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
          <NavLink className="settings__content--links" to="/faq">
            FaQ's
          </NavLink>
          <NavLink className="settings__content--links" to="/infocenter">
            ІНФО ЦЕНТР
          </NavLink>
          <NavLink className="settings__content--links" to="/">
            ENERGY ONLINE
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Settings;
