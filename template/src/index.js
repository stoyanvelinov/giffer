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

    // toggle favorite event
    if (e.target.classList.contains("favorite")) {
      toggleFavoriteStatus(e.target.getAttribute("gif-id"));
    }

    // upload gif event
    if (e.target.classList.contains("upload-file")) {
      uploadGif(e);
    }
  });

  // search events
  q("#search--input").addEventListener("input", (e) => {
    renderSearchItems(e.target.value);
  });

  //Open and Close Navigation events
  q(".navbar--close-icon").addEventListener("click", () => {
    q(".nav--open").classList.toggle("hide");
    q(".navbar--container").classList.toggle("hide");
  });

  q(".nav--open-icon").addEventListener("click", () => {
    q(".nav--open").classList.toggle("hide");
    q(".navbar--container").classList.toggle("hide");
  })

  // window.addEventListener("load", function () {
  //   q(".gif").style.backgroundColor = "transparent";
  // });

  loadPage(TRENDING);
});