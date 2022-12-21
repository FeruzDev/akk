import React from 'react';
import {getText} from "../../locales";

const RegNumber = (props) => {
    return (
        <div className="big-box">
            <h2 className="big-box-title">
                {getText("ser65")}
            </h2>
            <div className="row">
                <div className="my-input-groups col-md-6">
                    <label className="open-sans-medium">{getText("ser66")}</label>
                    <input type="text" onChange={(e) => props.setregistration_number(e.target.value)}/>
                </div>
                <div className="my-input-groups col-md-6">
                    <label className="open-sans-medium">{getText("ser67")}</label>
                    <div className="row d-flex">
                        <div className="date-field col-md-6  d-flex align-items-center">
                            <label className="open-sans-medium">{getText("ser68")}</label>
                            <input type="date"
                                   onChange={(e) =>  props.setcertificate_validity_period_from(e.target.value)}/>
                        </div>
                        <div className="date-field col-md-6 d-flex align-items-center">
                            <label className="open-sans-medium">{getText("ser69")} </label>
                            <input type="date"
                                   onChange={(e) =>  props.setcertificate_validity_period_to(e.target.value)}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegNumber;
