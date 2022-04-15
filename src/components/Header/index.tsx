import { Link } from "react-router-dom";

import { OnFlix } from "@assets/images";

import { Container, Wrapper } from "./styles";

export function Header() {
  return (
    <Wrapper>
      <Container className="container">
        <OnFlix className="logo" />

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/detalhes">Detalhes</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </Wrapper>
  );
}