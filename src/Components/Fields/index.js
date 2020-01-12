import React from "react";
import AppName from "./App-Name";
import ShortName from "./Short-Name";
import ThemeColor from "./Theme-Color";
import BackgroundColor from "./Bg-Color";
import DisplayMode from "./Display-Mode";
import Orientation from "./Orientation";
import AppScope from "./App-Scope";
import StartUrl from "./Start-Url";
export default () => {
  return (
    <div className="col s12 m6">
      <p style={{ fontSize: "1.3rem" }}>
        Web App Manifest is a JSON document that provides application metadata
        for The Progressive Web Apps. Use the form below to generate the JSON
        file and optionally upload an app icon.
      </p>

      <AppName />
      <ShortName />
      <ThemeColor />
      <BackgroundColor />
      <DisplayMode />
      <Orientation />
      <AppScope />
      <StartUrl />
    </div>
  );
};
