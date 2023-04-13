import { getGifsByIds } from "../data/api-calls.js";
import { toSimpleView } from "./simple-view.js";
export const toCollectionView = async (ids) => {
  const str = ids.join(",");
  const arr = await getGifsByIds(str);
  return `
  <div>
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
