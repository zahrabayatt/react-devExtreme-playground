import React, { useState } from "react";
import { Button } from "devextreme-react/button";
import "./Tools.css"; // Import your CSS for animations

interface ToolOption {
  icon: string;
  width: number;
  height: number;
  onClick?: () => void; // Optional click handler for each option
  options?: ToolOption[]; // Nested options
}

interface ToolConfig {
  mainButton: {
    icon: string;
    width: number;
    height: number;
  };
  options: ToolOption[];
}

interface ToolsProps {
  config: ToolConfig;
}

const Tools: React.FC<ToolsProps> = ({ config }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentOptions, setCurrentOptions] = useState<ToolOption[]>(
    config.options
  );
  const [optionStack, setOptionStack] = useState<ToolOption[][]>([]);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: ToolOption) => {
    if (option.options) {
      setOptionStack([...optionStack, currentOptions]);
      setCurrentOptions(option.options);
    } else if (option.onClick) {
      option.onClick();
    }
  };

  const handleBackClick = () => {
    const previousOptions = optionStack.pop();
    if (previousOptions) {
      setCurrentOptions(previousOptions);
      setOptionStack([...optionStack]);
    }
  };

  return (
    <div className="tool-container">
      {optionStack.length > 0 ? (
        <Button
          className="main-tool-button"
          icon="chevronup"
          width={config.mainButton.width}
          height={config.mainButton.height}
          onClick={handleBackClick}
        />
      ) : (
        <Button
          className="main-tool-button"
          icon={config.mainButton.icon}
          onClick={toggleOptions}
          width={config.mainButton.width}
          height={config.mainButton.height}
        />
      )}

      {/* Options */}
      <div className={`options-container ${isOpen ? "open" : ""}`}>
        {currentOptions.map((option, index) => (
          <>
            <Button
              key={index}
              className={`option-button ${isOpen ? "open" : ""}`}
              icon={option.icon}
              width={option.width}
              height={option.height}
              style={{
                transitionDelay: `${index * 0.1}s`, // Staggered delay
              }}
              onClick={() => handleOptionClick(option)}
            />
            {index !== currentOptions.length - 1 && <div className="divider" />}
          </>
        ))}
      </div>
    </div>
  );
};

export default Tools;
