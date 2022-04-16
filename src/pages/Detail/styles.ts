import styled, { css } from 'styled-components';
import chroma from 'chroma-js';

import { convertToRem } from '@utils/convertToRem';

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
  width: 100%;
`;

export const Container = styled.div`
  padding-top: ${convertToRem(40)};
`;

export const MovieCover = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: ${convertToRem(480)};

    background-color: ${theme.colors.primary.Primary700};
    background-image: linear-gradient(180deg, ${theme.colors.primary.Primary700} 0%, ${theme.colors.secondary.Secondary700} 100%);

    border-radius: ${convertToRem(40)};

    overflow: hidden;

    img {
      width: 100%;
      height: 100%;

      object-fit: cover;

      opacity: 0.6;
    }
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 0  ${convertToRem(80)};
`;

export const Title = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    width: 100%;
    max-width: ${convertToRem(560)};

    margin-top: ${convertToRem(-90)};
    padding: ${convertToRem(40)};

    background-color: ${chroma(theme.colors.neutrals.grey.Grey800).alpha(0.8).css()};

    border-radius: ${convertToRem(24)};
    
    backdrop-filter: blur(${convertToRem(24)});

    z-index: 2;

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
      display: flex;
      align-items: flex-start;
      justify-content: center;

      margin: ${convertToRem(8)} 0;

      color: ${theme.colors.neutrals.grey.Grey50};
      
      ${theme.fonts.heading.three};
    }

    .favorite {
      display: flex;
      align-items: center;
      justify-content: center;

      background: none;
      color: ${theme.colors.helpers.success.Success500};

      ${theme.fonts.link.extraSmall};

      border: 0;

      svg {
        width: auto;
        height: ${convertToRem(20)};

        margin-right: ${convertToRem(4)};
      }

      &.favorited {
        color: ${theme.colors.helpers.error.Error500};
      }
    }
  `};
`;

export const MovieInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    padding: ${convertToRem(80)} 0 ${convertToRem(160)};

    .poster {
      width: 100%;
      height: fit-content;

      max-width: ${convertToRem(480)};

      border-radius: ${convertToRem(24)};

      overflow: hidden;

      > img {
        width: 100%;
        height: 100%;

        object-fit: cover;
      }
    }

    .details {
      flex: 1;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      margin-left: ${convertToRem(80)};

      > *:not(:first-child) {
        margin-top: ${convertToRem(24)};
      }

      h2 {
        color: ${theme.colors.neutrals.grey.Grey50};

        ${theme.fonts.heading.four};
      }

      p {
        color: ${theme.colors.neutrals.grey.Grey300};

        ${theme.fonts.body.regular};
      }

      .info-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: ${convertToRem(16)};

        width: 100%;
      }

      .info-group {
        width: 100%;

        span {
          display: block;

          &.label {
            color: ${theme.colors.neutrals.grey.Grey400};


            font-size: ${convertToRem(14)};
          }

          &.value {
            color: ${theme.colors.neutrals.grey.Grey100};

            ${theme.fonts.body.regular};
          }
        }

        .trailer {
          overflow: hidden;
          padding-bottom: 56.25%;
          position: relative;
          height: 0;

          iframe {
            left: 0;
            top: 0;
            height: 100%;
            width: 100%;
            position: absolute;
          }
        }
      }
    }
  `}
`;