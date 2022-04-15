import { HTMLAttributes } from "react";

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, "onClick"> {
  data: {
    id: number;
    posterPath: string | null;
    title: string;
    rating: number;
    isFavorited?: boolean;
  };
  onClick: () => any;
}