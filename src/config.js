import {
  VitessceConfig,
  DataType as dt,
  FileType as ft,
  Component as cm,
  CoordinationType as ct,
  hconcat,
  vconcat,
} from "vitessce/dist/umd/production/index.min.js";
export const dataConfig = () => {
  // Instantiate a view config object.
  const vc = new VitessceConfig(
    "1.0.9",
    "My example config",
    "This demonstrates the JavaScript API"
  );
  // Add a dataset and its files.
  const baseUrl =
    "https://s3.amazonaws.com/vitessce-data/0.0.31/master_release/dries";
  const dataset = vc
    .addDataset("Dries")
    .addFile(baseUrl + "/dries.cells.json", dt.CELLS, ft.CELLS_JSON)
    .addFile(
      baseUrl + "/dries.cell-sets.json",
      dt.CELL_SETS,
      ft.CELL_SETS_JSON
    );
  // Add components.
  // Use mapping: "UMAP" so that cells are mapped to the UMAP positions from the JSON file.
  const umap = vc.addView(dataset, cm.SCATTERPLOT, { mapping: "UMAP" });
  // Use mapping: "t-SNE" so that cells are mapped to the t-SNE positions from the JSON file.
  const tsne = vc.addView(dataset, cm.SCATTERPLOT, { mapping: "t-SNE" });
  // Add the cell sets controller component.
  const cellSetsManager = vc.addView(dataset, cm.CELL_SETS);
  // Add the cell set sizes bar plot component.
  const cellSetSizesPlot = vc.addView(dataset, cm.CELL_SET_SIZES);
  // Link the zoom levels of the two scatterplots.
  vc.linkViews([umap, tsne], [ct.EMBEDDING_ZOOM], [2.5]);
  // Try un-commenting the line below to link center points of the two scatterplots!
  //vc.linkViews([umap, tsne], [ct.EMBEDDING_TARGET_X, ct.EMBEDDING_TARGET_Y], [0, 0]);
  vc.layout(
    vconcat(hconcat(tsne, umap), hconcat(cellSetsManager, cellSetSizesPlot))
  );

  // Return the view config as JSON.
  return vc.toJSON();
};
