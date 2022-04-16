import HttpClient from "./utils/HttpClient";

export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  vote_average: number;
};

interface ListMovies {
  page: Number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

interface ListMoviesParams {
  page: number;
  sortBy: 'popularity.asc' | 'popularity.desc' | 'release_date.asc' | 'release_date.desc' | 'revenue.asc' | 'revenue.desc' | 'primary_release_date.asc' | 'primary_release_date.desc' | 'original_title.asc' | 'original_title.desc' | 'vote_average.asc' | 'vote_average.desc' | 'vote_count.asc' | 'vote_count.desc';
};

interface Video {
  id: string;
  site: string;
  type: string;
  official: boolean;
  key: string;
}

export interface ListMovieById extends Movie {
  backdrop_path: string | null;
  tagline: string | null;
  overview: string | null;
  status: 'Rumored' | 'Planned' | 'In Production' | 'Post Production' | 'Released' | 'Canceled';
  release_date: string;
  runtime: number;
  genres: Array<{ id: number; name: string; }>;
  budget: number;
  revenue: number;
  videos: {
    results: Video[];
  };
}

const [month, day, year] = new Date().toLocaleDateString('en-US').split('/');
const maxReleaseDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;

class MoviesService {
  async listMovies(params: ListMoviesParams) {
    return HttpClient.get<ListMovies>('/discover/movie/', {
      params: {
        page: params.page,
        sort_by: params.sortBy,
        'release_date.lte': maxReleaseDate,
      }
    });
  }

  async listMovieById(id: number) {
    return HttpClient.get<ListMovieById>(`/movie/${id}`, {
      params: {
        'append_to_response': 'videos',
      }
    });
  }
}

export default new MoviesService();