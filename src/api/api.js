import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "c4da2d26df740b651b6bb4b7cba32696",
    language: "en-US",
  },
});

async function getMovieInfoById(id) {
  try {
    const { data } = await api.get(`movie/${id}`);

    return data;
  } catch (e) {
    console.log(e);
  }
}

async function getTrending() {
  const { data } = await api.get(`trending/movie/day`);

  return data;
}

export { getMovieInfoById, getTrending };
