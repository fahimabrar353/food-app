import React from "react";
import "./MenuItemButton.css";

const MenuItemButton = (props) => {
  return (
    <button
      className="menu-item-button"
      onClick={() => props.actionProvider.handleOrder(props.item)}
    >
      {props.item}
    </button>
  );
};

export default MenuItemButton;
