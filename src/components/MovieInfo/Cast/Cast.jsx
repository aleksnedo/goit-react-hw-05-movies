import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast } from 'services/movieAPI';

const Cast = () => {
  const [cast, setCast] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId).then(data => {
      setCast(
        data.map(elem => (
          <li key={elem.cast_id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${elem.profile_path}`}
              alt={elem.name}
              width="150px"
              onError={e => {
                e.target.src =
                  'https://media.istockphoto.com/id/1216251206/vector/no-image-available-icon.jpg?b=1&s=170667a&w=0&k=20&c=MiWLEcUdxZONMlnsN_k5OCaz_nLviJB0Hvcz5Wlp5oI=';
              }}
            />
            <p>{elem.name}</p>
            <p>Character: {elem.character}</p>
          </li>
        ))
      );
    });
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>{cast}</ul>
    </div>
  );
};

export default Cast;
