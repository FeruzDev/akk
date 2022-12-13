import React, { useEffect, useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { API_APTH, AUTH } from "../../tools/Const";
import axios from "axios";
import Select from "react-select";
import { getText } from "../../locales";
import { CHOICES } from "../../tools/familyList";
import LocationModal from "./LocationModal";
import PropiskaModal from "./PropiskaModal";
const FamilyModal = (props) => {
  const [locationModal, setLocationModal] = useState(false);
  const [locationModalSecond, setLocationModalSecond] = useState(false);
  const [FaName, setFaname] = useState("");
  const [fio, setFio] = useState("");
  const [birthday, setBirthday] = useState("");
  const [birthAddress, setBirthAddress] = useState("");
  const [placeAddress, setPlaceAddress] = useState("");
  const [position, setPosition] = useState("");
  const [location, setLocation] = useState([]);
  const [locationValue, setLocationValue] = useState(null);
  const createLang = () => {
    axios
      .post(
        API_APTH + "apps/references/about_family/",
        {
          relation_degree: FaName.value,
          full_name: fio,
          birth_date: birthday,
          work_place: position,
          birth_place_pk: birthAddress?.value,
          place_residence_pk: placeAddress?.value,
        },
        AUTH
      )
      .then((res) => {
        props.setLocationModal(false);
        // props.setLang(res.data);
        props.locationValue.push(res.data);
        setFaname("");
        setBirthday("");
        setFio("");
        setBirthAddress("");
        setPlaceAddress("");
        setPosition("");
      });
  };
  const editLang = () => {
    const index = props.locationValue.findIndex((object) => {
      return object.id === props.facId?.id;
    });

    if (index !== -1) {
      props.locationValue[index].full_name = fio;
      props.locationValue[index].relation_degree = FaName.value;
      props.locationValue[index].relation_degree_choice = FaName?.label;
      props.locationValue[index].birth_date = birthday;
      props.locationValue[index].work_place = position;
      props.locationValue[index].birth_place_pk = birthAddress?.value;
      props.locationValue[index].place_residence_pk = placeAddress?.value;
    }

    axios
      .put(
        API_APTH + "apps/references/about_family/update/" + props.facId?.id,
        {
          relation_degree: FaName.value,
          full_name: fio,
          birth_date: birthday,
          work_place: position,
          birth_place_pk: birthAddress?.value,
          place_residence_pk: placeAddress?.value,
        },
        AUTH
      )
      .then((res) => {
        props.setLocationModal(false);
        props.setLang(res.data);
        setFaname("");
        setBirthday("");
        setFio("");
        setBirthAddress("");
        setPlaceAddress("");
        setPosition("");
      });
  };
  useEffect(() => {
    setFio(props.facId?.full_name);
    setBirthday(props.facId?.birth_date);
    setPosition(props.facId?.work_place);
    setBirthAddress({ value: props.facId?.birth_place?.id });
    setPlaceAddress({ value: props.facId?.place_residence?.id });
  }, [props.locationModal]);
  return (
    <>
      <Modal
        isOpen={props.locationModal}
        toggle={() => props.setLocationModal(false)}
        className="modal-location"
      >
        <ModalHeader toggle={() => props.setLocationModal(false)}>
          {props.fieldName}
        </ModalHeader>
        <ModalBody>
          <div className="row">
            <div className="col-md-12 my-form-groups   ">
              <div className="my-select-style">
                <label className="open-sans-semibold">
                  {getText("fam1")} <span className="with-star">*</span>
                </label>
                <div className="row flex-nowrap m-0 position-relative  ">
                  <Select
                    options={CHOICES?.map((item) => {
                      return { value: item.id, label: item.name };
                    })}
                    defaultValue={{
                      value: props.facId?.relation_degree,
                      label: props.facId?.relation_degree_choice,
                    }}
                    isClearable
                    onChange={(e) => {
                      setFaname(e);
                    }}
                    placeholder={getText("fam1")}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-12 my-form-groups mt-3  ">
              <div className="my-input-style">
                <label htmlFor="dd2" className="open-sans-semibold">
                  {getText("fio")} <span className="with-star">*</span>
                </label>
                <div className="row flex-nowrap m-0 position-relative">
                  <input
                    type="text"
                    value={fio}
                    placeholder={getText("fio")}
                    onChange={(e) => setFio(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-12 my-form-groups mt-3 ">
              <div className="my-input-style">
                <label htmlFor="dd2" className="open-sans-semibold">
                  {getText("inputTittle3")} <span className="with-star">*</span>
                </label>
                <div className="row flex-nowrap m-0 position-relative">
                  <input
                    type="date"
                    value={birthday}
                    placeholder={getText("inputTittle3")}
                    onChange={(e) => setBirthday(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-12 my-form-groups mt-3  ">
              <div className="my-select-style">
                <label htmlFor="dd2" className="open-sans-semibold">
                  {getText("fam2")} <span className="with-star">*</span>
                </label>
                <div className="row flex-nowrap m-0 position-relative">
                  <Select
                    isClearable
                    placeholder={getText("fam2")}
                    defaultValue={
                      props.facId
                        ? {
                            value: props.facId?.birth_place?.id,
                            label:
                              props.facId?.birth_place?.country?.name +
                              " " +
                              props.facId?.birth_place.name,
                          }
                        : ""
                    }
                    options={location?.map((item) => {
                      return {
                        value: item.id,
                        label: item.country.name + "-" + item.name,
                        country_id: item.country.id,
                        country_name: item.country.name,
                        city_name: item.name,
                      };
                    })}
                    onChange={(e) => {
                      setBirthAddress(e);
                    }}
                  />
                  <button
                    className="add-btn"
                    type="button"
                    onClick={() => setLocationModal(true)}
                  >
                    {locationValue ? (
                      <img src="/img/edit.png" alt="+" />
                    ) : (
                      <img src="/img/plus.png" alt="+" />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <LocationModal
              locationValue={locationValue}
              setLocationValue={setLocationValue}
              setLocation={setLocation}
              locationModal={locationModal}
              setLocationModal={setLocationModal}
              locationModalSecond={locationModalSecond}
              setLocationModalSecond={setLocationModalSecond}
            />
            <div className="col-md-12 my-form-groups mt-3  ">
              <div className="my-select-style">
                <label htmlFor="dd2" className="open-sans-semibold">
                  {getText("inputTittle21")}{" "}
                  <span className="with-star">*</span>
                </label>
                <div className="row flex-nowrap m-0 position-relative">
                  <Select
                    isClearable
                    placeholder={getText("inputTittle21")}
                    options={location?.map((item) => {
                      return {
                        value: item.id,
                        label: item.country.name + "-" + item.name,
                        country_id: item.country.id,
                        country_name: item.country.name,
                        city_name: item.name,
                      };
                    })}
                    defaultValue={
                      props.facId
                        ? {
                            value: props.facId?.place_residence?.id,
                            label:
                              props.facId?.place_residence?.country?.name +
                              " " +
                              props.facId?.place_residence.name,
                          }
                        : ""
                    }
                    onChange={(e) => {
                      setPlaceAddress(e);
                    }}
                  />
                  <button
                    className="add-btn"
                    type="button"
                    onClick={() => setLocationModal(true)}
                  >
                    {locationValue ? (
                      <img src="/img/edit.png" alt="+" />
                    ) : (
                      <img src="/img/plus.png" alt="+" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <PropiskaModal
              locationValue={locationValue}
              setLocationValue={setLocationValue}
              setLocation={setLocation}
              locationModal={locationModal}
              setLocationModal={setLocationModal}
              locationModalSecond={locationModalSecond}
              setLocationModalSecond={setLocationModalSecond}
            />
            <div className="col-md-12 my-form-groups mt-3  ">
              <div className="my-input-style">
                <label htmlFor="dd2" className="open-sans-semibold">
                  {getText("fam3")} <span className="with-star">*</span>
                </label>
                <div className="row flex-nowrap m-0 position-relative">
                  <input
                    type="text"
                    value={position}
                    placeholder={getText("fam3")}
                    onChange={(e) => setPosition(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            className="modal-save-btn"
            onClick={props.facId?.id ? editLang : createLang}
          >
            {props.facId.id ? getText("edit") : getText("save")}
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default FamilyModal;
