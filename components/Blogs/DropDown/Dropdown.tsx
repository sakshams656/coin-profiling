/** @jsxImportSource @emotion/react */
"use client";

import React, { useState, useRef, useEffect } from "react";
import { css } from "@emotion/react";
import UpDownIcon from "../app/icons/UpDownIcon";
import Image from "next/image";
import AssetsImg from "@public/images";

interface DropdownOption {
  label: React.ReactNode;
  value: string;
}

interface DropdownProps {
  onSortChange: (value: string) => void;
}

const dropdownContainer = css`
  position: absolute;
  top: calc(100% + 15px);
  right: -8px;
  z-index: 1000;
  background-color: #181837;
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid #338FFF;
`;

const optionStyle = (isSelected: boolean) => css`
  background-color: ${isSelected ? "#222245" : "#181837"};
  color: ${isSelected?"white":"#C0C0EE"};
  border:none;
  height:2rem;
  padding: 1.2rem 0.5rem;
  border-radius: 8px;
  width: 11rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Dropdown: React.FC<DropdownProps> = ({ onSortChange }) => {
  const [options] = useState<DropdownOption[]>([
    { label: "Latest", value: "Latest" },
    { label: "Trending", value: "Trending" },
  ]);
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
      if (
        buttonRef.current && !buttonRef.current.contains(event.target as Node) &&
        dropdownRef.current && !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={buttonRef} style={{ position: "relative", display: "inline-block" }}>
      <div onClick={handleDropdownToggle}>
        <UpDownIcon filled={!!selectedOption} />
      </div>
      {isDropdownOpen && (
        <div ref={dropdownRef} css={dropdownContainer}>
          {options.map((option) => (
            <button
              key={option.value}
              css={optionStyle(selectedOption?.value === option.value)}
              onClick={() => handleOptionSelect(option.value)}
            >
              <span>{option.label}</span>
              {selectedOption?.value === option.value && (
                <Image src={AssetsImg.ic_tick} alt="tick" width={20} height={20} />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
