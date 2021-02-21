import React from 'react';
import { FaqCard } from '../../components';
import { FAQ } from '../../constants';

export interface FaqProps {}

const Faq: React.FC<FaqProps> = () => {
  return (
    <div className="container faq">
      {FAQ.map((f, i) => (
        <FaqCard key={`faq-${i}`} question={f.question} answer={f.answer} />
      ))}
    </div>
  );
};

export default Faq;
