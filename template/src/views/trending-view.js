
import { getTrendingGifs } from "../data/api-calls.js";
import { toSimpleView } from "./simple-view.js";
import { q } from "../events/helpers.js";
import { CONTAINER_SELECTOR } from "../common/constants.js";
/**
 * Returns the HTML code for the trending view page.
 * @returns {string} The HTML code for the trending view page.
 */
export const toTrendingView = () => {
  q(CONTAINER_SELECTOR).classList.add("invisible");
  return `
    <div id="gif-container">
      <div id="gif-wrapper">
      </div>
    </div>
  `;
};