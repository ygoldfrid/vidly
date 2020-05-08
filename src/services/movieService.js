import http from "./httpService";

const moviesEndpoint = "/movies";

function movieUrl(id) {
  return `${moviesEndpoint}/${id}`;
}

function getMovies() {
  return http.get(moviesEndpoint);
}

function getMovie(id) {
  return http.get(movieUrl(id));
}

function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(movieUrl(movie._id), body);
  }
  return http.post(moviesEndpoint, movie);
}

function deleteMovie(id) {
  return http.delete(movieUrl(id));
}

export default {
  getMovies,
  getMovie,
  saveMovie,
  deleteMovie,
};
