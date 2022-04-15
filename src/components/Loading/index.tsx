import { LoadingProps } from "./Loading";

import { Wrapper } from "./styles";

export function Loading({ color = '', ...props }: LoadingProps) {
  return <Wrapper color={color} {...props} />;
}