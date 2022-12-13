import React, {useEffect, useState} from 'react';
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import Select from "react-select";
import axios from "axios";
import {API_APTH, AUTH} from "../../tools/Const";
import {toast} from "react-toastify";
import {getText} from "../../locales";

const AcModal = (props) => {

    const [facultyList, setFacultyList] = useState([])
    const [facultyListValue, setFacultyListValue] = useState([])
    const [universityList, setUniversityList] = useState([])
    const [universityListValue, setUniversityListValue] = useState([])
    const [period, setPeriod] = useState("")
    const [graduate, setGraduate] = useState("")
    const [uniTitle, setUniTitle] = useState("")

    const getFaculty = () => {
        axios.get(API_APTH + "apps/references/faculty/", AUTH)
            .then(res =>{
                setFacultyList(res.data)
            })
    }
    const getUniversity = () => {
        axios.get(API_APTH + "apps/references/edu/", AUTH)
            .then(res =>{
                setUniversityList(res.data)
            })
    }


    const bachelorList = () => {
        axios.get(API_APTH + "apps/references/" + props.url + "/", AUTH)
            .then(res =>{
                props.setBachelorList(res.data)
            })
    }
    const createFac = () => {
        axios.post(API_APTH + "apps/references/" + props.url + "/", {
            "period": period,
            "education_pk": facultyListValue.value
        }, AUTH)
            .then(() =>{
                props.setUnModal(false)
                bachelorList()
            })
    }
    const createSecond = () => {
        axios.post(API_APTH + "apps/references/faculty/", {
            "graduate": graduate,
            "university_pk": universityListValue.value
        }, AUTH)
            .then(() =>{
                props.setUnModalSecond(false)
                props.setUnModal(true)
                // bachelorList()
                getFaculty()
            })
    }
    const createThird = () => {
        axios.post(API_APTH + "apps/references/edu/", {
            "name": uniTitle
        }, AUTH)
            .then(() =>{
                props.setUnModalSecond(true)
                props.setUnModalThird(false)
                // bachelorList()
                // getFaculty()
                getUniversity()
            })
    }
    useEffect(() => {
        getFaculty()
        getUniversity()

    }, [])
    return (
        <>
            {/*Modals*/}
            <Modal  isOpen={props.unModal} toggle={() => props.setUnModal(false)}
                    className="modal-location">
                <ModalHeader toggle={() => props.setUnModal(false)}>{props.fieldName}</ModalHeader>
                <ModalBody>
                    <div className="row">
                        <div className="col-md-12 my-form-groups   ">
                            <div className="my-select-style">
                                <label htmlFor="dd2" className="open-sans-semibold">{props.title} </label>
                                <div className="row flex-nowrap m-0 position-relative">
                                    <Select isClearable
                                            options={facultyList?.map(item => {
                                                return {value: item.id, label: item.university.name + "-" +  item.graduate}
                                            })}
                                            onChange={(e) => setFacultyListValue(e)}
                                            placeholder={props.title}/>
                                    <button className="add-btn"
                                            type="button"
                                            onClick={() => {
                                                props.setUnModal(false)
                                                props.setUnModalSecond(true)
                                            }}
                                    >
                                        <img src="/img/plus.png" alt="+"/>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 my-form-groups mt-3">
                            <div className="my-input-style">
                                <label htmlFor="dd2" className="open-sans-semibold">{getText("period")}</label>
                                <div className="row flex-nowrap m-0 position-relative">
                                    <input type="text"
                                           placeholder={getText("period")}
                                           onChange={(e) => setPeriod(e.target.value)}
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className="modal-save-btn" onClick={createFac}>{getText("save")}</button>
                </ModalFooter>
            </Modal>


            <Modal  isOpen={props.unModalSecond} toggle={() => props.setUnModalSecond(false)}
                    className="modal-location">
                <ModalHeader toggle={() => props.setUnModalSecond(false)}>{props.fieldName}</ModalHeader>
                <ModalBody>
                    <div className="row">
                        <div className="col-md-12 my-form-groups   ">
                            <div className="my-select-style">
                                <label htmlFor="dd2" className="open-sans-semibold">{props.titleSecond} </label>
                                <div className="row flex-nowrap m-0 position-relative">
                                    <Select isClearable
                                            options={universityList?.map(item => {
                                                return {value: item.id, label: item.name}
                                            })}
                                            onChange={(e) => setUniversityListValue(e)}
                                            placeholder={props.titleSecond}/>
                                    <button className="add-btn"
                                            type="button"
                                            onClick={() => {
                                                props.setUnModalSecond(false)
                                                props.setUnModalThird(true)
                                            }}
                                    >
                                        <img src="/img/plus.png" alt="+"/>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 my-form-groups mt-3">
                            <div className="my-input-style">
                                <label htmlFor="dd2" className="open-sans-semibold">{getText("fac2")}</label>
                                <div className="row flex-nowrap m-0 position-relative">
                                    <input type="text"
                                           placeholder={getText("fac")}
                                           onChange={(e) => setGraduate(e.target.value)}
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className="modal-save-btn" onClick={createSecond}>{getText("save")}</button>
                </ModalFooter>
            </Modal>

            <Modal  isOpen={props.unModalThird} toggle={() => props.setUnModalThird(false)}
                    className="modal-location">
                <ModalHeader toggle={() => props.setUnModalThird(false)}>{props.fieldName}</ModalHeader>
                <ModalBody>
                    <div className="row">

                        <div className="col-md-12 my-form-groups ">
                            <div className="my-input-style">
                                <label htmlFor="dd2" className="open-sans-semibold">{getText("fac2")}</label>
                                <div className="row flex-nowrap m-0 position-relative">
                                    <input type="text"
                                           placeholder={getText("fac3")}
                                           onChange={(e) => setUniTitle(e.target.value)}
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className="modal-save-btn" onClick={createThird}>{getText("save")}</button>
                </ModalFooter>
            </Modal>


        </>
    );
};

export default AcModal;