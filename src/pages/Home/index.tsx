import { FormEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Card } from "@components/Card";
import { Loading } from "@components/Loading";

import { api } from "@services/api";

import { Search } from "@assets/images";

import { Container, OnTrendingContainer, SearchContainer, Title, Wrapper } from "./styles";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};

interface PopularMovies {
  page: Number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export function Home() {
  const navigate = useNavigate();

  const isFirstAPICall = useRef(true);

  const [isLoading, setIsLoading] = useState(true);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  const [search, setSearch] = useState('');

  function handleSearch(e: FormEvent) {
    e.preventDefault();

    alert(JSON.stringify({ search }));
  }

  useEffect(() => {
    async function getPopularMovies() {
      try {
        setIsLoading(true);

        const { data } = await api.get<PopularMovies>(`/movie/popular/`, {
          params: {
            page: currentPage,
          }
        });

        setPopularMovies([...popularMovies, ...data.results]);
        setLastPage(data.total_pages);
      } catch (error) {
        console.log(error);

        if (axios.isAxiosError(error)) {
          if (error.response) {
            toast.error(error.response.data.status_message || 'Unable to load the most popular movies from API');
          }
        }
      } finally {
        if (isFirstAPICall.current === true) isFirstAPICall.current = false;

        setIsLoading(false);
      }
    }

    getPopularMovies();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
    <Wrapper>
      <Container className="container">
        <Title>
          <h1>OnFlix</h1>
          <p>Hello, welcome! OnFlix is a <span>platform for discovering and storing movies</span> and rating them as favorites. We are like Goodreads, but focused on television productions.</p>
        </Title>

        <SearchContainer className="search" onSubmit={handleSearch}>
          <Input 
            label="Search movies" 
            leftIcon={<Search />} 
            value={search}
            onChange={e => setSearch(e.target.value)}
          />

          <Button type="submit" disabled={!search}>Search</Button>
        </SearchContainer>

        <OnTrendingContainer>
          <h2>Most Popular Movies</h2>

          <div>
            {isLoading && isFirstAPICall.current 
              ? <Loading /> 
              : popularMovies.length > 0 
                ? popularMovies.map((movie, i) => (
                    <Card 
                      key={`${movie.id}--${i}`}
                      data={{
                        id: movie.id,
                        title: movie.title,
                        posterPath: movie.poster_path,
                        rating: movie.vote_average,
                        isFavorited: (i + 1) % 2 === 0
                      }} 
                      onClick={() => navigate(`/movie/${movie.id}`)}
                    />
                ))
                : 'No movies...'
            }
          </div>
          
          {!isFirstAPICall.current 
            ? (
              <Button 
                disabled={currentPage >= lastPage}
                isLoading={isLoading}
                onClick={() => setCurrentPage(prevState => prevState + 1)}
              >
                Load more
              </Button>
            )
            : null
          }
        </OnTrendingContainer>
      </Container>
    </Wrapper>
  );
}