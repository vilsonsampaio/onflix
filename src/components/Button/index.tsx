import { ButtonProps } from "./Button";

import { Wrapper } from "./styles";

export function Button({ leftIcon, children, rightIcon, ...props }: ButtonProps) {
  return (
    <Wrapper {...props}>
      {leftIcon}

      {children}
      
      {rightIcon}
    </Wrapper>
  );
}