import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  h1 {
    ${({ theme }) => theme.fonts.heading.one};
  }

  a {
    ${({ theme }) => theme.fonts.body.extraSmall};
  }
`;