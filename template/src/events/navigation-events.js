import {
  // CATEGORIES,
  CONTAINER_SELECTOR,
  FAVORITES,
  HOME,
  TRENDING,
  UPLOAD,
} from "../common/constants.js";
import { loadSingleGif } from "../requests/request-service.js";
import { toFavoritesView } from "../views/favorites-view.js";
import { toHomeView } from "../views/home-view.js";
import { toGifDetailsView } from "../views/detail-view.js";
import { q, setActiveNav } from "./helpers.js";
import { getFavorites } from "../data/favorites.js";
import { toTrendingView } from "../views/trending-view.js";
import { toUploadView } from "../views/upload-view.js";
import { uploadGif } from "../data/api-calls.js";

// public API
export const loadPage = (page = "") => {
  switch (page) {
    case HOME:
      setActiveNav(HOME);
      return renderHome();

    case FAVORITES:
      setActiveNav(FAVORITES);
      return renderFavorites();

    case TRENDING:
      setActiveNav(TRENDING);
      return renderTrending();

    case UPLOAD:
      setActiveNav(UPLOAD);
      return renderUpload();

    /* if the app supports error login, use default to log mapping errors */
    default:
      return null;
  }
};

export const renderGifDetails = async (id = null) => {
  const gif = await loadSingleGif(id);
  console.log(gif);

  q(CONTAINER_SELECTOR).innerHTML = toGifDetailsView(gif);
};

const renderHome = () => {
  q(CONTAINER_SELECTOR).innerHTML = toHomeView();
};

const renderFavorites = async () => {
  // const favorites = getFavorites();
  // const gifs = favorites.map(async (id) => await loadSingleGif(id));

  q(CONTAINER_SELECTOR).innerHTML = await toFavoritesView();
};

const renderTrending = async () => {
  q(CONTAINER_SELECTOR).innerHTML = await toTrendingView();
};

const renderUpload = () => {
  q(CONTAINER_SELECTOR).innerHTML = toUploadView();
  q("#gif-file").addEventListener("change", (e) => {
    console.log(e + "kuvto i dae");
    q("#msg").innerHTML = `<p></p>`;
  });
};
