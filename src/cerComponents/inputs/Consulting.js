import React from 'react';
import {getText} from "../../locales";

const Consulting = (props) => {
    return (
        <div className="big-box">
            <h2 className="big-box-title">
                {
                    props.title
                }
            </h2>

            <div className="toggle">
                <label className="open-sans-medium">  {
                    props.title2
                }
                    <div>
                        <button onClick={() => props.setToogle8(true)}
                                className={props.toogle8 ? "open-sans-medium active" : "open-sans-medium"}>{getText("ser76")}
                        </button>
                        <button onClick={() => props.setToogle8(false)}
                                className={props.toogle8 ? "open-sans-medium " : "open-sans-medium active"}>{getText("ser77")}
                        </button>
                    </div>
                </label>
            </div>
            {
                props.toogle8
                    ?
                    <div className="many-checks">
                        <p className="open-sans-medium">
                            {
                                props.title3
                            }
                        </p>

                        <div className="row">
                            <div className="my-input-groups col-md-12">
                                <label className="open-sans-medium"> {
                                    props.title4
                                }</label>
                                <input type="text" onChange={(e) => props.setconsulting_info(e.target.value)}/>
                            </div>

                        </div>
                    </div>
                    :
                    ""
            }
        </div>
    );
};

export default Consulting;