import { getGifsByIds } from "../data/api-calls.js";
import { toSimpleView } from "./simple-view.js";

/**
 * Converts an array of gif IDs into an HTML collection view.
 *
 * @async
 * @function toCollectionView
 * @param {Array<string>} ids - An array of gif IDs to display.
 * @returns {Promise<string>} - A Promise that resolves to the HTML code for the collection view.
 */
export const toCollectionView = async (ids) => {
  const arr = await getGifsByIds(ids);
  return `
  <div id="gif-container">
   <div id="gif-wrapper">
    ${arr
      ? arr.map((el) => toSimpleView(el)).join("\n")
      : "<h3>No gifs here</h3>"
    }
   </div>
  </div>
`;
};
