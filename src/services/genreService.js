import http from "./httpService";

const genresEndpoint = "/genres";

function getGenres() {
  return http.get(genresEndpoint);
}

export default { getGenres };
