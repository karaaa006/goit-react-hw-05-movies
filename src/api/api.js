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
  try {
    const { data } = await api.get(`trending/movie/day`);

    return data;
  } catch (e) {
    console.log(e);
  }
}

async function getCredits(id) {
  try {
    const { data } = await api.get(`movie/${id}/credits`);

    return data;
  } catch (e) {
    console.log(e);
  }
}

async function getReviews(id) {
  try {
    const { data } = await api.get(`movie/${id}/reviews`);

    return data;
  } catch (e) {
    console.log(e);
  }
}

async function getMoviesByQuery(query) {
  try {
    const { data } = await api.get(`search/movie?query=${query}`);

    return data;
  } catch (e) {
    console.log(e);
  }
}

export {
  getMovieInfoById,
  getTrending,
  getCredits,
  getReviews,
  getMoviesByQuery,
};
