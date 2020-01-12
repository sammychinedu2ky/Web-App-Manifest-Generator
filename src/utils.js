function base64FileToBlob(str) {
  var fileContent = atob(str);

  var view = new Uint8Array(fileContent.length);

  for (var n = 0; n < fileContent.length; n++) {
    view[n] = fileContent.charCodeAt(n);
  }

  var blob = new Blob([view], { type: "application/zip" });

  return blob;
}
export default base64FileToBlob;
