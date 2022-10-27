import React from "react";

const Header = (props) => {
  return (
    <>
      <header>
        <h2 className="contanier">{props.title}</h2>
      </header>
    </>
  )
};

export default Header;