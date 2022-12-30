import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast } from 'services/movieAPI';
import {
  TitleSection,
  List,
  Item,
  NameActor,
  Image,
  NameWrapper,
} from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId).then(data => {
      setCast(
        data.map(elem => (
          <Item key={elem.cast_id}>
            <Image
              src={`https://image.tmdb.org/t/p/w500${elem.profile_path}`}
              alt={elem.name}
              width="230px"
              onError={e => {
                e.target.src =
                  'https://media.istockphoto.com/id/1216251206/vector/no-image-available-icon.jpg?b=1&s=170667a&w=0&k=20&c=MiWLEcUdxZONMlnsN_k5OCaz_nLviJB0Hvcz5Wlp5oI=';
              }}
            />
            <NameWrapper>
              <NameActor>{elem.name}</NameActor>
              <p>
                Character: <br />
                {elem.character}
              </p>
            </NameWrapper>
          </Item>
        ))
      );
    });
  }, [movieId]);

  return (
    <>
      <TitleSection>Cast</TitleSection>
      <List>{cast}</List>
    </>
  );
};

export default Cast;
