import { useState, useEffect } from "react";
import { Button, Input } from "zebpay-ui";
import * as styles from "./styles";
import ShimmerWrapper from "@components/Shared/ShimmerWrapper/ShimmerWrapper";
import { useDebounce } from "@hooks/useDebounce";

interface EmailSubscriptionProps {
  onSubscribe: () => void;
}

const EmailSubscription: React.FC<EmailSubscriptionProps> = ({ onSubscribe }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isTyping, setIsTyping] = useState(false); 

  const debouncedEmail = useDebounce(email, 1000);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  useEffect(() => {
    if (debouncedEmail.trim() === "") {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(validateEmail(debouncedEmail));
    }
    setIsTyping(false); 
  }, [debouncedEmail]);

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

  const handleInputChange = (target: { value: string }) => {
    const value = target.value;
    setEmail(value);
    setIsTyping(true); 
    setIsValidEmail(true);
  };
  
  const isButtonDisabled = loading || isTyping || (!email.trim() ? false : !isValidEmail);

  return (
    <div css={styles.form}>
      <div css={styles.inputButtonGap}>
        <div css={styles.inputContainer}>
          <ShimmerWrapper height={40} width={260} isLoading={loading}>
            <Input
              label="Enter Email Address"
              onChange={handleInputChange}
              placeholder="qwerty@gmail.com"
              errorText={
                isValidEmail || email.trim() === "" ? "" : "Invalid Email ID"
              }
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
        disabled={isButtonDisabled}
      >
        Subscribe
      </Button>
    </div>
  );
};

export default EmailSubscription;

