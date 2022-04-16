import { HTMLAttributes } from "react";

export interface RatingProps extends HTMLAttributes<HTMLSpanElement> {
  rate: number;
  decimalDigits?: number;
}