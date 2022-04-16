import { useNavigate } from "react-router-dom";

import { Button } from "@components/Button";

import { NotFoundIllustration } from "@assets/images";

import { NotFoundProps } from "./NotFound";

import { Container, Wrapper } from "./styles";

export function NotFound({ title, description }: NotFoundProps) {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container className="container">
        <NotFoundIllustration />

        <h1>{title ? title : 'Lost your way?'}</h1>
        <p>{description ? description : "Oops! This is awkward. You are looking for something that doesn't actually exist."}</p>

        <Button onClick={() => navigate('/')}>Go Home</Button>
      </Container>
    </Wrapper>
  )
}