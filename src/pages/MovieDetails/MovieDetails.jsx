import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { getMovieById } from 'services/movieAPI';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { BackLink } from 'components/BackLink/BackLink';

export const MovieDetails = () => {
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
      <Outlet />
    </main>
  );
};
