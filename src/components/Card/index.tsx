import { useState } from "react";
import { toast } from "react-toastify";

import { HeartFill, HeartLine, Star } from "@assets/images";
import nullPoster from "@assets/images/null-poster.png";

import { CardProps } from "./Card";

import { Favorite, Poster, Rating, Title, Wrapper } from "./styles";

export function Card({ data, onClick, ...props }: CardProps) {
  const [isFavorite, setIsFavorited] = useState(data.isFavorited || false);

  function toogleFavorite() {
    setIsFavorited(!isFavorite);
    toast.success(`Movie was successfully ${isFavorite ? 'unfavorited' : 'favorited'}`)
  }

  return (
    <Wrapper {...props}>
      <Poster>
        <img 
          src={data.posterPath 
            ? `https://image.tmdb.org/t/p/w500/${data.posterPath}` 
            : nullPoster
          } 
          alt={`Poster ${data.title}`}
          onClick={() => onClick()}
        />

        <Rating aria-label="Rating">
          <Star strokeWidth={2.25} />
          {data.rating.toFixed(1)}
        </Rating> 

        <Favorite 
          aria-label={isFavorite ? 'Unfavorite' : 'Favorite'} 
          onClick={toogleFavorite}
        >
          {isFavorite ? <HeartFill /> : <HeartLine strokeWidth={2.25} />}
        </Favorite>
      </Poster>

      <Title onClick={() => onClick()}>{data.title}</Title>
    </Wrapper>
  );
}