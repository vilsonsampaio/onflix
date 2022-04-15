import { Link } from "react-router-dom";

import { Container } from "./styles";

export function Detail() {
  return (
    <Container>
      <h1>Detail page</h1>

      <Link to="/">Go to home page</Link>
    </Container>
  );
}