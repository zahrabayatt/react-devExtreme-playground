import React, { forwardRef, useImperativeHandle, useState } from "react";
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

export interface ToolsRef {
  reset: () => void; // Expose the reset function to the parent
}

const Tools = forwardRef<ToolsRef, ToolsProps>(({ config }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentOptions, setCurrentOptions] = useState<ToolOption[]>(config.options);
  const [optionStack, setOptionStack] = useState<ToolOption[][]>([]);
  const [selectedOption, setSelectedOption] = useState<ToolOption | null>(null);

  // Reset the component to its initial state
  const reset = () => {
    setIsOpen(false);
    setCurrentOptions(config.options);
    setOptionStack([]);
    setSelectedOption(null);
  };

  // Expose the reset function to the parent via ref
  useImperativeHandle(ref, () => ({
    reset,
  }));

  const toggleOptions = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSelectedOption(null); // Reset selected option when toggling options
    }
  };

  const handleOptionClick = (option: ToolOption) => {
    if (option.options) {
      setOptionStack([...optionStack, currentOptions]);
      setCurrentOptions(option.options);
    } else {
      setSelectedOption(option);
      setIsOpen(false); // Close the options container
      if (option.onClick) {
        option.onClick();
      }
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
      {selectedOption ? (
        <Button
          className="main-tool-button"
          icon={selectedOption.icon}
          width={config.mainButton.width}
          height={config.mainButton.height}
        //onClick={() => setSelectedOption(null)} // Reset selected option on click
        />
      ) : optionStack.length > 0 ? (
        <Button
          className="main-tool-button"
          icon="back"
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
          <React.Fragment key={index}>
            <Button
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
          </React.Fragment>
        ))}
      </div>
    </div>
  );
});

export default Tools;