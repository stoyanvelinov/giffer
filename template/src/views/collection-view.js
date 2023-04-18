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
   <h1>My Collection</h1>
   <div id="gif-wrapper">
    <div class="content">
    ${arr.map((el) => toSimpleView(el)).join("\n") ||
    "<p>You have not uploaded any gifs yet :(</p>"}
   </div>
 </div>
</div>
  
`;

}
