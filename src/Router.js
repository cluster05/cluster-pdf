import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import PDFTools from "./pages/PDFTools";
import MergePdf from "./pages/PDFTools/MergePdf";
import WordToPdf from "./pages/PDFTools/WordToPdf";
import ExcelToPdf from "./pages/PDFTools/ExcelToPdf";
import PptToPdf from "./pages/PDFTools/PptToPdf";

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
        <Route exact path="/merge-pdf">
          <MergePdf />
        </Route>
        <Route exact path="/word-to-pdf">
          <WordToPdf />
        </Route>
        <Route exact path="/excel-to-pdf">
          <ExcelToPdf />
        </Route>
        <Route exact path="/ppt-to-pdf">
          <PptToPdf />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
