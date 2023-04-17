// import { getTrendingGifs } from "../data/api-calls.js";
// import { toSimpleView } from "./simple-view.js";

// export const toTrendingView = async () => {
//   const arr = await getTrendingGifs();
//   return `
//     <div id="gif-container">
//       <div id="gif-wrapper">
//         ${arr.map((gif) => toSimpleView(gif)).join("\n")}
//       </div>
//     </div>
//   `;
// };

import { getTrendingGifs } from "../data/api-calls.js";
import { toSimpleView } from "./simple-view.js";

export const toTrendingView = () => {
  return `
    <div id="gif-container">
      <div id="gif-wrapper">
       
      </div>
    </div>
  `;
};