import React, { useRef, useContext } from "react";
import { store } from "../../store";
import M from "materialize-css";
import { resizeImage, generateManifest, createZip } from "../../utils";

export default () => {
  const pic = useRef();
  const { state } = useContext(store);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const file = pic.current.files[0];
    if (!file) {
      M.toast({ html: "Image required", displayLength: "1100" });
      return;
    }

    M.toast({ html: "Processing..." });

    // Resize images
    const sizes = [
      { width: 72, height: 72 },
      { width: 96, height: 96 },
      { width: 128, height: 128 },
      { width: 144, height: 144 },
      { width: 152, height: 152 },
      { width: 192, height: 192 },
      { width: 384, height: 384 },
      { width: 512, height: 512 },
    ];
    const resizedImages = await resizeImage(file, sizes);

    // Generate manifest
    const manifest = generateManifest(state, resizedImages);

    // Create ZIP
    const zipBlob = await createZip(manifest, resizedImages);

    // Download ZIP
    const url = URL.createObjectURL(zipBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "manifest-icons.zip";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    M.toast({ html: "Download complete!" });
  };

  return (
    <>
      <h5>Generate Icons and Manifest</h5>
      <p>
        The Web App Manifest allows specifying icons of varying sizes. Upload a
        512x512 image for the icon by clicking on the field below and we'll
        generate the remaining sizes.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="file-field input-field">
          <div>
            <button className="btn-large waves-effect" type="submit">
              Generate
              <i className="material-icons left">file_upload</i>
            </button>
            <input ref={pic} type="file" id="pic" required name="pic" />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" />
          </div>
        </div>
      </form>
    </>
  );
};
