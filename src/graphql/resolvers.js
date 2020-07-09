import { getMovies, getMovieById, deleteMovie, addMovie } from "./db";

const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (_, { id }) => getMovieById(id),
    },
    Mutation: {
        addMovie: (_, { name, score }) => addMovie(name, score),
        deleteMovie: (_, { id }) => deleteMovie(id),
    },
};

export default resolvers;
