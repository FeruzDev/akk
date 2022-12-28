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
import ProviderChecks from "./cerComponents/ProviderChecks";
import UnbrakableControl from "./cerComponents/UnbrakableControl";
import TestLaboratories from "./cerComponents/TestLaboratories";
import MedicalLaboratories from "./cerComponents/MedicalLaboratories";
import CalibrationLaboratories from "./cerComponents/CalibrationLaboratories";
import MetrologicalLaboratories from "./cerComponents/MetrologicalLaboratories";
import SideBar from "./components/SideBar";
import NavbarMain from "./components/NavbarMain";
import Test from "./components/Test";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
function App() {
  const [locLang, setLocLang] = useState("ru")
  const [path, setPath] = useState("")
        const [open, setOpen] =useState(true)
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
                                <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24"
                                     aria-hidden="true">
                                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                                </svg>
                            </button>
                            <div className="wrapper">

                                <NavbarMain/>
                                {/*<Test/>*/}
                                <SideBar open={open} />
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
