import fetcher from '@/utils/fetcher';
import QueryString from 'qs';

export type SearchQueryType = {
  page: number;
};

export type SearchTypeProps = {
  Title: string;
  Poster: string;
  Type: string;
  Year: string;
  imdbID: string;
};

export type ResponseTypeProps = {
  Response: string;
  Search: SearchTypeProps[];
  totalResults: string;
};

const searchMovie = async (
  query: SearchQueryType
): Promise<ResponseTypeProps> => {
  const response = await fetcher(
    `&s=Love&type=movie&${QueryString.stringify(query)}`,
    'GET'
  );

  return response;
};

type RatingType = {
  Source: string;
  Value: string;
};

export type ResponseDetailProps = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: RatingType[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
};

const getMovieDetail = async (id: string): Promise<ResponseDetailProps> => {
  const response = await fetcher(`&i=${id}`, 'GET');

  return response;
};

export{ getMovieDetail, searchMovie };
