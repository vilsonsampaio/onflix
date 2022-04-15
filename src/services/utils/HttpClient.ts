import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

class HttpClient {
  private httpClient: AxiosInstance;

  constructor(){
    this.httpClient = axios.create({
      baseURL: 'https://api.themoviedb.org/3',
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_MOVIE_API_KEY}`,
      }
    });
  }

  async get<T>(path: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.httpClient.get(path, config);
  }
}

export default new HttpClient();