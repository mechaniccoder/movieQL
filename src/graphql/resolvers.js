import { getMovies, getMovieById, deleteMovie, addMovie } from "./db";

const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (_, { id }) => getMovieById(id),
    },
    Mutation: {
        addMovie: (_, { name, score }) => addMovie(name, score),
    },
};

export default resolvers;
