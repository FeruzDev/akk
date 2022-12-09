import React from 'react';
import Select from "react-select";

const MySelect = (props) => {
    return (
        <div className="col-md-4 my-form-groups   ">
            <div className="my-select-style">
                <label htmlFor="dd2" className="open-sans-semibold">{props.selectName}
                    {
                        props.required
                        ?
                        <span className="with-star">*</span>
                        :
                        ""
                    }
                </label>
                <div className="row flex-nowrap m-0 position-relative  ">
                    <Select options={props.data?.map(item => {
                        return {value: item.id,  label: item.full_name}
                    })}
                            isClearable
                            onChange={(e) => props.setData(e.value)}
                            placeholder={props.selectName}
                    />
                </div>
            </div>
        </div>
    );
};

export default MySelect;