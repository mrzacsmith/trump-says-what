import React from "react";

const Header = props => {
  return (
    <header>
      <nav>
        <p>User: {props.name}</p>
      </nav>
    </header>
  );
};

export default Header;
