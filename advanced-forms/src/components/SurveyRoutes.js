import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import InventoryReport from "./InventoryReport";
import Inventory from "./Inventory";
import SampleSurvey from "./SampleSurvey";

const SurveyRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sample">
          <SampleSurvey />
        </Route>
        <Route path="/inventory">
          <Inventory />
        </Route>
        <Route path="/report">
          <InventoryReport />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default SurveyRoutes;
