import styled, { css } from "styled-components";

import { convertToRem } from "@utils/convertToRem";

export const Wrapper = styled.span`
  ${({ theme }) => css`   
    display: flex;
    align-items: center;
    justify-content: center;

    width: fit-content;

    padding: ${convertToRem(4)} ${convertToRem(8)};

    background-color: ${theme.colors.neutrals.black.Black65};
    color: ${theme.colors.helpers.warning.Warning500};

    ${theme.fonts.body.regular};

    border-radius: ${convertToRem(8)};

    backdrop-filter: blur(${convertToRem(8)});

    cursor: initial;
    
    > svg {
      width: auto;
      height: ${convertToRem(16)};

      margin-right: ${convertToRem(4)};
    }
  `}
`;