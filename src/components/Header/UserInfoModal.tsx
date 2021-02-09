import React from 'react';

export interface UserInfoModalProps {
  isShown: boolean;
  toggleModal: () => void;
}

const UserInfoModal: React.FC<UserInfoModalProps> = ({
  isShown,
  toggleModal,
}) => {
  if (isShown) {
    return (
      <div onClick={toggleModal} className="userinfo">
        <div className="userinfo__modal">Кабинет пользователя в разработке</div>
      </div>
    );
  } else {
    return null;
  }
};

export default UserInfoModal;
