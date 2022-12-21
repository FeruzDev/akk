import React from 'react';
import {getText} from "../../locales";

const FileInputs = (props) => {
    return (
        <div className="big-box">
            <h2 className="big-box-title">
                {getText("ser70")}
            </h2>
            <div className="row">
                <div className="my-input-groups col-md-6">
                    <label className="open-sans-medium">{getText("ser71")} <span className="with-star">*</span>
                    </label>
                    <input type="file" ref={props.ref17} onChange={(e) => props.setFile1(e)}/>
                </div>
                <div className="my-input-groups col-md-6">
                    <label className="open-sans-medium">{getText("ser72")} <span className="with-star"
                                                                                 style={{bottom: "0 !important"}}>*</span>
                    </label>
                    <input type="file" ref={props.ref18} onChange={(e) => props.setFile2(e)} accept=".zip,.rar,.7zip"/>
                </div>
                <div className="my-input-groups col-md-6">
                    <label className="open-sans-medium">{getText("ser73")} <span className="with-star">*</span></label>
                    <input type="file" ref={props.ref19} onChange={(e) => props.setFile3(e)} accept=".zip,.rar,.7zip"/>
                </div>
                <div className="my-input-groups col-md-6">
                    <label className="open-sans-medium">{getText("ser74")} <span className="with-star">*</span></label>
                    <input type="file" ref={props.ref20} onChange={(e) => props.setFile4(e)}/>
                </div>
            </div>
        </div>
    );
};

export default FileInputs;
