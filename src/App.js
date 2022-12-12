import React from "react";
import Login from "./components/Login";
import AddEmployee from "./components/AddEmployee";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import OneId from "./components/OneID";
import FirstEnter from "./mainEnter/FirstEnter";
import SecondEnter from "./mainEnter/SecondEnter";
import ManagementSystemsCertification from "./cerComponents/ManagementSystemsCertification";
import PrivateRoute from "./components/PrivateRoute";
import NotFound from "./components/NotFound";
import InspectionBody from "./cerComponents/InspectionBody";
import ProductsAndServices from "./cerComponents/ProductsAndServices";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/"  component={Login} />
          <Route exact path="/users/one_id/" component={OneId} />
          <Route exact path="/add-employee" component={AddEmployee} />
          <Route exact path="/first-enter" component={FirstEnter} />
          <Route exact path="/first-enter/second-enter" component={SecondEnter} />
          <Route exact path="/404"  component={NotFound} />
          <Route exact path="/first-enter/second-enter/management-systems-certification"  component={ManagementSystemsCertification} />
          <Route exact path="/first-enter/second-enter/inspection-body"  component={InspectionBody} />
          <Route exact path="/first-enter/second-enter/products-and-services"  component={ProductsAndServices} />

          {/*<Route path"/https://id.egov.uz/?client_id=e_akkred_uz&token_id=808c8a7a-ad7b-45f9-8e23-73d6e1538ff2&method=IDPW" exact component={OneId}/>*/}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
