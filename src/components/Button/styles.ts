import styled, { css } from "styled-components";

import { convertToRem } from "@utils/convertToRem";

export const Wrapper = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: ${convertToRem(16)} ${convertToRem(32)};

    background-color: ${theme.colors.primary.Primary400};
    color: ${theme.colors.neutrals.white.White100};

    ${theme.fonts.body.regular};

    border: 0;
    border-radius: ${convertToRem(12)};

    transition: background-color ease 0.5s, opacity ease 0.3s;

    &:hover {
      background-color: ${theme.colors.primary.Primary500};
    }

    &:focus {
      box-shadow: 0 0 0 ${convertToRem(2)} ${theme.colors.primary.Primary500};
    }

    &:disabled {
      opacity: 0.4;

      cursor: not-allowed;

      &:hover {
        background-color: ${theme.colors.primary.Primary400};
      }
    }

    > svg {
      width: auto;
      height: ${convertToRem(24)};

      &:first-child {
        margin-right: ${convertToRem(8)};
      }

      &:last-child {
        margin-left: ${convertToRem(8)};
      }
    }
  `}
`;