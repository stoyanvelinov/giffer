import { renderFavoriteStatus } from "../events/helpers.js";

export function toSimpleView(gif) {
  return `
  <div class="gif-and-above">
  <img src="${gif.images.preview_webp.url}" alt="${
    gif.title
  }" loading="lazy" class="gif gif-detail-btn" gif-id = "${gif.id}"/>
  ${renderFavoriteStatus(gif.id)}
  </div>
    `;
}
// export function toSimpleView(gif) {
//   return `<img src="${gif.images.original.url}" alt="${gif.title}" loading="lazy" class="gif gif-detail-btn" gif-id = "${gif.id}"/>`;
// }