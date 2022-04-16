
import { OnFlix } from "@assets/images";

import { Container, Wrapper } from "./styles";

export function Footer() {
  return (
    <Wrapper>
      <Container className="container">
        <OnFlix />

        <p>
          A study project created by <a href="https://vilsonsampaio.dev/" target="_blank" rel="noreferrer">Vilson Sampaio</a> to practice his knowledge. You can find the source code on <a href="https://github.com/vilsonsampaio/onflix" target="_blank" rel="noreferrer">Github</a>, and its UI is available at the <a href="https://www.figma.com/community/file/1054327700155381422" target="_blank" rel="noreferrer">Figma Community</a>. 
        </p>
      </Container>
    </Wrapper>
  );
}