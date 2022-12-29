import PropTypes from 'prop-types';
import {
  MovieWrapper,
  Image,
  InfoWrapper,
  MovieName,
  MovieScore,
  TextTitle,
  Text,
} from './MovieInfo.styled';

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
        <MovieName>{`${title} (${release_date.slice(0, 4)})`}</MovieName>
        <MovieScore>User Score: {Math.round(vote_average * 10)}%</MovieScore>
        <TextTitle>Overwiev</TextTitle>
        <Text>{overview}</Text>
        <TextTitle>Genres</TextTitle>
        <Text>
          {genres.length > 0
            ? genres.map(({ name }) => name).join(', ')
            : 'No genres!'}
        </Text>
      </InfoWrapper>
    </MovieWrapper>
  );
};

MovieInfo.propTypes = {
  dataMovie: PropTypes.object.isRequired,
};
