import React from "react";
import "./MenuItems.css";
const MenuItems = ({ items }) => {
  return (
    <div className="menudiv">
      {items.map((item) => (
        <h4 key={item}>{item}</h4>
      ))}
    </div>
  );
};

export default MenuItems;
