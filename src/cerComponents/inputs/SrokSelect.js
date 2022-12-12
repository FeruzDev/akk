import React from 'react';
import {getText} from "../../locales";

const SrokSelect = (props) => {
    return (
        <div className="toggle-select">
            <label className="open-sans-medium">
                {props.title}

                <div>
                    <button onClick={() => props.setSrok(0)}
                            className={props.srok === 0 ? "open-sans-medium active" : "open-sans-medium"}>
                        {getText("ser56")}

                    </button>
                    <button onClick={() => props.setSrok(1)}
                            className={props.srok === 1 ? "open-sans-medium active" : "open-sans-medium"}>
                        {getText("ser57")}

                    </button>
                    <button onClick={() => props.setSrok(2)}
                            className={props.srok === 2 ? "open-sans-medium active" : "open-sans-medium"}>
                        {getText("ser58")}
                    </button>
                </div>
            </label>
        </div>
    );
};

export default SrokSelect;