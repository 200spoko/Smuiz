import React from 'react';
import "../style/Header.sass"
import MenuBtn from "../components/MenuBtn"

const Header = (props) => {

  return (
    <div className="Header">
      <a
        className="Header__contactIcon"
        href="tel:+48736081510" >
        <i
          className="fas fa-phone-alt" ></i>
      </a>
      <a
        className="Header__contactIcon"
        href="mailto:tomasz@smuiz.pl">
        <i
          className="fas fa-at"></i>
      </a>
      <MenuBtn
        isActive={props.isActive}
        handleMenuBtn={props.handleMenuBtn}
      />
    </div>
  );
}

export default Header;