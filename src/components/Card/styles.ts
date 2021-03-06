import styled, { css } from "styled-components";
import chroma from "chroma-js";

import { Wrapper as Rating } from "@components/Rating/styles";

import { convertToRem } from "@utils/convertToRem";

export const Favorite = styled.button`
  ${({ theme }) => css`
    position: absolute;
    top: ${convertToRem(10)};
    right: ${convertToRem(8)};

    display: flex;
    align-items: center;
    justify-content: center;

    padding: ${convertToRem(6)};

    background-color: ${theme.colors.neutrals.black.Black50};
    color: ${theme.colors.helpers.error.Error500};

    backdrop-filter: blur(${convertToRem(8)});
    border: 0;
    border-radius: 50%;

    opacity: 0;
    transition: all 0.4s ease;

    &:hover {
      background-color: ${theme.colors.neutrals.black.Black75};
    }
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    padding: ${convertToRem(8)} ${convertToRem(8)} ${convertToRem(16)};

    background-color: ${chroma(theme.colors.neutrals.grey.Grey800).alpha(0.8).css()};
    
    backdrop-filter: blur(${convertToRem(80)});
    border-radius: ${convertToRem(12)};

    cursor: pointer;
    outline: transparent solid ${convertToRem(2)};
    transition: all 0.4s ease;

    &:hover {
      outline: ${theme.colors.secondary.Secondary400} solid ${convertToRem(2)};

      ${Favorite} {
        opacity: 1;
      }
    }
  `}
`;

export const Poster = styled.div`
  ${({ theme }) => css`
    position: relative;

    padding-top: 150%; // Aspect Ratio 2:3

    background-color: ${theme.colors.neutrals.black.Black40};

    border-radius: ${convertToRem(8)};

    overflow: hidden;

    > img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      width: 100%;
      height: 100%;

      object-fit: cover;

      transition: all 0.3s ease;
    }

    > ${Rating} {
      position: absolute;
      top: ${convertToRem(10)};
      left: ${convertToRem(8)};
    }

    &:hover > img {
      transform: scale(1.05);
    }
  `}
`;

export const Title = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.neutrals.grey.Grey50};

    ${theme.fonts.link.regular};
    
    margin-top: ${convertToRem(16)};
    padding: ${convertToRem(8)};
  `}
`;