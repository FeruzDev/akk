import React, { useEffect, useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { APIT_APTH, AUTH } from "../../tools/Const";
import axios from "axios";
import { getText } from "../../locales";

const SerModal = (props) => {
  const [FaName, setFaname] = useState("");
  const [period, setPeriod] = useState("");
  const [person, setPerson] = useState("");

  const createLang = () => {
    axios
      .post(
        APIT_APTH + "apps/references/certificate/",
        { name: FaName, period: period, person: person },
        AUTH
      )
      .then((res) => {
        props.setLocationModal(false);
        props.locationValue.push(res.data);
        setFaname("");
        setPeriod("");
        setPerson("");
      });
  };
  const editLang = () => {
    const index = props.locationValue.findIndex((object) => {
      return object.id === props.facId;
    });

    if (index !== -1) {
      props.locationValue[index].name = FaName;
      props.locationValue[index].period = period;
      props.locationValue[index].person = person;
    }

    axios
      .put(
        APIT_APTH + "apps/references/certificate/update/" + props.facId,
        {
          name: props.locationValue[index].name,
          period: props.locationValue[index].period,
          person: props.locationValue[index].person,
        },
        AUTH
      )
      .then((res) => {
        props.setLocationModal(false);
        props.setLang(res.data);
        props.setFacId("");
        setFaname("");
        setPeriod("");
      });
  };
  useEffect(() => {}, [props.locationModal]);
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
            <div className="col-md-12 my-form-groups  ">
              <div className="my-input-style">
                <label className="open-sans-semibold">
                  {getText("serName")}
                </label>
                <div className="row flex-nowrap m-0 position-relative">
                  <input
                    type="text"
                    value={FaName}
                    placeholder={getText("serName")}
                    onChange={(e) => setFaname(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-12 my-form-groups mt-3 ">
              <div className="my-input-style">
                <label className="open-sans-semibold">
                  {getText("period")}
                </label>
                <div className="row flex-nowrap m-0 position-relative">
                  <input
                    type="text"
                    value={period}
                    placeholder={getText("period")}
                    onChange={(e) => setPeriod(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-12 my-form-groups mt-3 ">
              <div className="my-input-style">
                <label className="open-sans-semibold">
                  {getText("serPerson")}
                </label>
                <div className="row flex-nowrap m-0 position-relative">
                  <input
                    type="text"
                    value={person}
                    placeholder={getText("serPerson")}
                    onChange={(e) => setPerson(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            className="modal-save-btn"
            onClick={props.facId ? editLang : createLang}
          >
            {props.facId ? getText("edit") : getText("save")}
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default SerModal;
