import { getFavorites } from "../data/favorites.js";
import { toSimpleView } from "./simple-view.js";
import { getGifsByIds } from "../data/api-calls.js";
/**

Generates HTML markup to display a list of favorite GIFs.
@async
@returns {Promise<string>} A string representing the HTML markup of the list of favorite GIFs.
*/
export const toFavoritesView = async () => {
  const favs = getFavorites();
  let response;
  if (favs.length) {
    response = await getGifsByIds(favs);
  }

  return `
  <div id="gif-container">
      <div id="gif-wrapper">
        ${
          response
            ? response.map((gif) => toSimpleView(gif)).join("\n")
            : "<h3>No gifs here!</h3>"
        }
      </div>
  </div>
  `;
};
