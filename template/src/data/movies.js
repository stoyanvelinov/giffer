import { movies, categories } from "./movies-data.js";
import { GIPHY_KEY } from "../common/constants.js";

const findCategory = (categoryId) => {
  return categories.find((c) => c.id === categoryId) || { id: -1, name: "" };
};

export const getTrendingGifs = async () => {
  const url = `https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_KEY}&limit=50&rating=g`;
  const gifs = await fetch(url);
  const result = await gifs.json();
  // console.log(result.data.map(el=>console.log(el))+'get trending gifs promisa');
  return result.data;
};

export const getSearchedGifs = async (title) => {
const url = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_KEY}&q=${title}&offset=0&rating=g&lang=en`;
const gifs = await fetch(url);
const result = await gifs.json();
return result.data
}


export const getMoviesGeneralInfo = (categoryId = null) => {
  const moviesFilter = categoryId
    ? (m) => m.genre === findCategory(categoryId).name
    : () => true;

  return movies.filter(moviesFilter).map((m) => ({
    id: m.id,
    title: m.title,
    genre: m.genre,
    year: m.year,
    poster: m.poster,
  }));
};

export const getMoviesFullInfo = (categoryId = null) => {
  if (categoryId) {
    return movies.filter((m) => m.genre === findCategory(categoryId).name);
  }

  return movies;
};

export const getMovieById = (movieId = 0) =>
  movies.find((m) => m.id === movieId);

export const searchGifs = (title = "") =>
  title
    ? movies.filter((m) => m.title.toLowerCase().includes(title.toLowerCase()))
    : movies;

export const getCategory = (categoryId = null) => {
  return categories.find((c) => c.id === categoryId) || null;
};

export const getCategories = () =>
  categories.map((category) => ({
    ...category,
    moviesCount: movies.filter((m) => m.genre === category.name).length,
  }));
