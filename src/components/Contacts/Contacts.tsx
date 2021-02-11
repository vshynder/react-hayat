import React from 'react';

export interface ContactsProps {}

const Contacts: React.FC<ContactsProps> = () => {
  return (
    <div className="contacts">
      <div className="container">
        <div className="contacts__inner">
          <div className="contacts__map">
            <iframe
              title="google map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.7371117962025!2d30.461155115527948!3d50.464619894225144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cdd3da590379%3A0xbe23bf1751e2cbda!2z0YPQuy4g0KHQtdC80YzQuCDQpdC-0YXQu9C-0LLRi9GFLCA4LCDQmtC40LXQsiwgMDIwMDA!5e0!3m2!1sru!2sua!4v1613029572822!5m2!1sru!2sua"
              aria-hidden="false"
              width="100%"
              height="100%"
            ></iframe>
          </div>
          <div className="contacts__content">
            <p className="contacts__content--text">
              м. Київ, вул. Хохлових Сім’ї, буд.8. офіс 9
            </p>
            <p className="contacts__content--text">
              Режим роботи:{' '}
              <span className="contacts__content--text--span">
                понеділок-п'ятниця 08:00 - 18:00
              </span>
            </p>
            <p className="contacts__content--text">
              тел. 097 000 00 92{' '}
              <span className="contacts__content--text--span">
                email: info.htst@gmail.com
              </span>
            </p>
            <p className="contacts__content--text">
              Відповідальна особа - Директор Фененко Поліна Олександрівна
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
