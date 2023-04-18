import { EMPTY_HEART, FULL_HEART } from "../common/constants.js";
import {
  addFavorite,
  getFavorites,
  removeFavorite,
} from "../data/favorites.js";
import { q } from "./helpers.js";

/**
 * Toggles the favorite status of a GIF with the given ID.
 * @param {string} gifId - The ID of the GIF to toggle the favorite status of.
 */
export const toggleFavoriteStatus = (gifId) => {
  const favorites = getFavorites();
  const heartSpan = q(`.favorite[gif-id="${gifId}"]`);

  if (favorites.includes(gifId)) {
    removeFavorite(gifId);
    heartSpan.classList.remove("active");
    heartSpan.innerHTML = EMPTY_HEART;
  } else {
    addFavorite(gifId);
    heartSpan.classList.add("active");
    heartSpan.innerHTML = FULL_HEART;
  }
};
