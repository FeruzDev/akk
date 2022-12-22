import React, {useEffect, useState} from "react";
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
import PersonnelCertification from "./cerComponents/PersonnelCertification";
import {SITE_LANG} from "./tools/Const";
import ProviderChecks from "./cerComponents/ProviderChecks";
import "./components/sidebar.css"
import UnbrakableControl from "./cerComponents/UnbrakableControl";
import TestLaboratories from "./cerComponents/TestLaboratories";
import MedicalLaboratories from "./cerComponents/MedicalLaboratories";
import CalibrationLaboratories from "./cerComponents/CalibrationLaboratories";
import MetrologicalLaboratories from "./cerComponents/MetrologicalLaboratories";
function App() {
  const [locLang, setLocLang] = useState("ru")
  const [path, setPath] = useState("")
        const [open, setOpen] =useState(false)
        const  Close=()=>{
            setOpen(!open)
    };
  useEffect(() => {
    if (localStorage.getItem("language") === "uz") (
        setLocLang("uz")
    );
    else (
        setLocLang("ru")
    );
      setPath(window.location.pathname)
      console.log(window.location.pathname.slice(0, 12))
  }, []);
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                {
                    path === "/" || path === "/add-employee" ?
                      <>
                          <Route exact path="/"  component={Login} />
                          <Route exact path="/add-employee" component={AddEmployee} />
                      </>
                    :
                        <>
                            <button type="button" id="sidebarCollapse" onClick={Close} className="toggle-btn">
                                <img src="/img/menu.png" alt="arrow"/>
                            </button>
                            <div className="wrapper">
                                <nav id="sidebar" className={open ? "active" : ""}>
                                    <ul className="list-unstyled components-lists">
                                        <li> <a href="#!">HOME</a></li>
                                        <li> <a href="#!">HOME</a></li>
                                        <li> <a href="#!">HOME</a></li>
                                        <li> <a href="#!">HOME</a></li>
                                        <li> <a href="#!">HOME</a></li>
                                    </ul>
                                </nav>
                                <div id="content">
                                            <Route exact path="/first-enter" component={FirstEnter} />
                                            <Route exact path="/users/one_id/" component={OneId} />
                                            <Route exact path="/first-enter/second-enter" component={SecondEnter} />
                                            <Route exact path="/404"  component={NotFound} />
                                            <Route exact path="/first-enter/second-enter/management-systems-certification"  component={ManagementSystemsCertification} />
                                            <Route exact path="/first-enter/second-enter/inspection-body"  component={InspectionBody} />
                                            <Route exact path="/first-enter/second-enter/products-and-services"  component={ProductsAndServices} />
                                            <Route exact path="/first-enter/second-enter/personnel-certification"  component={PersonnelCertification} />
                                            <Route exact path="/first-enter/second-enter/provider-checks"  component={ProviderChecks} />
                                            <Route exact path="/first-enter/second-enter/unbrakable-control"  component={UnbrakableControl} />
                                            <Route exact path="/first-enter/second-enter/test-laboratories"  component={TestLaboratories} />
                                            <Route exact path="/first-enter/second-enter/medical-laboratories"  component={MedicalLaboratories} />
                                            <Route exact path="/first-enter/second-enter/calibration-laboratories"  component={CalibrationLaboratories} />
                                            <Route exact path="/first-enter/second-enter/metrological-laboratories"  component={MetrologicalLaboratories} />
                                </div>
                            </div>
                        </>
                }
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
