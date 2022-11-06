import React from "react";
import {Vitessce} from "vitessce/dist/umd/production/index.min.js";
import { dataConfig } from "./config";
import "vitessce/dist/umd/production/static/css/index.css";
import "./styles.css";

export default function App() {
  const dataView = dataConfig()
  return (
    <div style={{ height: "800px" }}>
      <Vitessce config={dataView} height={800} theme="dark" />
    </div>
  );
}
