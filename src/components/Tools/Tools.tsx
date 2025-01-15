import React, { useState } from "react";
import { Button } from "devextreme-react/button";
import "./Tools.css"; // Import your CSS for animations

const Tools: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="tool-container">
      <Button
        className="main-tool-button"
        icon="menu"
        onClick={toggleOptions}
      />
      <div className={`options-container ${isOpen ? "open" : ""}`}>
        <Button className="option-button" icon="save" />
        <Button className="option-button" icon="edit" />
        <Button className="option-button" icon="delete" />
      </div>
    </div>
  );
};

export default Tools;
