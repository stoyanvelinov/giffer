import { EMPTY_HEART, FULL_HEART } from "../common/constants.js";
import {
  addFavorite,
  getFavorites,
  removeFavorite,
} from "../data/favorites.js";
import { q, renderFavoriteStatus } from "./helpers.js";

// export const toggleFavoriteStatus = (gifId) => {
//   const favorites = getFavorites();

//   if (favorites.includes(gifId)) {
//     removeFavorite(gifId);
//   } else {
//     addFavorite(gifId);
//   }

//   q(`span[data-gif-id="${gifId}"]`).innerHTML = renderFavoriteStatus(movieId);
// };

export const toggleFavoriteStatus = (gifId) => {
  const favorites = getFavorites();
  // const heartSpan = q(`span[gif-id="${gifId}"]`);
  const heartSpan = q(`.favorite[gif-id="${gifId}"]`);
  // console.log(heartSpan, gifId);
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
