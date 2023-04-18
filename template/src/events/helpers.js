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

export const renderFavoriteStatus = (gifId) => {
  const favorites = getFavorites();

  return favorites.includes(gifId)
    ? `<span class="favorite active" gif-id="${gifId}">${FULL_HEART}</span>`
    : `<span class="favorite" gif-id="${gifId}">${EMPTY_HEART}</span>`;
};

export const loader = () => {
  return `
  <div id="loader-container">
    <div id="loader">
    </div>
  </div>`;
}