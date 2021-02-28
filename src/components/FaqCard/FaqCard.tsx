import React, { useState } from 'react';

export interface FaqCardProps {
  question: string;
  answer: string;
}

const FaqCard: React.FC<FaqCardProps> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  const togleText = () => setOpen((p) => !p);
  return (
    <div className="faq__card" onClick={togleText}>
      <div className="faq__card--title">{question}</div>
      <div
        className={`faq__card--text ${open ? 'faq__card--text-active' : ''}`}
      >
        {answer}
      </div>
      <div className="faq__card--more">Детальнiше...</div>
    </div>
  );
};

export default FaqCard;
