import { getGifsByIds } from "../data/api-calls.js";
import { getUploaded } from "../data/upload.js";
import { toSimpleView } from "./simple-view.js";
import { q } from "../events/helpers.js";
import { CONTAINER_SELECTOR } from "../common/constants.js";

/**
 * Converts an array of gif IDs into an HTML collection view.
 *
 * @async
 * @function toCollectionView
 * @param {Array<string>} ids - An array of gif IDs to display.
 * @returns {Promise<string>} - A Promise that resolves to the HTML code for the collection view.
 */
export const toCollectionView = async () => {
  q(CONTAINER_SELECTOR).classList.add("invisible");
  const ids = getUploaded();
  let arr;
  if (ids.length > 0) {
    arr = await getGifsByIds(ids);
  }

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
