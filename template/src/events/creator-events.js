import { q } from "./helpers.js";

export function showVideosButton(){
    const select = document.getElementById('GIFSource');
    const inputContainer = document.getElementById('input-container');
    const input = document.getElementById('input');
    inputContainer.style.display = "none";

    select.addEventListener('change', () => {
      if (select.value === 'video' || select.value === 'images') {
        inputContainer.style.display = 'block';
      } else {
        inputContainer.style.display = 'none';
      }
    });
}

// export function showUploadButton(){
//     const select = document.getElementById('GIFSource');
//     const inputContainer = document.getElementById('input-container');
//     const input = document.getElementById('input');
//     // console.log(inputContainer);
//     inputContainer.style.display = "none";
    
//     select.addEventListener('change', () => {
//       if (select.value === 'video' || select.value === 'images') {
//         inputContainer.style.display = 'block';
//       } else {
//         inputContainer.style.display = 'none';
//       }
//     });
// }