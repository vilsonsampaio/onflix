import styled, { css } from "styled-components";
import chroma from "chroma-js";

import { convertToRem } from "@utils/convertToRem";

export const Wrapper = styled.header`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    width: 100vw;
    height: ${convertToRem(80)};

    background-color: ${chroma(theme.colors.neutrals.grey.Grey900).alpha(0.8).css()};

    backdrop-filter: blur(${convertToRem(40)});

    z-index: 99;
  `};
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo svg {
      width: auto;
      height: ${convertToRem(40)};
    }

    .favorite {
      position: relative;

      display: flex;
      align-items: center;
      justify-content: center;

      padding: ${convertToRem(4)};

      svg {
        width: auto;
        height: ${convertToRem(32)};
      }

      .count {
        position: absolute;
        top: 0;
        right: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        width: ${convertToRem(15)};
        height: ${convertToRem(15)};

        font-weight: 700;
        font-size: ${convertToRem(10)};
        line-height: 1;

        background-color: ${theme.colors.primary.Primary500};
        color: ${theme.colors.neutrals.white.White100};

        border-radius: 50%;
      }
    }

    ul {
      display: flex;

      li {
        &:not(:first-child) {
          margin-left: ${convertToRem(16)};
        }
      }

      a {
        color: ${theme.colors.neutrals.grey.Grey200};

        ${theme.fonts.link.regular};

        padding: ${convertToRem(12)} ${convertToRem(16)};
      }
    }
  `};
`;