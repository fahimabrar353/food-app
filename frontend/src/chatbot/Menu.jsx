// Menu.js
import React from "react";

const Menu = ({ menuItems, actionProvider }) => {
  return (
    <div>
      {menuItems.map((item, index) => (
        <button
          key={index}
          onClick={() => actionProvider.handleItemClick(item)}
          style={{
            backgroundColor: "#acd9e0",
            border: "none",
            padding: "10px",
            margin: "5px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Menu;
