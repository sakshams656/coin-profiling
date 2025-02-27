/** @jsxImportSource @emotion/react */
"use client";

import { useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { Icon, Input, Button, CircularLoader } from "zebpay-ui";
import { css } from "@emotion/react";
import AssetsImg from "@public/images";
import {
  ErrorText,
  ButtonStyle,
  Subscribed,
  newsletter,
  newsChild,
  newsHeader,
  heading,
  MailIcon,
  quote,
  Form,
  Subscribe
} from "../../styles/NewsLetterStyle";
import Image from "next/image";



const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [showError, setShowError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isInputFocus,setIsInputFocus]=useState(false);

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleEmailChange = (target: InputTargetProps) => {
    const newEmail = target.value;
    setEmail(newEmail);
    const isValid = validateEmail(newEmail);
    setIsValidEmail(isValid);
    setShowError(newEmail.includes("@") && !isValid);
  };

  const handleSubmit = () => {
    if (isValidEmail && email && !isSubmitting) {
      setIsSubmitting(true);

      setTimeout(() => {
        console.log("Subscribed!");
        setIsSubmitting(false);
        setIsSubscribed(true);
      }, 4000);
    }
  };

  const getLabelColor = () => {
    if (showError) return "#EA6161";
    if (email) return "white";
    return "#C0C0EE";
  };

  return (
    <div css={newsletter}>
      <div css={newsChild}>
        <div>
          <div css={newsHeader}>
            <MailIcon>
              <Image
                src={isSubscribed ? AssetsImg.ic_subscribed : AssetsImg.ic_mail}
                alt={isSubscribed ? "Subscribed" : "Mail"}
              />
            </MailIcon>
            <div css={heading}>
              {isSubscribed
                ? "Subscription Successful!"
                : "ZebPay Weekly Newsletter!"}
            </div>
            <div css={quote}>
              {isSubscribed
                ? "Thank you for subscribing! You’ll now receive the latest crypto news and updates straight to your inbox."
                : "Subscribe for latest crypto news & stay updated!"}
            </div>
          </div>

          {!isSubscribed && (
            <>
              <Form
                css={css`
                  position: relative;
                `}
              >
                <Input
                  invalid={showError}
                  label="Enter Email Address"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="qwerty@gmail.com"
                  style={{
                    width: "100%",
                  }}
                  // onFocus={()=>setIsInputFocus(true)}
                  // onBlur={()=>setIsInputFocus(false)}
                />
                {showError && <span css={ErrorText}>Invalid email id</span>}
              </Form>
              <div css={Subscribe} isValid={isValidEmail}>
                <Button
                  onClick={handleSubmit}
                  size="full-width"
                  type="primary"
                  disabled={(!isValidEmail  || isSubmitting)&& isInputFocus}
                  loading={isSubmitting}
          
                  
                >
                  <div css={ButtonStyle}>Subscribe</div>
                </Button>
              </div>
            </>
          )}
        </div>

        {isSubscribed && (
          <div css={Subscribed}>
            <Image
              src={AssetsImg.ic_zebpay}
              alt="Subscribed Confirmation"
              style={{ opacity: 0.05 }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsLetter;
