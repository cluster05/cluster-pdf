import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Merge from "./pages/PdfTools/Merge";
import Split from "./pages/PdfTools/Split";
import ViewPdf from "./pages/ViewPdf/ViewPdf";
import Compress from "./pages/PdfTools/Compress";
import ViewImages from "./pages/ViewImage/ViewImages";
import Convert from "./pages/PdfTools/Convert";
import PDFTools from "./pages/PdfTools";
import Analytics from "./pages/Analytics/Analytics";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/pdf-tools">
          <PDFTools />
        </Route>
        <Route
          exact
          path={[
            "/pdf-to-word",
            "/pdf-to-excel",
            "/pdf-to-ppt",
            "/pdf-to-image",
            "/word-to-pdf",
            "/excel-to-pdf",
            "/ppt-to-pdf",
            "/image-to-pdf",
          ]}
        >
          <Convert />
        </Route>
        <Route exact path="/merge-pdf">
          <Merge />
        </Route>
        <Route exact path="/split-pdf">
          <Split />
        </Route>
        <Route exact path="/compress-pdf">
          <Compress />
        </Route>
        <Route exact path="/view-pdf">
          <ViewPdf />
        </Route>
        <Route exact path="/view-images">
          <ViewImages />
        </Route>
        <Route exact path="/analytics">
          <Analytics />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
