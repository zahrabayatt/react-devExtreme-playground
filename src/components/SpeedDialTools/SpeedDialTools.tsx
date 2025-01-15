import React, { useState } from "react";
import { SpeedDialAction } from "devextreme-react/speed-dial-action";
import "./SpeedDialTools.css"; // For custom styles

const SpeedDialTools: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const actions = [
    { icon: "save", text: "Save", onClick: () => alert("Save clicked") },
    { icon: "edit", text: "Edit", onClick: () => alert("Edit clicked") },
    { icon: "trash", text: "Delete", onClick: () => alert("Delete clicked") },
  ];

  return (
    <div className="tool-container">
      {/* Main Button */}
      <SpeedDialAction
        icon="menu"
        onClick={toggleOptions}
        activeStateEnabled={true}
        hint="Toggle Options"
        elementAttr={{ class: "main-tool-button" }}
      />

      {/* Additional Buttons */}
      <div className={`options-container ${isOpen ? "open" : ""}`}>
        {actions.map((action, index) => (
          <SpeedDialAction
            key={index}
            icon={action.icon}
            hint={action.text}
            onClick={action.onClick}
            elementAttr={{ class: "option-button" }}
            style={{
              width: "60px",
              height: "60px",
              minWidth: "60px",
              minHeight: "60px",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SpeedDialTools;
