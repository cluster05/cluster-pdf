import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import PDFTools from "./pages/PdfTools";
import MergePdf from "./pages/PdfTools/MergePdf";
import WordToPdf from "./pages/PdfTools/WordToPdf";
import ExcelToPdf from "./pages/PdfTools/ExcelToPdf";
import PptToPdf from "./pages/PdfTools/PptToPdf";

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
