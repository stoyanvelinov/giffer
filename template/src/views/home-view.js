import { getTrendingGifs } from "../data/movies.js";
export const toHomeView = () => `
<div id="home">
  <h1>Mov(e)ster</h1>
  <div class="content">
    <p>Simple movie database app. You can:</p>
    <ul>
      <li>Browse categories</li>
      <li>Browse movies</li>
      ${getTrendingGifs()}
      <li>Add and remove movies from favorites</li>
      <li>Search for movies by title</li>
    </ul>
  </div>
</div>
`;
