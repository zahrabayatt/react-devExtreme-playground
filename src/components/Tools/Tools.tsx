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
        width={40}
        height={40}
        style={{ borderRadius: "50%" }}
      />
      <div className="options-container">
        <Button
          className={`option-button ${isOpen ? "open" : ""}`}
          icon="save"
          width={40}
          height={40}
          style={{ borderRadius: "50%", transitionDelay: "0s" }}
        />
        <Button
          className={`option-button ${isOpen ? "open" : ""}`}
          icon="edit"
          width={40}
          height={40}
          style={{ borderRadius: "50%", transitionDelay: "0.1s" }}
        />
        <Button
          className={`option-button ${isOpen ? "open" : ""}`}
          icon="trash"
          width={40}
          height={40}
          style={{ borderRadius: "50%", transitionDelay: "0.2s" }}
        />
      </div>
    </div>
  );
};

export default Tools;
