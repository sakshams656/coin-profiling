/** @jsxImportSource @emotion/react */
"use client";

import React, { useState, useRef, useEffect } from "react";
import { css } from "@emotion/react";
import { Popper } from "react-popper";
import UpDownIcon from "../../icons/UpDownIcon";
import Image from "next/image";
import { DropdownStyle, upDownIcon,optionStyles, buttonStyles } from "../../styles/dropdown";
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
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleOptionSelect = (value: string) => {
    if (selectedOption?.value === value) {
      setSelectedOption(null); 
      onSortChange(""); 
    } else {
      const option = options.find((option) => option.value === value);
      if (option) {
        setSelectedOption(option);
        onSortChange(option.value);
      }
    }
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
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
    >
      <div
        ref={buttonRef}
        onClick={handleDropdownToggle}
        css={upDownIcon}
      >
        <UpDownIcon filled={!!selectedOption} />
      </div>

      {isDropdownOpen && (
        <Popper
          placement="bottom-end"
          referenceElement={buttonRef.current}
          modifiers={[
            {
              name: "offset",
              options: {
                offset: [0,8],
              },
            },
          ]}
        >
          {({ ref, style }) => (
            <div
              ref={(node) => {
                ref(node);
                dropdownRef.current = node;
              }}
              css={DropdownStyle}
              style={style}
            >
              {options.map((option) => (
                <div
                  key={option.value}
                  css={optionStyles(selectedOption?.value === option.value)}
                >
                  <button
                    css={buttonStyles(selectedOption?.value === option.value)}
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
                </div>
              ))}
            </div>
          )}
        </Popper>
      )}
    </div>
  );
};

export default Dropdown;
