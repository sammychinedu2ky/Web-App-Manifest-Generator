import React, { useContext } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { defaultStyle } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { store } from "../../store";
import M from "materialize-css";

function replacer(key, value) {
  if (value.length === 0) {
    return undefined;
  }
  return value;
}
export default () => {
  const { state } = useContext(store);
 
  let obj = JSON.stringify(state, replacer, "  ");
  function copy() {
    let clip = document.createElement("input");
    document.body.appendChild(clip);

    clip.setAttribute("id", "dummy_id");
    document.getElementById("dummy_id").value = obj;
    clip.select();
    document.execCommand("copy");

    document.body.removeChild(clip);

    M.toast({ html: "Copied to Clipboard", displayLength: "1100" });
  }
  return (
    <>
      <h5>manifest.json</h5>
      <button
        style={{ position: "absolute", marginTop: "1rem", right: "1.5rem" }}
        className="waves-effect waves-light btn"
        onClick={copy}
        data-position="top"
      >
        Copy
      </button>

      <div style={{ fontSize: "1.2rem" }}>
        <SyntaxHighlighter language="json" style={defaultStyle}>
          {obj}
        </SyntaxHighlighter>
      </div>
      <div></div>
    </>
  );
};
