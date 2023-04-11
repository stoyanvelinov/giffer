import {
  ABOUT,
  CATEGORIES,
  CONTAINER_SELECTOR,
  FAVORITES,
  HOME,
} from "../common/constants.js";
import {
  loadCategories,
  loadCategory,
  loadMovies,
  loadSingleMovie,
} from "../requests/request-service.js";
// import { toAboutView } from "../views/trending-view.js";
import { toCategoriesView } from "../views/category-view.js";
import { toFavoritesView } from "../views/favorites-view.js";
import { toHomeView } from "../views/home-view.js";
import {
  toMoviesFromCategoryView,
  toSingleMovieView,
} from "../views/movie-views.js";
import { q, setActiveNav } from "./helpers.js";
import { getFavorites } from "../data/favorites.js";
import { toTrendingView } from "../views/trending-view.js";
import { getTrendingGifs } from "../data/movies.js";

// public API
export const loadPage = (page = "") => {
  switch (page) {
    case HOME:
      setActiveNav(HOME);
      return renderHome();

    case CATEGORIES:
      setActiveNav(CATEGORIES);
      return renderCategories();

    case FAVORITES:
      setActiveNav(FAVORITES);
      return renderFavorites();

    case ABOUT:
      setActiveNav(ABOUT);
      return renderAbout();

    /* if the app supports error login, use default to log mapping errors */
    default:
      return null;
  }
};

export const renderMovieDetails = (id = null) => {
  const movie = loadSingleMovie(id);

  q(CONTAINER_SELECTOR).innerHTML = toSingleMovieView(movie);
};

export const renderCategory = (categoryId = null) => {
  const category = loadCategory(categoryId);
  const movies = loadMovies(category.id);

  q(CONTAINER_SELECTOR).innerHTML = toMoviesFromCategoryView(category, movies);
};

// private functions

const renderHome = () => {
  q(CONTAINER_SELECTOR).innerHTML = toHomeView();
};

const renderCategories = () => {
  const categories = loadCategories();

  q(CONTAINER_SELECTOR).innerHTML = toCategoriesView(categories);
};

const renderFavorites = () => {
  const favorites = getFavorites();
  const movies = favorites.map((id) => loadSingleMovie(id));

  q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(movies);
};

const renderAbout = async () => {
  // console.log(await getTrendingGifs().map(el=>console.log(el))+'promis!');
  q(CONTAINER_SELECTOR).innerHTML =await toTrendingView();
  // q(CONTAINER_SELECTOR).innerHTML = "<h1>asdfasdfd</h1>";
};
