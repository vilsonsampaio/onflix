import styled from "styled-components";
import chroma from "chroma-js";

import { convertToRem } from "@utils/convertToRem";

export const Wrapper = styled.div`
  width: 100vw;
  height: ${convertToRem(80)};

  background-color: ${({ theme }) => chroma(theme.colors.neutrals.grey.Grey900).alpha(0.8).css()};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    width: auto;
    height: ${convertToRem(40)};
  }

  ul {
    display: flex;

    li {
      &:not(:first-child) {
        margin-left: ${convertToRem(16)};
      }
    }

    a {
      ${({ theme }) => theme.fonts.link.regular()};

      padding: ${convertToRem(12)} ${convertToRem(16)};
    }
  }
`;