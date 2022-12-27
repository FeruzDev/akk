import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {SITE_LANG} from "../tools/Const";
import {getText} from "../locales";

const SecondEnter = () => {
    useEffect(() => {

    }, [localStorage.getItem("language")]);
    return (
        <div className="second-enter">
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
