import { Link } from "react-router-dom";

import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <h1>Home page</h1>

      <Link to="/insert_id_here">Go to detail page</Link>
    </Container>
  );
}