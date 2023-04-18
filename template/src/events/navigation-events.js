import {
  // CATEGORIES,
  CONTAINER_SELECTOR,
  FAVORITES,
  HOME,
  TRENDING,
  UPLOAD,
  CREATE,
  COLLECTION,
} from "../common/constants.js";
import { loadSingleGif } from "../requests/request-service.js";
import { toFavoritesView } from "../views/favorites-view.js";
import { toCollectionView } from "../views/collection-view.js";
import { toGifDetailsView } from "../views/detail-view.js";
import { q, setActiveNav } from "./helpers.js";
import { getUploaded } from "../data/upload.js";
import { toTrendingView } from "../views/trending-view.js";
import { toUploadView } from "../views/upload-view.js";
import { toCreatorView } from "../views/creator-view.js";
import { createGifModule } from "../data/creator/creator.js";
import { showVideosButton } from "./creator-events.js";

// public API
export const loadPage = (page = "") => {
  switch (page) {
    case COLLECTION:
      setActiveNav(COLLECTION);
      return renderCollection();

    case FAVORITES:
      setActiveNav(FAVORITES);
      return renderFavorites();

    case TRENDING:
      setActiveNav(TRENDING);
      return renderTrending();

    case UPLOAD:
      setActiveNav(UPLOAD);
      return renderUpload();

    case CREATE:
      setActiveNav(CREATE);
      return renderCreate();

    default:
      return null;
  }
};

export const renderGifDetails = async (id = null) => {
  const gif = await loadSingleGif(id);
  console.log(gif);

  q(CONTAINER_SELECTOR).innerHTML = toGifDetailsView(gif);
};

const renderCollection = async () => {
  const ids = getUploaded();
  q(CONTAINER_SELECTOR).innerHTML = await toCollectionView(ids);
};

const renderFavorites = async () => {

  q(CONTAINER_SELECTOR).innerHTML = await toFavoritesView();
};

const renderTrending = async () => {
  q(CONTAINER_SELECTOR).innerHTML = await toTrendingView();
};

const renderCreate = async () => {
  q(CONTAINER_SELECTOR).innerHTML = toCreatorView();
  createGifModule(window, document);
  showVideosButton();
};

const renderUpload = () => {
  q(CONTAINER_SELECTOR).innerHTML = toUploadView();
  q("#gif-file").addEventListener("change", (e) => {
    q("#msg").innerHTML = `<p></p>`;
  });
};
