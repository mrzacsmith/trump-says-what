import React from "react";

const Header = props => {
  return (
    <header>
      <nav>
        <p>Welcome, {props.name}!</p>
      </nav>
    </header>
  );
};

export default Header;
