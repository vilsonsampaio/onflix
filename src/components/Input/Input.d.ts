import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}