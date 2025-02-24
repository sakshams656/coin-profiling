/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from "react";
import { Button, Input } from "zebpay-ui";
import { form, inputButtonGap, errorMessageContainer, errorMessage, inputContainer } from "./styles"

const EmailSubscription = ({ onSubscribe }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true); // State to track email validity

  // Function to validate email using a regex
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = () => {
    if (email.trim()) {
      const isValid = validateEmail(email);
      setIsValidEmail(isValid);

      if (isValid) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          onSubscribe(); // Call the onSubscribe function when the user subscribes
        }, 1500); // Simulating an API call
      }
    } else {
      setIsValidEmail(false); // Mark as invalid if the email is empty
    }
  };

  // Handle input change
  const handleInputChange = (target) => {
    const value = target.value; // Extract the value from the target object
    setEmail(value); // Update the email state

    // Validate email and update isValidEmail state
    if (value.trim() === "") {
      setIsValidEmail(true); // Revert to normal if input is cleared
    } else {
      setIsValidEmail(validateEmail(value)); // Validate email on change
    }
  };

  // Styles for error state
  const errorStyle = css`
    color: red;
    border-color: red;
  `;

  return (
    <div css={form}>
      <div css={inputButtonGap}> {/* Add gap only between input and button */}
        <div css={inputContainer}> {/* Ensure input takes full width */}
          <Input
            label="Enter Email Address"
            onChange={handleInputChange} // Pass the correct onChange handler
            placeholder="qwerty@gmail.com"
            style={{
              name: "3s4yqf",
              styles: `width:100%; ${!isValidEmail ? "border-color: red;" : ""}`,
            }}
            value={email}
            css={!isValidEmail && errorStyle} // Apply error style if email is invalid
          />
          {/* Error message container with fixed height */}
          <div css={errorMessageContainer}>
            {!isValidEmail && email.trim() !== "" && ( // Show error only if email is invalid and not empty
              <div css={errorMessage}> {/* Use the new error message CSS */}
                Invalid email
              </div>
            )}
          </div>
        </div>
      </div>
      <Button 
        onClick={handleSubmit} 
        size="full-width" 
        type="primary"
        loading={loading} // Set loading state on the button
        disabled={loading || !isValidEmail} // Disable the button while loading or if email is invalid
        style ={{
          'margin-bottom': "1rem"
        }}
      >
        Subscribe
      </Button>
    </div>
  );
};

export default EmailSubscription;

