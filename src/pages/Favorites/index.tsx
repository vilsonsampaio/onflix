import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import { useFavoriteList } from "@contexts/favoriteList";

import { NotFound } from "@pages/NotFound";

import { Card } from "@components/Card";
import { Loading } from "@components/Loading";

import MoviesService, { Movie } from "@services/MoviesService";

import { Arrow } from "@assets/images";

import { Container, LoadingWrapper, Wrapper } from "./styles";

export function Favorites() {
  const navigate = useNavigate();

  const { favoriteList } = useFavoriteList();

  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);

        if (favoriteList.length <= 0) return;

        const movies = await Promise.all(favoriteList.map(favorite => MoviesService.listMovieById(favorite)));

        const parsedMovies: Movie[] = movies.map(({ data }) => ({
          id: data.id,
          title: data.title,
          poster_path: data.poster_path,
          vote_average: data.vote_average
        }));

        setMovies(parsedMovies);
      } catch (error) {
        console.log(error);
    
        if (axios.isAxiosError(error)) {
          if (error.response) {
            toast.error(error.response.data.status_message || 'Unable to load movies');
          }
        }
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, [favoriteList]);

  if (isLoading) {
    return (
      <LoadingWrapper>
        <Loading />
      </LoadingWrapper>
    );
  }

  if (favoriteList.length <= 0) {
    return (
      <NotFound 
        title="No favorited movies" 
        description="There are no favorited movies. Go back to home and find one :)"
      />
    );
  }
  
  return (
    <Wrapper>
      <Container className="container">
        <button className="go-back" onClick={() => navigate(-1)}>
          <Arrow strokeWidth={2} />

          Go back
        </button>

        <h1>Favorites</h1>

        <p>{favoriteList.length} items</p>

        <div className="favorites-container">
          {movies.map((movie, i) => (
            <Card 
              key={`${movie.id}--${i}`}
              data={movie} 
              onClick={() => navigate(`/movie/${movie.id}`)}
            />
          ))}
        </div>
      </Container>
    </Wrapper>
  )
}