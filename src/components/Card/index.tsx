import { useFavoriteList } from "@contexts/favoriteList";

import { Rating } from "@components/Rating";

import { HeartFill, HeartLine } from "@assets/images";
import nullPoster from "@assets/images/null-poster.png";

import { CardProps } from "./Card";

import { Favorite, Poster, Title, Wrapper } from "./styles";

export function Card({ data, onClick, ...props }: CardProps) {
  const { checkIsFavorite, toggleFromFavoriteList } = useFavoriteList();

  const isFavorite = checkIsFavorite(data.id);

  return (
    <Wrapper {...props}>
      <Poster>
        <img 
          src={data.poster_path 
            ? `https://image.tmdb.org/t/p/w500/${data.poster_path}` 
            : nullPoster
          } 
          alt={`Poster ${data.title}`}
          onClick={() => onClick()}
        />

        <Rating rate={data.vote_average} aria-label="Rating" />

        <Favorite 
          aria-label={isFavorite ? 'Unfavorite' : 'Favorite'} 
          onClick={() => toggleFromFavoriteList(data)}
        >
          {isFavorite ? <HeartFill /> : <HeartLine strokeWidth={2.25} />}
        </Favorite>
      </Poster>

      <Title onClick={() => onClick()}>{data.title}</Title>
    </Wrapper>
  );
}