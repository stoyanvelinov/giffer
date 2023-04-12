export const toGifDetailsView = (gif) => `
  <div class="gif-detailed">
    <div class="gif-preview">
      <img src="${gif.images.original.webp}">
    </div>
    <div class="gif-info">
      <p>title: ${gif.title}</p>
      
    </div>
  </div>
`;
