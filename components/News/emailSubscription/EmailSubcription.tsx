import { useState, useEffect } from "react";
import { Button, Input } from "zebpay-ui";
import * as styles from "./styles";
import ShimmerWrapper from "@components/Shared/ShimmerWrapper/ShimmerWrapper";
import { useDebounce } from "use-debounce";

const EmailSubscription = ({ onSubscribe }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const [debouncedEmail] = useDebounce(email, 5000); // 5000ms = 5 seconds

  // Email validation regex
  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  useEffect(() => {
    if (debouncedEmail.trim() === "") {
      setIsValidEmail(true); // No error if empty
    } else {
      setIsValidEmail(validateEmail(debouncedEmail)); // Validate after 5 seconds
    }
  }, [debouncedEmail]);

  const handleSubmit = () => {
    if (email.trim()) {
      const isValid = validateEmail(email); // Immediate validation on submit
      setIsValidEmail(isValid);

      if (isValid) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          onSubscribe();
        }, 1500);
      }
    } else {
      setIsValidEmail(false); // Show error immediately if empty on submit
    }
  };

  const handleInputChange = (target) => {
    const value = target.value;
    setEmail(value);
    // Reset isValidEmail to true on every change to clear error while typing
    setIsValidEmail(true);
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
        disabled={loading || (!email.trim() ? false : !isValidEmail)}
        style={styles.subButton}
      >
        Subscribe
      </Button>
    </div>
  );
};

export default EmailSubscription;

