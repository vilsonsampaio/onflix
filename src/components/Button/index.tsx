import { Loading } from "@components/Loading";

import { ButtonProps } from "./Button";

import { Wrapper } from "./styles";

export function Button({ isLoading = false, disabled = false, leftIcon, children, rightIcon, ...props }: ButtonProps) {
  return (
    <Wrapper disabled={isLoading || disabled} {...props}>
      {isLoading ? <Loading color='white' /> : (
        <>
          {leftIcon}

          {children}

          {rightIcon}
        </>
      )}
      
    </Wrapper>
  );
}