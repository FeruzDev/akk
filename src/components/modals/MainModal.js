import React, { useEffect, useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const MainModal = (props) => {
  useEffect(() => {
  }, [props.mainModal]);
  return (
    <Modal
      isOpen={props.mainModal}
      toggle={() => props.setMainModal(false)}
      className="main-modal"
    ></Modal>
  );
};

export default MainModal;
