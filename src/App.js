import React from "react";
import { Vitessce } from "vitessce/dist/umd/production/index.min.js";
import myViewConfig from "./my-view-config.json";
import "vitessce/dist/umd/production/static/css/index.css";
import "./styles.css";

export default function App() {
  return (
    <div style={{ height: "800px" }}>
      <Vitessce config={myViewConfig} height={800} theme="dark" />
    </div>
  );
}
