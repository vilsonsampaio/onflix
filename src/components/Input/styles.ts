import { convertToRem } from "@utils/convertToRem";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    width: fit-content;
    height: ${convertToRem(64)};

    min-width: ${convertToRem(340)};

    padding: 0 ${convertToRem(16)};

    border: ${convertToRem(1)} solid ${theme.colors.neutrals.grey.Grey700};
    border-radius: ${convertToRem(12)};
    
    transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;

    &:focus-within {
      label {
        transform: translateY(${convertToRem(12)});
      }

      border: ${convertToRem(1)} solid ${theme.colors.primary.Primary400};
    }

    .input-container {
      flex: 1;

      position: relative;
    }

    > svg {
      width: auto;
      height: ${convertToRem(24)};

      &:first-child {
        margin-right: ${convertToRem(16)};
      }

      &:last-child {
        margin-left: ${convertToRem(16)};
      }
    }

    label {
      position: absolute;
      top: 0;
      left: 0;

      ${theme.fonts.caption};

      color: ${theme.colors.neutrals.grey.Grey600};

      transform: translateY(${convertToRem(24)});
      transform-origin: top left;
      
      transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
      pointer-events: none;

      &.filled {
        transform: translateY(${convertToRem(12)});
      }
    }

    input {
      width: 100%;
      height: ${convertToRem(64)};

      padding: ${convertToRem(12)} 0;
      padding-top: ${convertToRem(26)};

      ${theme.fonts.body.regular};

      background: transparent;
      color: ${theme.colors.neutrals.grey.Grey400};

      border: none;
    }
  `}
`;