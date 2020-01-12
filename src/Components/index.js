import React from "react";
import Nav from "./Nav";
import Fields from "./Fields";
import Section from "./Section";
export default () => (
  <div>
    <Nav />
    <div className="row">
      <Fields />
      <Section />
      <div className="row">
        <a
          href="https://github.com/sammychinedu2ky/Web-App-Manifest-Generator"
          className="waves-effect waves-light center-align col s12"
        >
          CLICK TO FORK ON GITHUB
        </a>
      </div>
    </div>
  </div>
);
