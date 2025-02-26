/** @jsxImportSource @emotion/react */
"use client";

import React, { useState, useRef, useEffect } from "react";
import { Global,css } from "@emotion/react";
import UpDownIcon from "../../icons/UpDownIcon";
import tick from "../../images/tick.svg";
import Image from "next/image";
import { DropdownStyle, upDownIcon, optionStyles, buttonStyles } from "../../styles/dropdown";
import { Popper } from "zebpay-ui";
import AssetsImg from "@public/images";

interface DropdownOption {
  label: React.ReactNode;
  value: string;
}

interface DropdownProps {
  onSortChange: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ onSortChange }) => {
  const [options] = useState<DropdownOption[]>([
    { label: "Latest", value: "Latest" },
    { label: "Trending", value: "Trending" },
  ]);
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleOptionSelect = (value: string) => {
    const option = options.find((opt) => opt.value === value);
    
    if (option) {
      const isDeselecting = selectedOption?.value === value;
      setSelectedOption(isDeselecting ? null : option);
      onSortChange(isDeselecting ? "" : value);
    }
    
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={buttonRef}>
      <Popper
        content={
          isDropdownOpen ? (
            <div css={DropdownStyle}>
              {options.map((option) => (
                <div key={option.value} css={optionStyles(selectedOption?.value === option.value)}>
                  <button
                    css={buttonStyles(selectedOption?.value === option.value)}
                    onClick={() => handleOptionSelect(option.value)}
                  >
                    <span>{option.label}</span>
                    {selectedOption?.value === option.value && (
                      <Image src={AssetsImg.ic_tick} alt="tick" width={20} height={20} />
                    )}
                  </button>
                </div>
              ))}
            </div>
          ) : null
        }
        position="bottom-end"
        
      >
        <div onClick={handleDropdownToggle} css={upDownIcon}>
          <UpDownIcon filled={!!selectedOption} />
        </div>
      </Popper>
    </div>
  );
};

export default Dropdown;
