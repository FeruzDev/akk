import React, {useEffect, useState} from 'react';
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import Select from "react-select";
import {APIT_APTH, AUTH} from "../../tools/Const";
import axios from "axios";
import {getText} from "../../locales";

const NationModal = (props) => {
    const [getNationValue, setGetNationValue] = useState("")

    const getData = () => {
        axios.get(APIT_APTH + "apps/references/nation/", AUTH)
            .then(res => {
                props.setGetNation(res.data)
            })
    }
    const createNation = () => {
        axios.post(APIT_APTH + "apps/references/nation/", {"name": getNationValue}, AUTH)
            .then(res => {
                props.setNation(res.data)
                props.setLocationModal(false)
                props.setLocationValue({value: res.data.id, label: res.data.name})
                getData()
            })
    }
    const editNation = () => {
        axios.put(APIT_APTH + "apps/references/nation/update/" + props.locationValue?.value, {"name": getNationValue}, AUTH)
            .then(res => {
                props.setNation(res.data)
                props.setLocationModal(false)
                props.setLocationValue({value: res.data.id, label: res.data.name})
                getData()
            })
    }
    useEffect(() => {
        setGetNationValue(props.locationValue?.label)
    }, [props.locationModal])
    return (
        <>
            <Modal isOpen={props.locationModal} toggle={() => props.setLocationModal(false)}
                   className="modal-location">
                <ModalHeader toggle={() => props.setLocationModal(false)}>{props.fieldName}</ModalHeader>
                <ModalBody>
                    <div className="row">


                        <div className="col-md-12 my-form-groups  ">
                            <div className="my-input-style">
                                <label htmlFor="dd2" className="open-sans-semibold">{getText("nation1")}</label>
                                <div className="row flex-nowrap m-0 position-relative">
                                    <input type="text"
                                           placeholder={getText("nation1")}
                                           value={getNationValue}
                                           onChange={(e) => setGetNationValue(e.target.value)}
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className="modal-save-btn"
                            onClick={props.locationValue ? editNation : createNation}
                    >
                        {props.locationValue ? getText("edit") : getText("save")}
                    </button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default NationModal;