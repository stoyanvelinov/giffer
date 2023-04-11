import { getTrendingGifs } from "../data/movies.js";

export function toSimpleView(el) {
  return `
  <img src="${el.images.downsized.url}" alt="this slowpoke moves" class="gif"  />
  `;
}
//preview.gif 55x
export const toTrendingView = async () => {
  console.log(await getTrendingGifs()+'to trending view');
  const arr = await getTrendingGifs()
  return `
<div id="display-trending">
  <div class="content">
  ${arr
    .map((el) => toSimpleView(el))
    .join("\n")}
  </div>
</div>
`;
};
