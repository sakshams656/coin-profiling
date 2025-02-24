import React, { useState, useRef, useEffect } from "react";
import { css } from "@emotion/react";
import { Popper } from "react-popper";
import Image from "next/image";
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
    { label: "Duration - Short to Long", value: "duration"}
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
      setSelectedOption(null); // Deselect option
      onSortChange(""); // Notify parent that no option is selected
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
      css={css`
        position: relative;
        display: inline-block;
        margin-top: 1.25rem;
      `}
    >
      <div
        ref={buttonRef}
        onClick={handleDropdownToggle}
        style={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1.25rem",
        }}
      >
        <Image src={AssetsImg.ic_sorter} alt={"sorter"} width={16} height={16}/>
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
              style={{
                ...style,
                backgroundColor: "#181837",
                borderRadius: "0.75rem",
                padding: "0.5rem",
                minWidth: "13rem",
                zIndex: 999,
                marginTop: "0.5rem",
                boxShadow: "0 0.25rem 0.375rem rgba(0, 0, 0, 0.2)",
                border: "0.1rem solid #338FFF",
                boxSizing: "border-box",
                overflow: "hidden",
              }}
            >
              {options.map((option) => (
                <div
                  key={option.value}
                  style={{
                    backgroundColor: selectedOption?.value === option.value ? "#222245" : "transparent",
                    borderRadius: "0.5rem",
                    margin: "0.375rem 0",
                    overflow: "hidden",
                  }}
                >
                  <button
                    style={{
                      width: "100%",
                      textAlign: "left",
                      color: selectedOption?.value === option.value ? "white" : "#C0C0EE",
                      padding: "0.625rem",
                      border: "none",
                      outline: "none",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      backgroundColor: "transparent",
                      transition: "background-color 0.3s ease",
                      boxSizing: "border-box",
                      fontFamily: "'Lato', 'Noto_Serif', sans-serif",
                    }}
                    onClick={() => handleOptionSelect(option.value)}
                  >
                    <span>{option.label}</span>
                    {selectedOption?.value === option.value && (
                      <Image {...AssetsImg.ic_tick} alt={"tick"} width={20} height={20}/>
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