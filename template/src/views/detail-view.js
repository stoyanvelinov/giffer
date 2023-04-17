import { EMPTY_HEART } from "../common/constants.js";

export const toGifDetailsView = (gif) => `
<div class="gif-info">
      <p>${gif.title}</p>
    </div>
  <div id="gif-detailed">
  
    <div id="gif-preview">
      <img src="${gif.images.original.webp}">
    </div>
    <div id="gif-details">
      <div>
      <p> <span><i class="fa fa-calendar"></i></span> ${gif.import_datetime.slice(0, gif.import_datetime.indexOf(' '))}
      </p>
      <p> <span><i class="fa fa-user"></i></span> ${gif.username || 'Anonymous'}
      </p>
      </div>
      <span id="heart">${EMPTY_HEART}</span>
    </div>
  </div>
`;
