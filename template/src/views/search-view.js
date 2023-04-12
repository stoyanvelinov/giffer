import { loadSearchedGifs } from "../requests/request-service.js";
import { toSimpleView } from "./simple-view.js";

export const toSearchView = async (searchTerm) => {
  const searched = await loadSearchedGifs(searchTerm);
  return `
    <div id="gif-container">
      <h1>Searching for "${searchTerm}":</h1>
      <div id="gif-wrapper">
      ${
        searched.map((el) => toSimpleView(el)).join("\n") ||
        "<p>No gifs match your search</p>"
      }
      </div>
    </div>
  `;
};
