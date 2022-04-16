import { Link } from "react-router-dom";

import { useFavoriteList } from "@contexts/favoriteList";

import { OnFlix, HeartLine, HeartFill } from "@assets/images";

import { Container, Wrapper } from "./styles";

export function Header() {
  const { favoriteList } = useFavoriteList();

  return (
    <Wrapper>
      <Container className="container">
        <Link to="/" className="logo">
          <OnFlix />
        </Link>

        <Link to='/favorites/' className="favorite">
          {favoriteList.length > 0 ? <HeartFill /> : <HeartLine />}

          {favoriteList.length > 0 
            ? <span className="count">{favoriteList.length}</span> 
            : null
          }
        </Link>
      </Container>
    </Wrapper>
  );
}