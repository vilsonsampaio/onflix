import { Star } from "@assets/images";

import { RatingProps } from "./Rating";

import { Wrapper } from "./styles";

export function Rating({ rate, decimalDigits = 1, ...props }: RatingProps) {
  return (
    <Wrapper {...props}>
      <Star strokeWidth={2.25} />
      {rate.toFixed(decimalDigits)}
    </Wrapper>
  );
}