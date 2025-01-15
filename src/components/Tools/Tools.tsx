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
      <div className={`options-container ${isOpen ? "open" : ""}`}>
        <Button
          className="option-button"
          icon="save"
          width={40}
          height={40}
          style={{ borderRadius: "50%" }}
        />
        <Button
          className="option-button"
          icon="edit"
          width={40}
          height={40}
          style={{ borderRadius: "50%" }}
        />
        <Button
          className="option-button"
          icon="trash"
          width={40}
          height={40}
          style={{ borderRadius: "50%" }}
        />
      </div>
    </div>
  );
};

export default Tools;
