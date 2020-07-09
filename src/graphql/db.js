import fetch from "node-fetch";

let API_URL = "https://yts.mx/api/v2/list_movies.json?";

export const getMovies = (limit, rating) => {
    if (limit > 0) {
        API_URL += `limit=${limit}`;
    }
    if (rating > 0) {
        API_URL += `&minimum_rating=${rating}`;
    }

    const data = fetch(`${API_URL}`)
        .then((res) => res.json())
        .then((json) => json.data.movies);

    return data;
};
