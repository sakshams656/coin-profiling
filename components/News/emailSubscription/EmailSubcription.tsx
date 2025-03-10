import { useState } from "react";
import { Button, Input } from "zebpay-ui";
import * as styles from "./styles"
import ShimmerWrapper from "@components/Shared/ShimmerWrapper/ShimmerWrapper";

const EmailSubscription = ({ onSubscribe }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true); 

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
          onSubscribe(); 
        }, 1500); 
      }
    } else {
      setIsValidEmail(false);
    }
  };

  // Handle input change
  const handleInputChange = (target) => {
    const value = target.value; 
    setEmail(value); 
    if (value.trim() === "") {
      setIsValidEmail(true); 
    } else {
      setIsValidEmail(validateEmail(value)); 
    }
  };

  return (
    <div css={styles.form}>
      <div css={styles.inputButtonGap}> 
        <div css={styles.inputContainer}>
          <ShimmerWrapper height={40} width={260} isLoading={loading}>
          <Input

            label="Enter Email Address"
            onChange={handleInputChange} 
            placeholder="qwerty@gmail.com"
            errorText={isValidEmail || email.trim() === "" ? "" : "Invalid Email ID"} 
            style={{
              name: "3s4yqf",
              styles: "width:100%", 
            }}
            value={email}
          />
          </ShimmerWrapper>
        </div>
      </div>
      
      <Button 
        onClick={handleSubmit} 
        size="full-width" 
        type="primary"
        loading={loading} 
        disabled={loading || !isValidEmail} 
        style ={styles.subButton}
      >
        Subscribe
      </Button>
    </div>
  );
};

export default EmailSubscription;

