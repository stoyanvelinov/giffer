import { renderFavoriteStatus } from "../events/helpers.js";
/**
Returns the HTML code for displaying a given GIF object in a simple view.
@param {object} gif - The GIF object to be displayed in the simple view.
@returns {string} - The HTML code for displaying the GIF object in a simple view.
*/
export function toSimpleView(gif) {
  return `
  <div class="gif-and-above">
  <img src="${gif.images.fixed_height.url}" alt="${gif.title
    }" loading="lazy" class="gif" gif-id = "${gif.id}"/>
  ${renderFavoriteStatus(gif.id)}
  </div>
    `;
}
