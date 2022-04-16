import styled, { css } from 'styled-components';

import { Wrapper as Input } from '@components/Input/styles';
import { Wrapper as Button } from '@components/Button/styles';

import { convertToRem } from '@utils/convertToRem';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  padding: ${convertToRem(80)} 0;
`;

export const Title = styled.div`
  ${({ theme }) => css`
    max-width: ${convertToRem(590)};

    h1 {
      color: ${theme.colors.neutrals.grey.Grey50};

      ${theme.fonts.heading.one};
    }

    p {
      margin-top: ${convertToRem(16)};

      color: ${theme.colors.neutrals.grey.Grey300};

      ${theme.fonts.body.regular};

      span {
        font-weight: 600;
        color: ${theme.colors.primary.Primary300};
      }
    }
  `};
`;

export const SearchContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  max-width: ${convertToRem(600)};

  margin-top: ${convertToRem(24)};

  ${Input} {
    flex: 1;
  }

  ${Button} {
    align-self: stretch;
    
    margin-left: ${convertToRem(16)};
  }
`;

export const OnTrendingContainer = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    margin-top: ${convertToRem(80)};

    .filters {
      max-width: 100%;

      ul {
        display: flex;
        flex-wrap: wrap;

        padding: ${convertToRem(8)};

        background-color: ${theme.colors.neutrals.black.Black20};

        border-radius: ${convertToRem(12)};
      }

      button {
        padding: ${convertToRem(8)} ${convertToRem(32)} ;

        background-color: transparent;
        color: ${theme.colors.neutrals.grey.Grey300};

        ${theme.fonts.link.regular};

        border: 0;
        border-radius: ${convertToRem(8)};

        &.selected {
          background-color: ${theme.colors.primary.Primary400};
          color: ${theme.colors.primary.Primary50};
        }
      }
    }

    h2 {
      margin-top: ${convertToRem(24)};

      color: ${theme.colors.neutrals.grey.Grey400};

      ${theme.fonts.heading.three};

      span {
        margin-left: ${convertToRem(8)};

        ${theme.fonts.body.regular};
      }
    }

    .results-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: ${convertToRem(24)};

      width: 100%;

      margin-top: ${convertToRem(24)};
    }

    > ${Button} {
      margin: 0 auto;
      margin-top: ${convertToRem(48)};
    }
  `}
`;