import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from 'services/movieAPI';
import { TitleSection, Item, AuthorName, Text } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState('');
  const [reviewsLength, setReviewsLength] = useState(0);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(data => {
      setReviews(
        data.map(elem => (
          <Item key={elem.id}>
            <AuthorName>Author: {elem.author}</AuthorName>
            <Text>{elem.content}</Text>
          </Item>
        ))
      );
      setReviewsLength(data.length);
    });
  }, [movieId]);

  return (
    <>
      <TitleSection>Reviews</TitleSection>
      <ul>{reviewsLength !== 0 ? reviews : 'No reviews'}</ul>
    </>
  );
};

export default Reviews;
