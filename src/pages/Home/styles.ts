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
  max-width: ${convertToRem(590)};

  h1 {
    ${({ theme }) => theme.fonts.heading.one()};
  }

  p {
    ${({ theme }) => theme.fonts.body.regular()};

    margin-top: ${convertToRem(16)};

    span {
      color: ${({ theme }) => theme.colors.primary.Primary300};
    }
  }
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

    h2 {
      ${theme.fonts.heading.three};
    }

    > div {
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