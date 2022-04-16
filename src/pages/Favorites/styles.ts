import styled, { css } from "styled-components";

import { convertToRem } from "@utils/convertToRem";

export const LoadingWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    min-height: calc(100vh - ${convertToRem(80)});
  `};
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;

    width: 100%;
    height: 100%;
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    padding: ${convertToRem(64)} 0 ${convertToRem(128)};

    height: initial;

    .go-back {
      display: flex;
      align-items: center;
      justify-content: center;

      background: none;
      color: ${theme.colors.primary.Primary200};
      
      ${theme.fonts.body.small};

      border: 0;

      &:hover {
        text-decoration: underline;
      }

      > svg {
        width: auto;
        height: ${convertToRem(16)};

        margin-right: ${convertToRem(8)};

        transform: rotate(180deg);
      }
    }

    h1 {
      color: ${theme.colors.neutrals.grey.Grey50};

      ${theme.fonts.heading.one};
    }

    p {
      margin-top: ${convertToRem(48)};

      color: ${theme.colors.neutrals.grey.Grey400};

      ${theme.fonts.body.regular};
    }

    .favorites-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: ${convertToRem(24)};

      width: 100%;

      margin-top: ${convertToRem(24)};
    }
  `}
`;