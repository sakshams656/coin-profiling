import React from "react";
import { Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toast } from "zebpay-ui";
import NOOB from "@constants/noob";

export enum ToastType {
  info = "info",
  error = "error",
  success = "success",
}
export interface ToastData {
  title: string;
  description?: string;
  type: ToastType;
  duration: number;
}

const generateToast: any = ({ title, description, type, duration = 3000 }: ToastData) => {
  const toaster: JSX.Element = (
    <Toast title={title} description={description} type={type} onClose={NOOB} />
  );
  return toast(toaster, {
    position: "bottom-center",
    autoClose: duration,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    progress: 0,
    transition: Slide,
  });
};

export default generateToast;
