import styled, { css } from "styled-components";
import chroma from "chroma-js";

import { convertToRem } from "@utils/convertToRem";

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    width: 100vw;

    background-color: ${chroma(theme.colors.neutrals.grey.Grey900).alpha(0.8).css()};

    backdrop-filter: blur(${convertToRem(40)});

    z-index: 99;
  `};
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding-top: ${convertToRem(80)};
    padding-bottom: ${convertToRem(80)};

    > svg {
      width: auto;
      height: ${convertToRem(52)};
    }

    p {
      max-width: ${convertToRem(560)};

      margin-top: ${convertToRem(32)};

      color: ${theme.colors.neutrals.grey.Grey400};

      text-align: center;

      a {
        font-weight: 600;

        color: ${theme.colors.primary.Primary400};

        &:hover {
          text-decoration: underline;
        }
      }
    }
  `};
`;