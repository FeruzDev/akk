import React, {useState} from 'react';
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {API_APTH, AUTH} from "../../tools/Const";
import axios from "axios";
import {getText} from "../../locales";

const ConfilictModal = (props) => {
    const [getPositionValue, setGetPositionValue] = useState("")
    const [getPositionValueSecond, setGetPositionValueSecond] = useState("")

    const getData = () => {
        axios.get(API_APTH + "apps/references/conflict_of_interest/", AUTH)
            .then(res => {
                props.setGetPosition(res.data)
            })
    }
    const createPosition = () => {
        axios.post(API_APTH + "apps/references/conflict_of_interest/", {
            "name": getPositionValue,
            "reason": getPositionValueSecond
        }, AUTH)
            .then(res => {
                props.setPosition(res.data)
                props.setLocationModal(false)
                getData()
            })
    }
    return (
        <>
            <Modal isOpen={props.locationModal} toggle={() => props.setLocationModal(false)}
                   className="modal-location">
                <ModalHeader toggle={() => props.setLocationModal(false)}>{props.fieldName}</ModalHeader>
                <ModalBody>
                    <div className="row">


                        <div className="col-md-12 my-form-groups  ">
                            <div className="my-input-style">
                                <label htmlFor="dd2" className="open-sans-semibold">{getText("ooc")}</label>
                                <div className="row flex-nowrap m-0 position-relative">
                                    <input type="text"
                                           placeholder={getText("ooc")}
                                           onChange={(e) => setGetPositionValue(e.target.value)}
                                    />

                                </div>
                            </div>
                            <div className="my-input-style mt-3">
                                <label htmlFor="dd2" className="open-sans-semibold">{getText("prichina")}</label>
                                <div className="row flex-nowrap m-0 position-relative">
                                    <input type="text"
                                           placeholder={getText("prichina")}
                                           onChange={(e) => setGetPositionValueSecond(e.target.value)}
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className="modal-save-btn" onClick={createPosition}>{getText("save")}</button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default ConfilictModal;