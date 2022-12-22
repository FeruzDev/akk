import React from 'react';
import {Modal, ModalFooter, ModalHeader} from "reactstrap";
import {getText} from "../../locales";

const PersonnelCertificationCheckModal = (props) => {
    return (
        <Modal
            isOpen={props.mainModal}
            size="xl"
            toggle={() => props.setMainModal(false)}
            className="main-modal"
            dialogClassName="modal-100w"
        >
            <ModalHeader toggle={() => props.setMainModal(false)}>
                {getText("ser75")}
            </ModalHeader>

            <div className="main-modal-content">
                <div className="big-box">
                    <h3 className="big-box-title open-sans-medium">
                        {getText("ser2")}
                    </h3>
                    <div className="check-list d-flex align-items-center">
                        {props.akk ? (
                            <img className="check-img" src="/img/bird.png"/>
                        ) : (
                            <img className="check-img" src="/img/del.png"/>
                        )}
                        <label className="open-sans-medium">{getText("ser3")}</label>
                    </div>
                    <div className="check-list d-flex align-items-center">
                        {props.prAkk ? (
                            <img className="check-img" src="/img/bird.png"/>
                        ) : (
                            <img className="check-img" src="/img/del.png"/>
                        )}
                        <label className="open-sans-medium">{getText("ser4")}</label>
                    </div>
                    <div className="check-list d-flex align-items-center">
                        {props.rasAkk ? (
                            <img className="check-img" src="/img/bird.png"/>
                        ) : (
                            <img className="check-img" src="/img/del.png"/>
                        )}
                        <label className="open-sans-medium">{getText("ser5")} </label>
                    </div>
                    <div className="check-list d-flex align-items-center">
                        {props.aktAkk ? (
                            <img className="check-img" src="/img/bird.png"/>
                        ) : (
                            <img className="check-img" src="/img/del.png"/>
                        )}
                        <label className="open-sans-medium">{getText("ser6")} </label>
                    </div>
                    <div className="check-list d-flex align-items-center">
                        {props.sokAkk ? (
                            <img className="check-img" src="/img/bird.png"/>
                        ) : (
                            <img className="check-img" src="/img/del.png"/>
                        )}
                        <label className="open-sans-medium">{getText("ser7")} </label>
                    </div>
                    <div className="check-list d-flex align-items-center">
                        {props.perAkk ? (
                            <img className="check-img" src="/img/bird.png"/>
                        ) : (
                            <img className="check-img" src="/img/del.png"/>
                        )}
                        <label className="open-sans-medium">{getText("ser8")} </label>
                    </div>
                </div>
                <div className="big-box">
                    <h3 className="big-box-title open-sans-medium">
                        {getText("ser9")}
                    </h3>
                    <div className="check-list">
                        <label className="open-sans-medium">{getText("ser10")}</label>
                        <label className="open-sans-medium" style={{marginLeft: "10px"}}>{getText("ser101")}</label>
                    </div>
                    <div className="row mt-4">
                        <div className="my-input-groups col-md-6 pr-20 m-0 justify-content-center">
                            <label className="open-sans-bold">{getText("ser14")} </label>
                            <span className="mb-3">{props.fullName ? props.fullName : "-"}</span>
                        </div>
                        <div className="my-input-groups col-md-6 m-0 justify-content-center">
                            <label className="open-sans-bold">{getText("ser15")} </label>
                            <span className="mb-3">{props.objectName ? props.objectName : "-"}</span>
                        </div>
                        <div className="my-input-groups col-md-6 m-0 justify-content-center">
                            <label className="open-sans-bold"> {getText("ser16")} </label>
                            <div className="row">
                                <div className="col-md-6 m-0 justify-content-center">
                                    <label className="open-sans-bold"> {getText("ser18")} </label>
                                    <span className="mb-3">{props.statusOrgNum ? props.statusOrgNum : "-"}</span>
                                </div>
                                <div className="col-md-6 m-0 justify-content-center">
                                    <label className="open-sans-bold">{getText("ser19")}</label>
                                    <span className="mb-3">{props.statusOrgDate ? props.statusOrgDate : "-"}</span>
                                </div>
                            </div>
                        </div>
                        <div className="my-input-groups col-md-6 m-0 justify-content-center">
                            <label className="open-sans-bold"> {getText("ser17")} </label>
                            <span className="mb-3">{props.yurAddress ? props.yurAddress : "-"}</span>
                        </div>
                        <div className="my-input-groups col-md-6 m-0 justify-content-center">
                            <label className="open-sans-bold">{getText("ser20")} </label>
                            <span className="mb-3">{props.factAddress ? props.factAddress : "-"}</span>
                        </div>
                        <div className="my-input-groups col-md-6 m-0 justify-content-center">
                            <label className="open-sans-bold">{getText("ser21")} </label>
                            <span className="mb-3">{props.phoneNumber ? props.phoneNumber : "-"}</span>
                        </div>
                        <div className="my-input-groups col-md-6 m-0 justify-content-center">
                            <label className="open-sans-bold">{getText("ser22")} </label>
                            <span className="mb-3">{props.siteName ? props.siteName : "-"}</span>
                        </div>
                        <div className="my-input-groups col-md-6 m-0 justify-content-center">
                            <label className="open-sans-bold">{getText("ser23")}</label>
                            <span className="mb-3">{props.mail ? props.mail : "-"}</span>
                        </div>
                        <div className="my-input-groups col-md-6 m-0 justify-content-center">
                            <label className="open-sans-bold">{getText("ser24")}</label>
                            <span className="mb-3">{props.bank ? props.bank : "-"}</span>
                        </div>
                        <div className="my-input-groups col-md-6 m-0 justify-content-center">
                            <label className="open-sans-bold">{getText("ser25")}</label>
                            <span className="mb-3">{props.raschot ? props.raschot : "-"}</span>
                        </div>
                        <div className="my-input-groups col-md-6 m-0 justify-content-center">
                            <label className="open-sans-bold">{getText("ser26")}</label>
                            <span className="mb-3">{props.mfo ? props.mfo : "-"}</span>
                        </div>
                        <div className="my-input-groups col-md-6 m-0 justify-content-center">
                            <label className="open-sans-bold">{getText("ser27")}</label>
                            <span className="mb-3">{props.oked ? props.oked : "-"}</span>
                        </div>
                        <div className="my-input-groups col-md-6 m-0 justify-content-center">
                            <label className="open-sans-bold">{getText("ser28")}</label>
                            <span className="mb-3">{props.soogu ? props.soogu : "-"}</span>
                        </div>
                        <div className="my-input-groups col-md-6 m-0 justify-content-center">
                            <label className="open-sans-bold">{getText("ser29")} </label>
                            <span className="mb-3">{props.inn ? props.inn : "-"}</span>
                        </div>
                        <div className="my-input-groups col-md-6 m-0 justify-content-center">
                            <label className="open-sans-bold">{getText("ser30")} </label>
                            <span className="mb-3">{props.yurPerson ? props.yurPerson : "-"}</span>
                        </div>
                        <div className="my-input-groups col-md-6 m-0 justify-content-center">
                            <label className="open-sans-bold">{getText("ser31")}</label>
                            <span className="mb-3">{props.phoneYurPerson ? props.phoneYurPerson : "-"}</span>
                        </div>
                        <div className="my-input-groups col-md-6 m-0 justify-content-center">
                            <label className="open-sans-bold">{getText("ser32")}</label>
                            <span className="mb-3">{props.orgSer ? props.orgSer : "-"}</span>
                        </div>
                        <div className="my-input-groups col-md-6 m-0 justify-content-center">
                            <label className="open-sans-bold">{getText("ser33")}</label>
                            <span className="mb-3">{props.phoneOrgSer ? props.phoneOrgSer : "-"}</span>
                        </div>

                    </div>
                </div>
                <div className="big-box">
                    <h2 className="big-box-title">
                        {getText("ser331")}
                    </h2>
                    <div className="toggle">
                        <label className="open-sans-bold">
                            {getText("ser34")}
                            <div>
                                {props.toogle1 ? (
                                    <img className="check-img-md" src="/img/bird.png"/>
                                ) : (
                                    <img className="check-img-md" src="/img/del.png"/>
                                )}

                            </div>
                        </label>
                    </div>
                    {
                        props.toogle1
                            ?
                            <div className="many-checks-items">
                                {
                                    props.inputsCount?.map((item, index) => (
                                        <div className="row inputs-box">
                                            <div className="index open-sans-bold">
                                                {index + 1})
                                            </div>
                                            <div className="my-input-groups col-md-6">
                                                <label className="open-sans-bold">{getText("ser36")} </label>
                                                <span>{item?.address ? item.address : "-"}</span>
                                            </div>
                                            <div className="my-input-groups col-md-6">
                                                <label className="open-sans-bold">{getText("ser37")} </label>
                                                <span>{item?.phone_number ? item.phone_number : "-"}</span>
                                            </div>
                                            <div className="my-input-groups col-md-6">
                                                <label className="open-sans-bold"> {getText("ser38")}</label>
                                                <span>{item?.full_name_head ? item.full_name_head : "-"}</span>
                                            </div>
                                            <div className="my-input-groups col-md-6">
                                                <label className="open-sans-bold">{getText("ser39")} </label>
                                                <span>{item?.employees_count_in_branch ? item.employees_count_in_branch : "-"}</span>
                                            </div>
                                            <div className="my-input-groups col-md-12">
                                                <label className="open-sans-bold">{getText("ser40")}</label>
                                                <span>{item?.key_activities ? item.key_activities : "-"}</span>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                            :
                            ""
                    }

                    <div className="toggle">
                        <label className="open-sans-bold">{getText("xs2")}
                            <div>
                                {props.toogle21 ? (
                                    <img className="check-img-md" src="/img/bird.png"/>
                                ) : (
                                    <img className="check-img-md" src="/img/del.png"/>
                                )}
                            </div>
                        </label>
                    </div>
                    {
                        props.toogle21
                            ?
                            <div className="many-checks-items">
                                <div className="row inputs-box">
                                    <div className="my-input-groups col-md-12">
                                        <label className="open-sans-bold">{getText("xs3")}</label>
                                        <span>{props.mark ? props.mark : "-"}</span>
                                    </div>

                                </div>
                            </div>
                            :
                            ""
                    }


                    <div className="toggle d-flex justify-content-between">
                        <label className="open-sans-bold ">{getText("xs4")}</label>


                        {
                            props.akk1 ?
                                <label className="open-sans-medium d-flex justify-content-between">{getText("xs7")}
                                    <img className="check-img-md" src="/img/bird.png"/>
                                </label>

                                : props.akk2 ?
                                <label className="open-sans-medium d-flex justify-content-between">{getText("xs8")}
                                    <img className="check-img-md" src="/img/bird.png"/>
                                </label>
                                : props.akk3 ?
                                    <label className="open-sans-medium d-flex justify-content-between">{getText("xs9")}
                                        <img className="check-img-md" src="/img/bird.png"/>
                                    </label>
                                    : props.akk4 ?
                                        <label className="open-sans-medium d-flex justify-content-between">{getText("xs10")}
                                            <img className="check-img-md" src="/img/bird.png"/>
                                        </label>
                                        :
                                        <img className="check-img-md" src="/img/del.png"/>
                        }
                    </div>
                    <div className="toggle-select many-checks d-flex justify-content-between">
                        <label className="open-sans-medium">{getText("xs11")}</label>
                        <div className="m-0  toggle-select-more">
                            {
                                props.srok2 ===0
                                    ?
                                    <button disabled
                                            className="open-sans-medium active">
                                        {getText("xs12")}
                                    </button>
                                    :  props.srok2 === 1 ?
                                    <button disabled
                                            className="open-sans-medium active">
                                        {getText("xs13")}

                                    </button>
                                    : props.srok2 === 3 ?
                                        <button disabled
                                                className="open-sans-medium active">
                                            {getText("xs14")}
                                        </button>
                                        : props.srok2 === 4 ?
                                            <button disabled
                                                    className="open-sans-medium active">
                                                {getText("xs15")}
                                            </button>
                                            : props.srok2 === 4 ?
                                                <button disabled
                                                        className="open-sans-medium active">
                                                    {getText("xs16")}
                                                </button>
                                                : props.srok2 === 5 ?
                                                    <button disabled
                                                            className="open-sans-medium active">
                                                        {getText("xs17")}
                                                    </button>
                                                    :
                                                    <img className="check-img-md" src="/img/del.png"/>

                            }





                        </div>
                    </div>

                    <div className="toggle">
                        <label className="open-sans-bold">{getText("xs5")}
                            <div>
                                {props.toogle2 ? (
                                    <img className="check-img-md" src="/img/bird.png"/>
                                ) : (
                                    <img className="check-img-md" src="/img/del.png"/>
                                )}
                            </div>
                        </label>
                    </div>
                    {
                        props.toogle2
                            ?
                            <div className="many-checks-items">
                                <div className="row inputs-box">
                                    <div className="my-input-groups mt-0 col-md-12">
                                        <p className="open-sans-bold">{getText("xs6")}</p>
                                        <span>{props.typeOf ? props.typeOf : "-"}</span>
                                    </div>

                                </div>
                            </div>
                            :
                            ""
                    }

                    <div className="toggle">
                        <label className="open-sans-bold">
                            {getText("xs6")}
                            <div>
                                {props.toogle31 ? (
                                    <img className="check-img-md" src="/img/bird.png"/>
                                ) : (
                                    <img className="check-img-md" src="/img/del.png"/>
                                )}
                            </div>
                        </label>
                    </div>

                    <div className="toggle">
                        <label className="open-sans-bold">
                            {getText("ser44")}
                            <div>
                                {props.toogle3 ? (
                                    <img className="check-img-md" src="/img/bird.png"/>
                                ) : (
                                    <img className="check-img-md" src="/img/del.png"/>
                                )}
                            </div>
                        </label>
                    </div>
                    {
                        props.toogle3
                            ?
                            <div className="many-checks-items">

                                <div className="row inputs-box">
                                    <div className="my-input-groups mt-0 col-md-12">
                                        <p className="open-sans-bold">{getText("ser46")}</p>
                                        <span>{props.serCount ? props.serCount : "-"}</span>
                                    </div>

                                </div>
                            </div>
                            :
                            ""
                    }
                    <div className="toggle">
                        <label className="open-sans-bold">{getText("ser47")}
                            <div>
                                {props.toogle4 ? (
                                    <img className="check-img-md" src="/img/bird.png"/>
                                ) : (
                                    <img className="check-img-md" src="/img/del.png"/>
                                )}
                            </div>
                        </label>
                    </div>
                    {
                        props.toogle4
                            ?
                            <div className="many-checks-items">
                                {
                                    props.toogleCount4?.map((item, index) => (
                                        <div className="row inputs-box">
                                            <div className="index open-sans-bold">
                                                {index + 1})
                                            </div>
                                            <div className="my-input-groups col-md-6">
                                                <label className="open-sans-bold">{getText("ser49")}</label>
                                                <span>{item.name ? item.name : "-"}</span>
                                            </div>

                                            <div className="my-input-groups col-md-6">
                                                <label className="open-sans-bold">{getText("ser50")}</label>
                                                <span>{item.accreditation_date ? item.accreditation_date : "-"}</span>
                                            </div>
                                            <div className="my-input-groups col-md-12">
                                                <label className="open-sans-bold">{getText("ser51")}</label>
                                                <span>{item.foreign_accredit ? item.foreign_accredit : "-"}</span>
                                            </div>

                                        </div>
                                    ))
                                }

                            </div>
                            :
                            ""
                    }

                    <div className="toggle">
                        <label className="open-sans-bold">{getText("io5")}
                            <div>
                                {props.toogle41 ? (
                                    <img className="check-img-md" src="/img/bird.png"/>
                                ) : (
                                    <img className="check-img-md" src="/img/del.png"/>
                                )}
                            </div>
                        </label>
                    </div>
                    {
                        props.toogle41
                            ?
                            <div className="many-checks-items">

                                {
                                    props.toogleCount41?.map((item, index)=>(
                                        <div className="row inputs-box">
                                            <div className="index open-sans-bold">
                                                {index + 1})
                                            </div>
                                            <div className="my-input-groups col-md-12">
                                                <label className="open-sans-bold">{getText("io6")}</label>

                                                <span>{item.full_name_staff ? item.full_name_staff : "-"}</span>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            :
                            ""
                    }

                    <div className="toggle">
                        <label className="open-sans-bold">{getText("ser52")}
                            <div>
                                {props.toogle5 ? (
                                    <img className="check-img-md" src="/img/bird.png"/>
                                ) : (
                                    <img className="check-img-md" src="/img/del.png"/>
                                )}
                            </div>
                        </label>
                    </div>
                    {
                        props.toogle5
                            ?
                            <div className="many-checks-items">
                                {
                                    props.toogleCount5?.map((item, index) => (
                                        <div className="row inputs-box">
                                            <div className="index open-sans-bold">
                                                {index + 1})
                                            </div>
                                            <div className="my-input-groups col-md-12">
                                                <label className="open-sans-bold">{getText("ser541")}</label>
                                                <span>{item.additional_offices ? item.additional_offices : "-"}</span>
                                            </div>
                                        </div>

                                    ))}
                            </div>
                            :
                            ""
                    }
                    <div className="toggle-select mt-4 mb-4">
                        <label className="open-sans-bold">{getText("ser55")}
                            <div>
                                {
                                    props.srok === 0 ?
                                        <button disabled
                                                className="open-sans-medium active">
                                            {getText("ser56")}
                                        </button>
                                        :
                                        props.srok === 1 ?
                                            <button disabled
                                                    className="open-sans-medium active">
                                                {getText("ser57")}
                                            </button> :
                                            props.srok === 3 ?
                                                <button disabled
                                                        className="open-sans-medium active">{getText("ser58")}
                                                </button>
                                                :
                                                <img className="check-img-md" src="/img/del.png"/>

                                }

                            </div>

                        </label>
                    </div>

                    <div className="toggle">
                        <label className="open-sans-bold">{getText("ser59")}
                            <div>
                                {props.toogle6 ? (
                                    <img className="check-img-md" src="/img/bird.png"/>
                                ) : (
                                    <img className="check-img-md" src="/img/del.png"/>
                                )}
                            </div>
                        </label>
                    </div>
                    <div className="toggle">
                        <label className="open-sans-bold">{getText("ser60")}
                            <div>
                                {props.toogle7 ? (
                                    <img className="check-img-md" src="/img/bird.png"/>
                                ) : (
                                    <img className="check-img-md" src="/img/del.png"/>
                                )}
                            </div>
                        </label>
                    </div>
                </div>
                <div className="big-box">
                    <h2 className="big-box-title">
                        {getText("ser65")}
                    </h2>
                    <div className="row">
                        <div className="my-input-groups col-md-6">
                            <label className="open-sans-medium">{getText("ser66")}</label>
                            <span className="mb-3">{props.registration_number ? props.registration_number : "-"}</span>
                        </div>
                        <div className="my-input-groups col-md-6">
                            <label className="open-sans-medium">{getText("ser67")}</label>
                            <div className="row d-flex">
                                <div className="date-field col-md-6  d-flex align-items-center">
                                    <label className="open-sans-medium">{getText("ser68")}</label>
                                    <span
                                        className="mb-2">{props.certificate_validity_period_from ? props.certificate_validity_period_from : "-"}</span>
                                </div>
                                <div className="date-field col-md-6 d-flex align-items-center">
                                    <label className="open-sans-medium">{getText("ser69")} </label>
                                    <span
                                        className="mb-2">{props.certificate_validity_period_to ? props.certificate_validity_period_to : "-"}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="big-box">
                    <h2 className="big-box-title">
                        {getText("ser70")}
                    </h2>
                    <div className="toggle">
                        <label className="open-sans-bold">{getText("ser71")}
                            <div>
                                {props.file1 ? (
                                    <img className="check-img-md" src="/img/bird.png"/>
                                ) : (
                                    <img className="check-img-md" src="/img/del.png"/>
                                )}
                            </div>
                        </label>
                    </div>
                    <div className="toggle">
                        <label className="open-sans-bold">{getText("ser72")}
                            <div>
                                {props.file2 ? (
                                    <img className="check-img-md" src="/img/bird.png"/>
                                ) : (
                                    <img className="check-img-md" src="/img/del.png"/>
                                )}
                            </div>
                        </label>
                    </div>
                    <div className="toggle">
                        <label className="open-sans-bold">{getText("ser73")}
                            <div>
                                {props.file3 ? (
                                    <img className="check-img-md" src="/img/bird.png"/>
                                ) : (
                                    <img className="check-img-md" src="/img/del.png"/>
                                )}
                            </div>
                        </label>
                    </div>
                    <div className="toggle">
                        <label className="open-sans-bold">{getText("ser74")}
                            <div>
                                {props.file4 ? (
                                    <img className="check-img-md" src="/img/bird.png"/>
                                ) : (
                                    <img className="check-img-md" src="/img/del.png"/>
                                )}
                            </div>
                        </label>
                    </div>
                </div>

            </div>
            <ModalFooter className="mt-4">
                <button
                    className="modal-cancel-btn"
                    onClick={() => props.setMainModal(false)}
                >
                    {getText("cancel")}
                </button>
                <button onClick={props.sendData} className="modal-save-btn">
                    {getText("send")}
                </button>
            </ModalFooter>
        </Modal>
    );
};

export default PersonnelCertificationCheckModal;
