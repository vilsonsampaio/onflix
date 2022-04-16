import styled, { css } from "styled-components";

import { Wrapper as Button } from "@components/Button/styles";

import { convertToRem } from "@utils/convertToRem";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;

    width: 100%;
    height: 100%;

    min-height: calc(100vh - ${convertToRem(80)});
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: ${convertToRem(40)} 0;

    height: initial;

    h1, p {
      max-width: ${convertToRem(590)};
    }

    h1 {
      margin-top: ${convertToRem(40)};

      color: ${theme.colors.neutrals.grey.Grey50};

      ${theme.fonts.heading.two};
    }

    p {
      margin-top: ${convertToRem(16)};

      color: ${theme.colors.neutrals.grey.Grey300};

      ${theme.fonts.body.regular};

      text-align: center;
    }

    ${Button} {
      margin-top: ${convertToRem(24)};
    }
  `}
`;