import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
  } from "react-router-dom";
  import Home from "./pages/Home";
  import PDFTools from "./pages/PDFTools"

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/pdf-tools">
                    <PDFTools/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
