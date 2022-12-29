import { useState, useEffect } from 'react';
import { getMoviesTrending } from 'services/movieAPI';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Title } from './Home.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getMoviesTrending().then(data => {
      setTrendingMovies(data);
    });
  }, []);

  return (
    <main>
      <Title>Trending today</Title>
      <MoviesList movies={trendingMovies} />
    </main>
  );
};

export default Home;
