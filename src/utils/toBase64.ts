export const toBase64 = (files: Blob[]) => {
  Array.from(files).forEach((file) => {
    var render = new FileReader();
    render.readAsDataURL(file);
    render.onload = function () {
      var b64 = render.result;
      return b64;
    };
  });
};
