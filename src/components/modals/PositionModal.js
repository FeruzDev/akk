import React, {useEffect, useState} from 'react';
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import Select from "react-select";
import {APIT_APTH, AUTH} from "../../tools/Const";
import axios from "axios";
import {getText} from "../../locales";

const PositionModal = (props) => {
    const [getPositionValue, setGetPositionValue] = useState("")

    const getData = () => {
        axios.get(APIT_APTH + "apps/references/position/", AUTH)
            .then(res => {
                props.setGetPosition(res.data)
            })
    }
    const createPosition = () => {
        axios.post(APIT_APTH + "apps/references/position/", {"name": getPositionValue}, AUTH)
            .then(res => {
                props.setPosition(res.data)
                props.setLocationModal(false)
                props.setLocationValue({value: res.data.id, label: res.data.name})
                getData()
            })
    }
    const editPosition = () => {
        axios.put(APIT_APTH + "apps/references/position/update/" + props.locationValue?.value, {"name": getPositionValue}, AUTH)
            .then(res => {
                props.setPosition(res.data)
                props.setLocationModal(false)
                props.setLocationValue({value: res.data.id, label: res.data.name})
                getData()
            })
    }
    useEffect(() => {
        setGetPositionValue(props.locationValue?.label)
    }, [props.locationModal])
    return (<>
            <Modal isOpen={props.locationModal} toggle={() => props.setLocationModal(false)}
                   className="modal-location">
                <ModalHeader toggle={() => props.setLocationModal(false)}>{props.fieldName}</ModalHeader>
                <ModalBody>
                    <div className="row">


                        <div className="col-md-12 my-form-groups  ">
                            <div className="my-input-style">
                                <label htmlFor="dd2" className="open-sans-semibold">{getText("position1")}</label>
                                <div className="row flex-nowrap m-0 position-relative">
                                    <input type="text"
                                           placeholder={getText("position1")}
                                           value={getPositionValue}
                                           onChange={(e) => setGetPositionValue(e.target.value)}
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className="modal-save-btn"
                            onClick={props.locationValue ? editPosition : createPosition}
                    >
                        {props.locationValue ? getText("edit") : getText("save")}
                    </button>
                </ModalFooter>
            </Modal>
        </>);
};

export default PositionModal;