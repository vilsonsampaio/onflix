import { HTMLAttributes } from "react";

import { Movie } from "@services/MoviesService";

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, "onClick"> {
  data: Movie;
  onClick: () => any;
}