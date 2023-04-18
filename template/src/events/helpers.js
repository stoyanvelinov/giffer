import { EMPTY_HEART, FULL_HEART } from "../common/constants.js";
import { getFavorites } from "../data/favorites.js";


export const q = (selector) => document.querySelector(selector);

export const qs = (selector) => document.querySelectorAll(selector);

export const setActiveNav = (page) => {
  const navs = qs("a.nav-link");

  Array.from(navs).forEach((element) =>
    element.getAttribute("data-page") === page
      ? element.classList.add("current")
      : element.classList.remove("current")
  );
};
/**
Renders the favorite status of a GIF based on whether it's included in the favorites list or not.
@param {string} gifId - The ID of the GIF to check the favorite status for.
@returns {string} - HTML string representing the favorite status of the GIF.
*/
export const renderFavoriteStatus = (gifId) => {
  const favorites = getFavorites();

  return favorites.includes(gifId)
    ? `<span class="favorite active" gif-id="${gifId}">${FULL_HEART}</span>`
    : `<span class="favorite" gif-id="${gifId}">${EMPTY_HEART}</span>`;
};
/**
 * @returns {string} The HTML code for the loader element.
 */
export const loader = () => {
  return `
  <div id="loader-container">
    <div id="loader">
    </div>
  </div>`;
}