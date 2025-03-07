/** @jsxImportSource @emotion/react */
"use client";

import React, { useState, useRef, useEffect } from "react";
import { css } from "@emotion/react";
import Image from "next/image";
import AssetsImg from "@public/images";
import { dropdownContainer, optionStyle } from "./style";

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
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(
    null
  );
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
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
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
    <div
      ref={buttonRef}
      style={{ position: "relative", display: "inline-block" }}
    >
      <div onClick={handleDropdownToggle}>
        <i
          className={
            selectedOption ? "icon icon-sorter-filled" : "icon icon-sorter"
          }
          css={css`
            color: #c0c0ee;
          `}
        />
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
                <Image
                  src={AssetsImg.ic_tick}
                  alt="tick"
                  width={20}
                  height={20}
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
