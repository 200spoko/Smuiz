import React from 'react'
import "../style/MenuBtn.sass"

const MenuBtn = (props) => {
  return (
    <div
      className="MenuBtn"
      onClick={props.handleMenuBtn}
    >
      <span className={`MenuBtn__span ${props.isActive ? "MenuBtn__span--active" : ""}`}></span>
      <span className={`MenuBtn__span ${props.isActive ? "MenuBtn__span--active" : ""}`}></span>
      <span className={`MenuBtn__span ${props.isActive ? "MenuBtn__span--active" : ""}`}></span>
    </div>

  );
}

export default MenuBtn