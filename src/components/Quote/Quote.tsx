import React from "react";
import "./Quote.scss";

import QuoteBubble from '../../assets/icons/quote.svg';

export interface QuoteProps {
  quote: string;
  name: string;
  description: string;
}

const Quote = (props: QuoteProps) => {
  return (
    <div className="quote">
        <div className="bubble">
            <img src={QuoteBubble} alt="" />
            <div className="quote-text">
                {props.quote}
            </div>
        </div>
        <div>
            <div className="quote-name">
            {props.name}
            </div>
            <div className="quote-description">
            {props.description}
            </div>
        </div>
    </div>
  )
};

export default Quote;