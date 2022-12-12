import React from 'react';
import {getText} from "../../locales";

const OneInput = (props) => {
    return (
            <div className={props.myClass}>
                <label className={props?.font}>
                    {
                        props.titleLabel

                    }

                    {
                        props.star
                            ?
                            <span className="with-star">*</span>
                            : ""
                    }
                </label>
                <input type={props?.inputType}  ref={props.refSelect ? props.refSelect : "fake"}    onChange={(e) => props.setState(e.target.value)}/>
            </div>
    );
};

export default OneInput;