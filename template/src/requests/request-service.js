import { getSearchedGifs, getGifById } from "../data/api-calls.js";
/**

Loads a single GIF object by its ID.
@async
@param {string} id - The ID of the GIF to load.
@returns {Promise<Object|string>} - A promise that resolves to the GIF object if successful, or an error message if failed.
*/
export const loadSingleGif = async (id) => {
  try {
    const gif = await getGifById(id);
    return gif.data;
  } catch (err) {
    return err.message;
  }
};
/**
 * Load the searched gifs based on the given search term.
 * @async
 * @param {string} [searchTerm=""] - The search term for the gif search.
 * @returns {Promise<Array<Object>|string>} - A promise that resolves to an array of gif objects or an error message string.
 */
export const loadSearchedGifs = async (searchTerm = "") => {
  try {
    const resultGifs = await getSearchedGifs(searchTerm);
    return resultGifs;
  } catch (err) {
    return err.message;
  }
};
