import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import PDFTools from "./pages/PdfTools";
import MergePdf from "./pages/PdfTools/MergePdf";
import WordToPdf from "./pages/PdfTools/WordToPdf";
import ExcelToPdf from "./pages/PdfTools/ExcelToPdf";
import PptToPdf from "./pages/PdfTools/PptToPdf";
import ImageToPdf from "./pages/PdfTools/ImageToPdf";
import SplitPdf from './pages/PdfTools/SplitPdf';
import ViewPdf from "./pages/ViewPdf";

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
        <Route exact path="/split-pdf">
          <SplitPdf />
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
        <Route exact path="/image-to-pdf">
          <ImageToPdf />
        </Route>
        <Route exact path="/view-pdf/:pdfId">
          <ViewPdf />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
