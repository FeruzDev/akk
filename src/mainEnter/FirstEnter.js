import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import {getText} from "../locales";

const FirstEnter = () => {
  useEffect(()=>{

  }, [])
  return (
    <div className="first-enter">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Link to="/first-enter/second-enter" className="akk-btn open-sans-medium p-4">
              {getText("fe1")}
            </Link>
            <a className="akk-btn open-sans-medium p-4">{getText("fe2")}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstEnter;
