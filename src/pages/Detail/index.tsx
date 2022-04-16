import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import { useFavoriteList } from "@contexts/favoriteList";

import { NotFound } from "@pages/NotFound";

import { Loading } from "@components/Loading";
import { Rating } from "@components/Rating";

import MoviesService, { ListMovieById } from "@services/MoviesService";

import { Arrow, Minus, Plus } from "@assets/images";
import nullBanner from "@assets/images/null-banner.png";
import nullPoster from "@assets/images/null-poster.png";

import { Container, Content, LoadingWrapper, MovieCover, MovieInfo, Title, Wrapper } from "./styles";

export function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { checkIsFavorite, toggleFromFavoriteList } = useFavoriteList();

  const isFavorite = checkIsFavorite(Number(id));

  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<ListMovieById | null>(null);

  const movieTrailer = movie?.videos.results.filter(movie => movie.site === 'YouTube' && movie.type === 'Trailer')[0] || null;

  useEffect(() => {
    async function getMovie() {
      try {
        setIsLoading(true);

        const { data } = await MoviesService.listMovieById(Number(id));

        setMovie(data);
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

    getMovie();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (
      <LoadingWrapper>
        <Loading />
      </LoadingWrapper>
    );
  };

  if (!movie) return <NotFound title="Movie not found" />
  
  return (
    <Wrapper>
      <Container className="container">
        <MovieCover>
          <img 
            src={
              movie.backdrop_path
              ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
              : nullBanner
            }
            alt={movie.title}
          />
        </MovieCover>

        <Content>
          <Title>
            <button className="go-back" onClick={() => navigate(-1)}>
              <Arrow strokeWidth={2} />

              Go back
            </button>

            <h1>{movie.title}</h1>

            <button 
              className={`favorite ${isFavorite ? 'favorited' : ''}`}
              onClick={() => toggleFromFavoriteList(movie)}
            >
              {isFavorite ? <Minus /> : <Plus />}
              {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            </button>
          </Title>

          <MovieInfo>
            <div className="poster">
              <img 
                src={
                  movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : nullPoster
                } 
                alt={movie.title} 
              />
            </div>

            <div className="details">
              <h2>{movie.tagline}</h2>
              <p>{movie.overview}</p>

              <Rating rate={movie.vote_average} />
              
              <div className="info-grid">
                <div className="info-group">
                  <span className="label">Release Date</span>
                  <span className="value">{movie.release_date}</span>
                </div>

                <div className="info-group">
                  <span className="label">Run time</span>
                  <span className="value">{movie.runtime} min</span>
                </div>
              </div>

              <div className="info-grid">
                <div className="info-group">
                  <span className="label">Revenue</span>
                  <span className="value">{movie.revenue.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
                </div>

                <div className="info-group">
                  <span className="label">Budget</span>
                  <span className="value">{movie.budget.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
                </div>
              </div>

              <div className="info-grid">
                <div className="info-group">
                  <span className="label">Status</span>
                  <span className="value">{movie.status}</span>
                </div>

                <div className="info-group">
                  <span className="label">Genres</span>
                  <span className="value">{movie.genres.map(genre => genre.name).join(', ')}</span>
                </div>
              </div>

              {movieTrailer && (
                <div className="info-group">
                  <span className="label">Trailer</span>
                  <div className="trailer">
                    <iframe 
                      src={`https://www.youtube.com/embed/${movieTrailer.key}?controls=0?autoplay=1`} 
                      width="853" 
                      height="480" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen={false}
                      title="Embedded youtube" 
                    />
                  </div>
                </div>
              )}
            </div>
          </MovieInfo>
        </Content>
      </Container>
    </Wrapper>
  );
}