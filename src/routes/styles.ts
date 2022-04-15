import { convertToRem } from "@utils/convertToRem";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  height: fit-content;
  
  min-height: 100vh;
`;

export const Main = styled.main`
  width: 100%;
  height: fit-content;

  padding-top: ${convertToRem(80)};
`;