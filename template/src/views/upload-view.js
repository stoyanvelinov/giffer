export const toUploadView = () => {
  return `
  <div id="upload-container">
    <div id="display-upload">
      <input type="file" accept="gif" id="gif-file" name="file">
      <button class="upload-btn"type="submit">Submit</button>
      <div id="msg"></div>
    </div>
  </div>
  `;
};