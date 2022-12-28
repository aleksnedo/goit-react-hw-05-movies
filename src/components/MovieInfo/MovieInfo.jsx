import PropTypes from 'prop-types';
import { MovieWrapper, Image, InfoWrapper } from './MovieInfo.styled';

export const MovieInfo = ({ dataMovie }) => {
  const { title, release_date, vote_average, overview, genres, poster_path } =
    dataMovie;
  return (
    <MovieWrapper>
      <Image
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
      />
      <InfoWrapper>
        <h2>{`${title} (${release_date.slice(0, 4)})`}</h2>
        <p>User Score: {Math.round(vote_average * 10)}%</p>
        <h3>Overwiev</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>
          {genres.length > 0
            ? genres.map(({ name }) => name).join(', ')
            : 'No genres!'}
        </p>
      </InfoWrapper>
    </MovieWrapper>
  );
};

MovieInfo.propTypes = {
  dataMovie: PropTypes.object.isRequired,
};
