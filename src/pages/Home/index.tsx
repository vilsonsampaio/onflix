import { FormEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Card } from "@components/Card";
import { Loading } from "@components/Loading";

import MoviesService, { Movie } from "@services/MoviesService";

import { Search } from "@assets/images";

import { Container, OnTrendingContainer, SearchContainer, Title, Wrapper } from "./styles";

type Sort = 'popularity.desc' | 'revenue.desc';

export function Home() {
  const navigate = useNavigate();

  const firstRender = useRef(true);
  const firstLoading = useRef(true);

  const [selectedSort, setSelectedSort] = useState<Sort>('popularity.desc');

  const [search, setSearch] = useState('');

  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  function handleSearch(e: FormEvent) {
    e.preventDefault();

    alert(JSON.stringify({ search }));
  }

  useEffect(() => {
    async function getMovies(page: number, sortBy: Sort) {
      try {
        const { data } = await MoviesService.listMovies({ page, sortBy });

        setMovies((prevState) => {
          const prevArr = currentPage === 1 ? [] : prevState;
          
          return [...prevArr, ...data.results];
        });
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
        if (firstLoading.current) firstLoading.current = false;
      }
    }

    getMovies(currentPage, selectedSort);
  }, [currentPage, selectedSort]);

  // Setting page 1 every time the selectedSort changes
  useEffect(() => {
    // Blocking below code if is first render
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    setCurrentPage(1);
    setMovies([]);
    setIsLoading(true);
  }, [selectedSort]);

  return (
    <Wrapper>
      <Container className="container">
        <Title>
          <h1>OnFlix</h1>
          <p>Hello, welcome! OnFlix is a <span>platform for discovering and storing Movies and TV Shows</span>, rating them as favorites. We are like Goodreads, but focused on television productions.</p>
        </Title>

        <SearchContainer className="search" onSubmit={handleSearch}>
          <Input 
            label="Search for Movies or TV Shows" 
            leftIcon={<Search />} 
            value={search}
            onChange={e => setSearch(e.target.value)}
          />

          <Button type="submit" disabled={!search}>Search</Button>
        </SearchContainer>

        <OnTrendingContainer>
          <nav className="filters">
            <ul>
              <li>
                <button 
                  className={selectedSort === 'popularity.desc' ? 'selected' : ''}
                  onClick={() => setSelectedSort('popularity.desc')}
                >
                  Popularity
                </button>

                <button 
                  className={selectedSort === 'revenue.desc' ? 'selected' : ''}
                  onClick={() => setSelectedSort('revenue.desc')}
                >
                  Revenue
                </button>
              </li>
            </ul>
          </nav>

          <h2>
            Most {selectedSort === 'popularity.desc' ? 'Popular' : 'Rent'} Movies
            <span>({isLoading || isLoadingMore ? 0 : movies.length})</span>
          </h2>

          <div className="results-container">
            {isLoading
              ? <Loading /> 
              : movies.length > 0 
                ? movies.map((movie, i) => (
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
         
          {!isLoading && (
            <Button 
              disabled={currentPage >= lastPage}
              isLoading={isLoadingMore}
              onClick={() => {
                setCurrentPage(prevState => prevState + 1);
                setIsLoadingMore(true);
              }}
            >
              Load more
            </Button>
          )}
        </OnTrendingContainer>
      </Container>
    </Wrapper>
  );
}