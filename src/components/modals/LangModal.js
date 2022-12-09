import React, { useEffect, useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { APIT_APTH, AUTH } from "../../tools/Const";
import axios from "axios";
import { getText } from "../../locales";

const LangModal = (props) => {
  const [getLangValue, setGetLangValue] = useState("");

  const getData = () => {
    axios
      .get(APIT_APTH + "apps/references/foreign_languages/", AUTH)
      .then((res) => {
        props.setGetLang(res.data);
      });
  };
  const createLang = () => {
    axios
      .post(
        APIT_APTH + "apps/references/foreign_languages/",
        { lang: getLangValue },
        AUTH
      )
      .then((res) => {
        props.setLocationModal(false);
        props.setLang(res.data);
        getData();
        props.setLocationValue([]);
        setGetLangValue("");
      });
  };
  const editLang = () => {
    axios
      .put(
        APIT_APTH +
          "apps/references/foreign_languages/update/" +
          props.locationValue[0]?.value,
        { lang: getLangValue },
        AUTH
      )
      .then((res) => {
        props.setLocationModal(false);
        props.setLang(res.data);
        getData();
        props.setLocationValue([]);
        setGetLangValue("");
      });
  };
  useEffect(() => {
    setGetLangValue(props.locationValue[0]?.label);
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
            <div className="col-md-12 my-form-groups  ">
              <div className="my-input-style">
                <label htmlFor="dd2" className="open-sans-semibold">
                  {props.fieldName}
                </label>
                <div className="row flex-nowrap m-0 position-relative">
                  <input
                    type="text"
                    value={
                      props.locationValue[0]?.label
                        ? getLangValue
                        : getLangValue
                    }
                    placeholder={props.fieldName}
                    onChange={(e) => setGetLangValue(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            className="modal-save-btn"
            onClick={props.locationValue[0]?.label ? editLang : createLang}
          >
            {props.locationValue[0]?.label ? getText("edit") : getText("save")}
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default LangModal;
