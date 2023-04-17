export const toUploadView = () => {
  return `
  <div class="container  text-center"> 
      <div id="display-upload">
      <input type="file" role="button" accept="gif" id="gif-file" name="file">
      <button class="upload-file btn"type="submit">Submit</button>
      <div id="msg"></div>
      </div>
  </div>
    `;
};
