export function toSimpleView(gif) {
  return `
    <img src="${gif.images.downsized.url}" alt="${gif.title}" loading="lazy" class="gif gif-detail-btn" gif-id = "${gif.id}"/>
    `;
}
