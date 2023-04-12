export function toSimpleView(gif) {
  return `
    <img src="${gif.images.preview_webp.url}" alt="${gif.title}" loading="lazy" class="gif gif-detail-btn" gif-id = "${gif.id}"/>
    `;
}

