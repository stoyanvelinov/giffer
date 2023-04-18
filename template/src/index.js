import { HOME, TRENDING } from "./common/constants.js";
import { toggleFavoriteStatus } from "./events/favorites-events.js";
import { q } from "./events/helpers.js";
import { loadPage, renderGifDetails } from "./events/navigation-events.js";
import { renderSearchItems } from "./events/search-events.js";
import { uploadGif } from "./data/api-calls.js";
import { getTrendingGifs } from "./data/api-calls.js";
import { updateInput } from "./events/search-events.js"

document.addEventListener("DOMContentLoaded", () => {
  // add global listener
  let isTrendingPage = false;
  document.addEventListener("click", async (e) => {

    // nav events
    if (e.target.classList.contains("nav-link")) {
      isTrendingPage = (e.target.getAttribute("data-page") === TRENDING);
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
  //search event
  q("#search--input").addEventListener("input", (e) => {
    updateInput(e.target.value);
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


  //scroll event inProgress
  let isFetchingTrending = false;
  window.addEventListener('scroll', async () => {
    if (isTrendingPage) {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 5) {
        if (!isFetchingTrending) {
          isFetchingTrending = true;
          await getTrendingGifs();
          isFetchingTrending = false;
        }
      }
    }

  });


  loadPage(TRENDING);
});