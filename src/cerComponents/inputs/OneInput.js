import React from 'react';
import {getText} from "../../locales";

const OneInput = (props) => {
    return (
        <div>
            <div className="my-input-groups col-md-6 pr-20">
                <label className="open-sans-medium">{getText("ser14")}<span
                    className="with-star">*</span></label>
                <input type="text" ref={props.refSelect} onChange={(e) => setFullName(e.target.value)}/>
            </div>
        </div>
    );
};

export default OneInput;