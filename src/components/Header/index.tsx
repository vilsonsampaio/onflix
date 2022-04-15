import { useState } from "react";
import { Link } from "react-router-dom";

import { OnFlix, HeartLine, HeartFill } from "@assets/images";

import { Container, Wrapper } from "./styles";

export function Header() {
  const [favorites, setFavorites] = useState<string[]>([]);

  return (
    <Wrapper>
      <Container className="container">
        <Link to="/" className="logo">
          <OnFlix />
        </Link>

        <button onClick={() => setFavorites([...favorites, 'id'])}>
          {favorites.length > 0 
            ? <HeartFill /> 
            : <HeartLine />
          }

          {favorites.length > 0 
            ? <span className="count">{favorites.length}</span> 
            : null
          }
        </button>
      </Container>
    </Wrapper>
  );
}