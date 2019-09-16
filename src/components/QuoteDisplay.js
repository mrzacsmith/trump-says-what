import React from "react";

const QuoteDisplay = props => {
  return (
    <div className="quote-card">
      <section className="quote">
        <p>{props.quote}</p>
      </section>
    </div>
  );
};

export default QuoteDisplay;
