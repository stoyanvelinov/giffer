import { EMPTY_HEART } from "../common/constants.js";

export const toGifDetailsView = (gif) => `
<div class="gif-info">
      <p>${gif.title}</p>
    </div>
  <div class="gif-detailed">
  
    <div class="gif-preview">
      <img src="${gif.images.original.webp}">
    </div>
    <div class="details">
      <div id="gif-details">
      <p> <span><i class="fa fa-calendar"></i></span> ${gif.import_datetime.slice(0, gif.import_datetime.indexOf(' '))}
      </p>
      <p> <span><i class="fa fa-user"></i></span> ${gif.username || 'Anonymous'}
      </p>
      </div>
      <span id="heart">${EMPTY_HEART}</span>

    </div>
  </div>
`;
