import React from "react";

const QuoteDisplay = props => {
  return (
    <section>
      <h2>Trump says what?</h2>
      <p>{props.quote}</p>
    </section>
  );
};

export default QuoteDisplay;
