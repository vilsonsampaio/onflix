import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import { Loading } from "@components/Loading";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Card } from "@components/Card";

import MoviesService, { Movie } from "@services/MoviesService";

import { Arrow, Search as SearchIcon } from "@assets/images";

import { Container, Wrapper, SearchContainer } from "./styles";

export function Search() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("q") || "");

  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const [movies, setMovies] = useState<Movie[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);


  useEffect(() => {
    getMovies();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  async function getMovies() {
    if (!search) return;

    try {
      if (currentPage === 1) {
        setIsLoading(true);
        setMovies([]);
      }

      const { data } = await MoviesService.listMovieByQuery({ page: currentPage, query: search});

      setMovies((prevState) => [...prevState, ...data.results]);
      setLastPage(data.total_pages);
    } catch (error) {
      console.log(error);
  
      if (axios.isAxiosError(error)) {
        if (error.response) {
          toast.error(error.response.data.status_message || 'Unable to load movies');
        }
      }
    } finally {
      setIsLoading(false);
      setIsLoadingMore(false);
    }
  }

  function handleSearch(e: FormEvent) {
    e.preventDefault();

    setSearchParams({ q: search });

    setCurrentPage(1);
    getMovies();
  }

  return (
    <Wrapper>
      <Container className="container">
        <button className="go-back" onClick={() => navigate(-1)}>
          <Arrow strokeWidth={2} />

          Go back
        </button>

        <h1>Find Movies</h1>

        <SearchContainer onSubmit={handleSearch}>
          <Input 
            label="Search for Movies" 
            leftIcon={<SearchIcon />} 
            value={search}
            onChange={e => setSearch(e.target.value)}
          />

          <Button type="submit" disabled={!search}>Search</Button>
        </SearchContainer>

        <p>{movies.length} movies</p>

        <div className="movies-container">
          {isLoading 
            ? <Loading /> 
            : movies.length > 0
              ? movies.map(movie => (
                <Card 
                  key={movie.id} 
                  data={movie} 
                  onClick={() => navigate(`/movie/${movie.id}`)} 
                />
              ))
              : 'No movie was found...'
          }

        </div>
        
        {!isLoading && currentPage < lastPage && (
          <Button 
            isLoading={isLoadingMore}
            onClick={() => {
              setCurrentPage(prevState => prevState + 1);
              setIsLoadingMore(true);
            }}
          >
            Load more
          </Button>
        )}
      </Container>
    </Wrapper>
  );
}