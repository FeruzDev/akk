import React, { useEffect, useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { APIT_APTH, AUTH } from "../../tools/Const";
import axios from "axios";
import { getText } from "../../locales";

const FactoryModal = (props) => {
  const [FaName, setFaname] = useState("");
  const [period, setPeriod] = useState("");

  const createLang = () => {
    axios
      .post(
        APIT_APTH + "apps/references/labor_activity/",
        { name: FaName, period: period },
        AUTH
      )
      .then((res) => {
        props.setLocationModal(false);
        props.locationValue.push(res.data);
        setFaname("");
        setPeriod("");
      });
  };
  const editLang = () => {
    const index = props.locationValue.findIndex((object) => {
      return object.id === props.facId;
    });

    if (index !== -1) {
      props.locationValue[index].name = FaName;
      props.locationValue[index].period = period;
    }

    axios
      .put(
        APIT_APTH + "apps/references/labor_activity/update/" + props.facId,
        {
          name: props.locationValue[index].name,
          period: props.locationValue[index].period,
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
                <label htmlFor="dd2" className="open-sans-semibold">
                  {getText("trd1")}
                </label>
                <div className="row flex-nowrap m-0 position-relative">
                  <input
                    type="text"
                    value={FaName}
                    placeholder={getText("trd1")}
                    onChange={(e) => setFaname(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-12 my-form-groups mt-3 ">
              <div className="my-input-style">
                <label htmlFor="dd2" className="open-sans-semibold">
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

export default FactoryModal;
