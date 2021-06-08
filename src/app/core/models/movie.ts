import { Country } from './country';
import { Language } from './language';

export interface Movie {
  adult?: boolean;
  backdrop_path?: string;
  character?: string;
  credit_id?: string;
  genre_ids?: number[];
  id?: number;
  order?: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
  sinceHowManyDays?: number | undefined;
  belongs_to_collection?: Object | null;
  budget?: number;
  genres?: Object[];
  homepage?: string;
  imdb_id?: string | null;
  production_companies?: Object[];
  production_countries?: Country[];
  format?: Date;
  revenue?: number;
  runtime?: number | null;
  spoken_languages?: Language[];
  status?: string;
  tagline?: string | null;
}

export interface SliderMovie {
  genreId?: number;
  movieId?: string;
  video?: string;
  image?: string;
  thumbImage?: string;
  alt?: string;
  title?: string;
  posterImage?: string;
}

export const SliderMovieInit = {
  movieId: '',
  video: '',
  posterImage: '',
  title: '',
};
