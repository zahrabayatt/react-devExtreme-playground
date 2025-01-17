import React, { useState } from "react";
import { Button } from "devextreme-react/button";
import "./Tools.css"; // Import your CSS for animations

interface ToolConfig {
  mainButton: {
    icon: string;
    width: number;
    height: number;
  };
  options: Array<{
    icon: string;
    width: number;
    height: number;
    onClick?: () => void; // Optional click handler for each option
  }>;
}

interface ToolsProps {
  config: ToolConfig;
}

const Tools: React.FC<ToolsProps> = ({ config }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="tool-container">
      {/* Main Button */}
      <Button
        className="main-tool-button"
        icon={config.mainButton.icon}
        onClick={toggleOptions}
        width={config.mainButton.width}
        height={config.mainButton.height}
        style={{ borderRadius: "50%" }}
      />

      {/* Options */}
      <div className="options-container">
        {config.options.map((option, index) => (
          <Button
            key={index}
            className={`option-button ${isOpen ? "open" : ""}`}
            icon={option.icon}
            width={option.width}
            height={option.height}
            style={{
              borderRadius: "50%",
              transitionDelay: `${index * 0.1}s`, // Staggered delay
            }}
            onClick={option.onClick} // Optional click handler
          />
        ))}
      </div>
    </div>
  );
};

export default Tools;
