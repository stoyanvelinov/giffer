import { HOME, TRENDING } from "./common/constants.js";
import { toggleFavoriteStatus } from "./events/favorites-events.js";
import { q } from "./events/helpers.js";
import { loadPage, renderGifDetails } from "./events/navigation-events.js";
import { renderSearchItems } from "./events/search-events.js";
import { uploadGif } from "./data/api-calls.js";

document.addEventListener("DOMContentLoaded", () => {
  // add global listener
  document.addEventListener("click", async (e) => {
    // nav events
    if (e.target.classList.contains("nav-link")) {
      await loadPage(e.target.getAttribute("data-page"));
    }

    if (e.target.classList.contains("gif-detail-btn")) {
      renderGifDetails(e.target.getAttribute("gif-id"));
    }

    // toggle favorite event
    if (e.target.classList.contains("favorite")) {
      toggleFavoriteStatus(e.target.getAttribute("gif-id"));
    }

    // upload gif event
    if (e.target.classList.contains("upload-file")) {
      uploadGif(e);
    }

    if (e.target.classList.contains("upload-gif-file")) {
      uploadGif(e);
    }
  });

  // search events
  q("input#search").addEventListener("input", (e) => {
    renderSearchItems(e.target.value);
  });

  // window.addEventListener("load", function () {
  //   q(".gif").style.backgroundColor = "transparent";
  // });

  loadPage(TRENDING);
});
