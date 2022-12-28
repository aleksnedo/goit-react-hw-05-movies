import PropTypes from 'prop-types';
import { MovieLink } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <MovieLink to={`/movies/${movie.id}`}>
            <h2>{movie.title}</h2>
          </MovieLink>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
