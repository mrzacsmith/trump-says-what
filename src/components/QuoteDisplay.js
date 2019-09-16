import React from "react";

const QuoteDisplay = ({ quote, isReady }) => {
  const showQuote = () => {
    return (
      <div className="quote-card">
        <section className="quote">
          {/* <p>{props.quote}</p> */}
          <p>{quote}</p>
        </section>
      </div>
    );
  };

  return (
    // <div className="quote-card">
    //   <section className="quote">
    //     <p>{props.quote}</p>
    //   </section>
    // </div>

    <>{isReady ? "" : showQuote()}</>
  );
};

export default QuoteDisplay;
