import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {SITE_LANG} from "../tools/Const";
import {getText} from "../locales";

const SecondEnter = () => {
    const [locLang, setLocLang] = useState("ru")

    const changeLang = (lang) => {
        localStorage.setItem(SITE_LANG, lang);
        setLocLang(lang)
    };

    useEffect(() =>{
        if (localStorage.getItem("language") === "uz") (
            setLocLang("uz")
        );
        else (
            setLocLang("ru")
        )
    },[]);
    return (
        <div className="second-enter">

            <div className="navbar-main">
                <div className="container d-flex justify-content-between align-items-center h-100">
                    <div className="logo">
                        <img src="/img/logo12.svg" alt=""/>
                    </div>
                    <div className="lang-btn">
                        <button
                            onClick={() => changeLang("ru")}
                            className={
                                locLang !== "uz"
                                    ? "active"
                                    : ""
                            }
                        >
                            Русский
                        </button>
                        <button
                            onClick={() => changeLang("uz")}
                            className={
                                locLang === "uz" ? "active" : ""
                            }
                        >
                            O'zbek
                        </button>
                    </div>
                </div>
            </div>
            <div className="container second-enter-content">
                <div className="row">
                    <Link to="/first-enter/second-enter/management-systems-certification"
                          className="col-md-12 open-sans-medium">
                        {getText("sc1")}
                    </Link>
                    <Link to="/first-enter/second-enter/products-and-services" className="col-md-12 open-sans-medium">
                        {getText("sc2")}
                    </Link>
                    <Link to="/first-enter/second-enter/personnel-certification" className="col-md-12 open-sans-medium">
                        {getText("sc3")}
                    </Link>
                    <Link to="/first-enter/second-enter/provider-checks" className="col-md-12 open-sans-medium ">
                        {getText("sc4")}
                    </Link>
                    <Link to="/first-enter/second-enter/inspection-body" className="col-md-12 open-sans-medium">
                        {getText("sc5")}
                    </Link>

                    <Link to="/first-enter/second-enter/unbrakable-control" className="col-md-12 open-sans-medium">
                        {getText("sc6")}
                    </Link>
                    <Link to="/first-enter/second-enter/test-laboratories" className="col-md-12 open-sans-medium ">
                        {getText("sc7")}
                    </Link>
                    <Link to="/first-enter/second-enter/medical-laboratories" className="col-md-12 open-sans-medium  ">
                        {getText("sc8")}
                    </Link>
                    <Link to="/first-enter/second-enter/medical-laboratories" className="col-md-12 open-sans-medium ">
                        {getText("sc9")}
                    </Link>
                    <Link to="/first-enter/second-enter/metrological-laboratories" className="col-md-12 open-sans-medium ">
                        {getText("sc10")}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SecondEnter;
