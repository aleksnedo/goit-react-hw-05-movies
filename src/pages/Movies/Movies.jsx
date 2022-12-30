import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Searchbox } from 'components/Searchbox/Searchbox';
import { useEffect } from 'react';
import { getMoviesByQuery } from 'services/movieAPI';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Title } from './Movies.styled';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
  const [queryInput, setQueryInput] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query !== '') {
      getMoviesByQuery({ query: query, page: 1 }).then(data => {
        setMovies(data);
      });
    }
    setMovies('');
  }, [query]);

  const handleButtonClick = () => {
    if (queryInput === '') {
      return toast.warn('Please enter the name of the movie');
    }

    updateQueryString(queryInput);
    setQueryInput('');
  };

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <Title>Movies Search</Title>
      <Searchbox
        onClick={handleButtonClick}
        value={queryInput}
        onChange={setQueryInput}
      />
      <ToastContainer autoClose={2500} theme="dark" transition={Flip} />
      {movies.length > 0 ? (
        <MoviesList movies={movies} />
      ) : (
        <div>Not Movies...</div>
      )}
    </main>
  );
};

export default Movies;
