import { useState, useEffect } from 'react';
import { getMoviesTrending } from 'services/movieAPI';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getMoviesTrending().then(data => {
      setTrendingMovies(data);
    });
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <MoviesList movies={trendingMovies} />
    </main>
  );
};
