
import { getTrendingGifs } from "../data/api-calls.js";
import { toSimpleView } from "./simple-view.js";
/**
 * Returns the HTML code for the trending view page.
 * @returns {string} The HTML code for the trending view page.
 */
export const toTrendingView = () => {
  return `
    <div id="gif-container">
      <div id="gif-wrapper">
      </div>
    </div>
  `;
};