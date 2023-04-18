import {
  CONTAINER_SELECTOR,
  FAVORITES,
  TRENDING,
  UPLOAD,
  CREATE,
  COLLECTION,
} from "../common/constants.js";
import { loadSingleGif } from "../requests/request-service.js";
import { toFavoritesView } from "../views/favorites-view.js";
import { toCollectionView } from "../views/collection-view.js";
import { toGifDetailsView } from "../views/detail-view.js";
import { loader, q, setActiveNav } from "./helpers.js";
import { getUploaded } from "../data/upload.js";
import { toTrendingView } from "../views/trending-view.js";
import { toUploadView } from "../views/upload-view.js";
import { getTrendingGifs } from "../data/api-calls.js";
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
/**
 * Renders a single GIF details view into the container.
 * @async
 * @param {string|null} id - The ID of the GIF to load details for.
 * @returns {Promise<void>} - A Promise that resolves once the GIF details view has been rendered.
 */
export const renderGifDetails = async (id = null) => {
  const gif = await loadSingleGif(id);
  q(CONTAINER_SELECTOR).innerHTML = toGifDetailsView(gif);
};

/**
 * Renders the uploaded GIFs collection view.
 * Gets the uploaded GIF IDs from the local storage and renders the collection view using the `toCollectionView` function.
 * @async
 * @returns {Promise<void>} A promise that resolves when the collection view is successfully rendered.
 */
const renderCollection = async () => {
  q(CONTAINER_SELECTOR).innerHTML = await toCollectionView(getUploaded());
  setTimeout(() => q(CONTAINER_SELECTOR).classList.remove("invisible"), 200);
};

/**
Renders the user's favorite gifs into the app's main container
@async
@returns {void}
*/
const renderFavorites = async () => {
  q(CONTAINER_SELECTOR).innerHTML = await toFavoritesView();
  setTimeout(() => q(CONTAINER_SELECTOR).classList.remove("invisible"), 200);
};
/**
 * Renders the trending GIFs section
 * @returns {Promise<void>} Promise that resolves once the trending GIFs are loaded and displayed
 */
const renderTrending = async () => {
  q(CONTAINER_SELECTOR).innerHTML = `${toTrendingView()} ${loader()}`;
  await getTrendingGifs();
  setTimeout(() => q(CONTAINER_SELECTOR).classList.remove("invisible"), 200);
};

/**
Renders the create view for the GIF creator.
@returns {Promise<void>}
*/
const renderCreate = async () => {
  q(CONTAINER_SELECTOR).innerHTML = toCreatorView();
  createGifModule(window, document);
  showVideosButton();
};

/**
Renders the upload view.
*/
const renderUpload = () => {
  q(CONTAINER_SELECTOR).innerHTML = toUploadView();
  q("#gif-file").addEventListener("change", () => {
    q("#msg").innerHTML = `<p></p>`;
  });
};
