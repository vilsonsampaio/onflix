import styled, { keyframes } from 'styled-components';

import { convertToRem } from '@utils/convertToRem';

const loading = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.span<{ color: string; }>`
  display: flex;

  width: ${convertToRem(30)};
  height: ${convertToRem(30)};

  background-color: transparent;

  border: solid ${convertToRem(3)} ${({ color, theme }) => color || theme.colors.primary.Primary500};
  border-top-color: transparent;
  border-radius: 50%;

  animation: ${loading} 0.7s infinite linear;
`;