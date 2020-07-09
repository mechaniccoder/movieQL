export let movies = [
    {
        id: 1,
        name: "logan",
        score: 2.7,
    },
    {
        id: 2,
        name: "the gotfather",
        score: 3.4,
    },
    {
        id: 3,
        name: "avengers",
        score: 4,
    },
    {
        id: 4,
        name: "harry poter",
        score: 4.5,
    },
];

export const getMovies = () => movies;

export const getMovieById = (id) => {
    const filteredMovies = movies.filter((movie) => movie.id === id);
    return filteredMovies[0];
};

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score,
    };
    movies.push(newMovie);
    return newMovie;
};

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter((movie) => Number(movie.id) !== Number(id));
    if (movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    }
    return false;
};
