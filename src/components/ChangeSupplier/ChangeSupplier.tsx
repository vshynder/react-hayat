import React from 'react';
import { CHANGE_SUPPLIER } from '../../constants';
import Step from './Step';

export interface ChangeSupplierProps {}

const ChangeSupplier: React.FC<ChangeSupplierProps> = ({}) => {
  return (
    <div className="supplier container">
      <h2 className="supplier__title">Як змінити постачальника:</h2>
      {CHANGE_SUPPLIER.map((e, i) => {
        return (
          <Step
            index={i}
            key={i}
            text={e.text}
            step={e.step}
            buttons={e.buttons}
          />
        );
      })}
    </div>
  );
};

export default ChangeSupplier;
