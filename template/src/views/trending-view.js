import { getTrendingGifs } from "../data/movies.js";

function toSimpleView(el) {
  return `
  <img src="${el.url}" alt="this slowpoke moves"  width="250" />
  `;
}

export const toTrendingView = () => {
  return `
<div id="about">
  <div class="content">
  ${getTrendingGifs()
    .map((el) => toSimpleView(el))
    .join("\n")}
  </div>
</div>
`;
};
