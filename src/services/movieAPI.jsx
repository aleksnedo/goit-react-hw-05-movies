import axios from 'axios';

export async function getMoviesTrending() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=63f559983b2c566f4ead7a47a8a9015b`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getMoviesByQuery({ query, page }) {
  try {
    const {
      data: { results },
    } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=63f559983b2c566f4ead7a47a8a9015b&language=en-US&query=${query}&page=${page}&include_adult=false`
    );
    return results.map(({ id, title }) => ({ id, title }));
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieById(movieId) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=63f559983b2c566f4ead7a47a8a9015b&language=en-US`
    );
    const { title, overview, poster_path, vote_average, genres, release_date } =
      data;
    return {
      vote_average,
      title,
      release_date,
      overview,
      poster_path,
      genres,
    };
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieCast(movieId) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=63f559983b2c566f4ead7a47a8a9015b&language=en-US`
    );
    return data.cast.map(({ name, profile_path, character, cast_id }) => ({
      name,
      profile_path,
      character,
      cast_id,
    }));
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieReviews(movieId) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=63f559983b2c566f4ead7a47a8a9015b&language=en-US&page=1`
    );
    return data.results.map(({ author, content, id }) => ({
      author,
      content,
      id,
    }));
  } catch (error) {
    console.error(error);
  }
}
