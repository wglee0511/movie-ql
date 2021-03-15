import { getMovie, getMovies, getSuggestion } from "./db";

const resolvers = {
  Query: {
    movies: (_, { limit, minRating }) => getMovies(limit, minRating),
    movie: (_, { id }) => getMovie(id),
    suggestion: (_, { id }) => getSuggestion(id),
  },
};

export default resolvers;
