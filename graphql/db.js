import axios from "axios";

const BASE_URL = "https://yts.mx/api/v2/";
const LIST_URL = `${BASE_URL}list_movies.json`;
const DETAILS_URL = `${BASE_URL}movie_details.json`;
const SUGGESTION_URL = `${BASE_URL}movie_suggestions.json`;

export const getMovies = async (limit, minRating) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(LIST_URL, {
    params: {
      limit,
      minimum_rating: minRating,
    },
  });
  return movies;
};

export const getMovie = async (id) => {
  const {
    data: {
      data: { movie },
    },
  } = await axios(DETAILS_URL, {
    params: {
      movie_id: id,
    },
  });

  return movie;
};

export const getSuggestion = async (id) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(SUGGESTION_URL, {
    params: {
      movie_id: id,
    },
  });
  return movies;
};
