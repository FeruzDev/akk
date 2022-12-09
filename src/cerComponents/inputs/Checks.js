import React from 'react';
import {getText} from "../../locales";

const Checks = (props) => {
    return (
        <div className="big-box">
            <h3 className="big-box-title open-sans-medium">
                {getText("ser2")}
            </h3>
            <div className="check-list">
                <input type="checkbox"
                       disabled={props.prAkk === true || props.rasAkk === true || props.sokAkk === true || props.aktAkk === true || props.perAkk === true ? true : false}
                       onChange={() => props.setAkk(!props.akk)} id="cur1"/>
                <label htmlFor="cur1" className="open-sans-medium">{getText("ser3")}</label>
            </div>
            <div className="check-list">
                <input type="checkbox"
                       disabled={props.akk === true || props.rasAkk === true || props.sokAkk === true || props.aktAkk === true ? true : false}
                       onChange={() => props.setPrAkk(!props.prAkk)} id="cur2"/>
                <label htmlFor="cur2" className="open-sans-medium">{getText("ser4")}</label>
            </div>
            <div className="check-list">
                <input type="checkbox"
                       disabled={props.akk === true || props.prAkk === true || props.perAkk === true ? true : false}
                       onChange={() => props.setRasAkk(!props.rasAkk)} id="cur3"/>
                <label htmlFor="cur3" className="open-sans-medium">{getText("ser5")}</label>
            </div>
            <div className="check-list">
                <input type="checkbox"
                       disabled={props.akk === true || props.prAkk === true || props.perAkk === true ? true : false}
                       onChange={() => props.setAktAkk(!props.aktAkk)} id="cur4"/>
                <label htmlFor="cur4" className="open-sans-medium">{getText("ser6")}</label>
            </div>
            <div className="check-list">
                <input type="checkbox"
                       disabled={props.akk === true || props.prAkk === true || props.perAkk === true ? true : false}
                       onChange={() => props.setSokAkk(!props.sokAkk)} id="cur5"/>
                <label htmlFor="cur5" className="open-sans-medium">{getText("ser7")} </label>
            </div>
            <div className="check-list d-flex">
                <input type="checkbox"
                       disabled={props.akk === true || props.rasAkk === true || props.sokAkk === true || props.aktAkk === true ? true : false}
                       onChange={() => props.setPerAkk(!props.perAkk)} id="cur6"/>
                <label htmlFor="cur6" className="open-sans-medium">{getText("ser8")} </label>
            </div>
        </div>
    );
};

export default Checks;