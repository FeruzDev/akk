import React from 'react';

const MyInput = (props) => {
    return (
        <div className="my-input">
            {/*<label htmlFor={props.id}>{props.label}</label>*/}
            {/*<input id={props.id} type="text"/>*/}
            <div className="my-input-style">
                <label htmlFor="dd2" className="open-sans-semibold">Аккаунт <span className="with-star">*</span></label>
                <div className="row flex-nowrap m-0">
                    <input type="text"/>
                </div>
            </div>
        </div>
    );
};

export default MyInput;