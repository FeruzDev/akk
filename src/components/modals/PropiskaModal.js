import React, {useEffect, useState} from 'react';
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import Select from "react-select";
import axios from "axios";
import {API_APTH, AUTH} from "../../tools/Const";
import {toast} from "react-toastify";
import {getText} from "../../locales";


const PropiskaModal = (props) => {
    const [getCity, setGetCity] = useState([])
    const [getCountry, setGetCountry] = useState([])
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [cityCountry, setCityCountry] = useState("")

    const addCountry = () => {
        axios.post(API_APTH + "apps/references/country/", {"name": country}, AUTH)
            .then(res => {
                getConutryList()
                props.setLocationModal(true)
                props.setLocationModalSecond(false)
            })
    }

    const createCity = () => {
        axios.post(API_APTH + "apps/references/city/", {
            "country_pk": cityCountry.value, "name": city
        }, AUTH)
            .then(res => {
                getConutryList()
                getCityList()
                props.setLocationModal(false)
                props.setLocationModalSecond(false)

            })
            .catch(err => {
                toast.error("Введите информацию")
            })
    }

    const editCity = () => {
        axios.put(API_APTH + "apps/references/city/update/" + props.locationValue?.value, {
            "country_pk": cityCountry?.value, "name": city
        }, AUTH)
            .then(res => {
                getCityList()
                getConutryList()
                props.setLocationValue({value: res.data.id, label: res.data.country.name + "-" + res.data.name})
                props.setLocationModal(false)
                props.setLocationModalSecond(false)
            })
            .catch(err => {
                toast.error("Введите информацию")
            })
    }
    const getCityList = () => {
        axios.get(API_APTH + "apps/references/city/", AUTH)
            .then(res => {
                setGetCity(res.data)
                props.setLocation(res?.data)
            })
    }
    const getConutryList = () => {
        axios.get(API_APTH + "apps/references/country/", AUTH)
            .then(res => {
                setGetCountry(res.data)
            })
    }
    useEffect(() => {
        getCityList()
        getConutryList()
        setCity(props.locationValue?.city_name)
        setCityCountry(props.locationValue?.country_id)

    }, [props.locationModal])
    return (<>
            {/*Modals*/}
            <Modal isOpen={props.locationModal} toggle={() => props.setLocationModal(false)}
                   className="modal-location">
                <ModalHeader toggle={() => props.setLocationModal(false)}>{props.fieldName}</ModalHeader>
                <ModalBody>
                    <div className="row">
                        <div className="col-md-12 my-form-groups   ">
                            <div className="my-select-style">
                                <label htmlFor="dd2" className="open-sans-semibold">{getText("loc1")} </label>
                                <div className="row flex-nowrap m-0 position-relative">
                                    <Select isClearable
                                            options={getCountry?.map(item => {
                                                return {value: item.id, label: item.name}
                                            })}
                                            defaultValue={props.locationValue ? {
                                                value: props.locationValue.country_id,
                                                label: props.locationValue.country_name
                                            } : ""}
                                            onChange={(e) => setCityCountry(e)}
                                            placeholder={getText("loc1")}/>
                                    <button className="add-btn"
                                            type="button"
                                            onClick={() => {
                                                props.setLocationModal(false)
                                                props.setLocationModalSecond(true)
                                            }}
                                    >
                                        <img src="/img/plus.png" alt="+"/>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 my-form-groups mt-3">
                            <div className="my-input-style">
                                <label htmlFor="dd2" className="open-sans-semibold">{getText("loc2")}</label>
                                <div className="row flex-nowrap m-0 position-relative">
                                    <input type="text"
                                           value={city}
                                           placeholder={getText("loc2")}
                                           onChange={(e) => setCity(e.target.value)}
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className="modal-save-btn"
                            onClick={props.locationValue ? editCity : createCity}
                    >
                        {props.locationValue ? getText("edit") : getText("save")}
                    </button>
                </ModalFooter>
            </Modal>
            <Modal isOpen={props.locationModalSecond} toggle={() => {
                props.setLocationModalSecond(false)
                props.setLocationModal(true)
            }} className="modal-location">
                <ModalHeader toggle={() => props.setLocationModalSecond(false)}>{props.fieldName}</ModalHeader>
                <ModalBody>
                    <div className="row">
                        <div className="col-md-12 my-form-groups">
                            <div className="my-input-style">
                                <label htmlFor="dd2" className="open-sans-semibold">{getText("loc1")}</label>
                                <div className="row flex-nowrap m-0 position-relative">
                                    <input onChange={(e) => setCountry(e.target.value)}
                                           type="text"
                                           placeholder={getText("loc1")}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className="modal-save-btn" onClick={addCountry}>{getText("save")}</button>
                </ModalFooter>
            </Modal>
        </>);
};

export default PropiskaModal;