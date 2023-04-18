import { EMPTY_HEART } from "../common/constants.js";
import { renderFavoriteStatus } from "../events/helpers.js";

export const toGifDetailsView = (gif) => {
  const selectedVersion = gif.images.original;
  return `
  <div class="gif-info">
      <p>${gif.title}</p>
    </div>
  <div id="gif-detailed">
  
    <div id="gif-preview">
      <img src="${selectedVersion.webp}">
    </div>
    <div id="gif-details">
      <div>
      <p> <span><i class="fa fa-calendar"></i></span> ${gif.import_datetime.slice(0, gif.import_datetime.indexOf(' '))}
      </p>
      <p> <span><i class="fa fa-user"></i></span> ${gif.username || 'Anonymous'}
      </p>
      <p> size: ${selectedVersion.height} X ${selectedVersion.width}
      </p>
      </div>
      <div id="heart">${renderFavoriteStatus(gif.id)}</div>
    </div>
  </div>
`;
}

