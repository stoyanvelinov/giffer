import { toMovieSimple } from './movie-views.js';
import { getSearchedGifs } from '../data/movies.js';
import {toSimpleView} from './trending-view.js'
export const toSearchView = async (searchTerm) => {
  const searched = await getSearchedGifs(searchTerm);
  console.log(searched+'searched');
  return `
<div id="movies">
  <h1>Searching for "${searchTerm}":</h1>
  <div class="search">
    ${searched
      .map((el) => toSimpleView(el))
      .join("\n")|| '<p>No gifs match your search</p>'}
  </div>
</div>
`;
}