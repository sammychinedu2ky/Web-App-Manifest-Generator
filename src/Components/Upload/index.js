import React, { useRef, useContext } from "react";
import { store } from "../../store";
import M from "materialize-css";
import Converter from "../../utils";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const uploadFileMutation = gql`
  mutation UploadFile($file: Upload!, $manifest: String) {
    uploadFile(file: $file, manifest: $manifest)
  }
`;

export default () => {
  const [uploadFile, { data }] = useMutation(uploadFileMutation);

  let manifest = useRef();
  let pic = useRef();
  const { state } = useContext(store);

  let obj = JSON.stringify(state, null, "  ");
  console.log(obj);
  if (data) {
    let blob = Converter(data.uploadFile);
    var url = window.URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "filename.zip";
    document.body.appendChild(a);
    a.click();
  }
  const handleSubmit = e => {
    e.preventDefault();
    let {
      files: [file]
    } = pic.current;

    let obj = manifest.current.value;
    if (!file) {
      M.toast({ html: "Image required", displayLength: "1100", margin: 50 });
    } else {
      M.toast({ html: "Uploading" });
      try {
        uploadFile({ variables: { file, manifest: obj } });
        
      } catch (error) {
        console.log(error)
      }
    }
  };

  return (
    <>
      <h5>Generate Icons</h5>
      <p>
        The Web App Manifest allows for specifying icons of varying sizes.
        Upload a 512x512 image for the icon and we'll generate the remaining
        sizes.
      </p>
      <h6>Upload via Graphql</h6>
      <form>
        <div className="file-field input-field">
          <div>
            <button className="waves-effect  btn-large" onClick={handleSubmit}>
              <i className="material-icons left">file_upload</i>Upload
            </button>
            <input
              ref={manifest}
              hidden
              type="text"
              name="manifest"
              value={obj}
            />
            <input ref={pic} type="file" id="pic" name="pic" />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" />
          </div>
        </div>
      </form>
      <h6>Upload via Express</h6>
      <form
        encType="multipart/form-data"
        method="post"
        action="https://manifest-server-express.herokuapp.com/upload"
      >
        <div className="file-field input-field">
          <div>
            <button
              className="btn-large waves-effect "
              type="submit"
              name="action"
            >
              Submit
              <i className="material-icons left">file_upload</i>
            </button>
            <input hidden type="text" name="manifest" value={obj} />
            <input type="file" id="pic" required name="pic" />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" />
          </div>
        </div>
      </form>
    </>
  );
};
