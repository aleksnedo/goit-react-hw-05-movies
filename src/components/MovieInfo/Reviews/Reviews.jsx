import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from 'services/movieAPI';

const Reviews = () => {
  const [reviews, setReviews] = useState('');
  const [reviewsLength, setReviewsLength] = useState(0);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(data => {
      setReviews(
        data.map(elem => (
          <li key={elem.id}>
            <h3>Author: {elem.author}</h3>
            <p>{elem.content}</p>
          </li>
        ))
      );
      setReviewsLength(data.length);
    });
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      <ul>{reviewsLength !== 0 ? reviews : 'No reviews'}</ul>
    </div>
  );
};

export default Reviews;
