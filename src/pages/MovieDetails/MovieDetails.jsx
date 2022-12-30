import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { getMovieById } from 'services/movieAPI';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { BackLink } from 'components/BackLink/BackLink';
import { SectionTitle, List, Item, LinkStyle } from './MovieDetails.styled';

const MovieDetails = () => {
  const [dataMovie, setDataMovie] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();
  const BackLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    getMovieById(movieId).then(data => {
      setDataMovie(data);
    });
  }, [movieId]);

  return (
    <main>
      <BackLink to={BackLinkHref}>Go back</BackLink>

      {dataMovie && <MovieInfo dataMovie={dataMovie} />}

      <SectionTitle>Additional information</SectionTitle>
      <List>
        <Item>
          <LinkStyle to="cast" state={{ from: BackLinkHref }}>
            Cast
          </LinkStyle>
        </Item>
        <Item>
          <LinkStyle to="reviews" state={{ from: BackLinkHref }}>
            Reviews
          </LinkStyle>
        </Item>
      </List>
      <Suspense fallback={<div>Information is Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
