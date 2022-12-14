import React, {useEffect, useRef, useState} from 'react';
import {API_APTH, AUTH, SITE_LANG} from "../tools/Const";
import axios from "axios";
import {getText} from "../locales";
import {toast} from "react-toastify";
import Checks from "./inputs/Checks";
import OneInput from "./inputs/OneInput";
import SrokSelect from "./inputs/SrokSelect";
import RegNumber from "./inputs/RegNumber";
import FileInputs from "./inputs/FileInputs";
import PersonnelCertificationCheckModal from "./inputs/PersonnelCertificationCheckModal";

const PersonnelCertification = () => {

    const [mainModal, setMainModal] = useState(false);
    const [toogle1, setToogle1] = useState(false);
    const [toogle2, setToogle2] = useState(false);
    const [toogle21, setToogle21] = useState(false);
    const [toogle3, setToogle3] = useState(false);
    const [toogle31, setToogle31] = useState(false);
    const [toogle4, setToogle4] = useState(false);
    const [toogle41, setToogle41] = useState(false);
    const [toogle5, setToogle5] = useState(false);
    const [toogle6, setToogle6] = useState(false);
    const [toogle7, setToogle7] = useState(false);
    const [srok, setSrok] = useState(null);
    const [srok2, setSrok2] = useState(null);
    const [akk, setAkk] = useState(false);
    const [prAkk, setPrAkk] = useState(false);
    const [rasAkk, setRasAkk] = useState(false);
    const [aktAkk, setAktAkk] = useState(false);
    const [sokAkk, setSokAkk] = useState(false);
    const [perAkk, setPerAkk] = useState(false);
    const [akk1, setAkk1] = useState(false);
    const [akk2, setAkk2] = useState(false);
    const [akk3, setAkk3] = useState(false);
    const [akk4, setAkk4] = useState(false);
    const [fullName, setFullName] = useState("");
    const [objectName, setObjectName] = useState("");
    const [statusOrgDate, setStatusOrgDate] = useState("");
    const [statusOrgNum, setStatusOrgNum] = useState("");
    const [yurAddress, setYurAddress] = useState("");
    const [factAddress, setFactAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [siteName, setSiteName] = useState("");
    const [mail, setMail] = useState("");
    const [bank, setBank] = useState("");
    const [raschot, setRaschot] = useState("");
    const [soogu, setSoogu] = useState("");
    const [mfo, setMFO] = useState("");
    const [oked, setOKED] = useState("");
    const [inn, setInn] = useState("");
    const [yurPerson, setYurPerson] = useState("");
    const [phoneYurPerson, setPhoneYurPerson] = useState("");
    const [orgSer, setOrgSer] = useState("");
    const [phoneOrgSer, setPhoneOrgSer] = useState("");
    const [typeOf, setTypeOf] = useState("");
    const [mark, setMark] = useState("");
    const [serCount, setSerCount] = useState("");
    const [registration_number, setregistration_number] = useState("");
    const [certificate_validity_period_from, setcertificate_validity_period_from] = useState("");
    const [certificate_validity_period_to, setcertificate_validity_period_to] = useState("");
    const [file1, setFile1] = useState(null);
    const [file2, setFile2] = useState(null);
    const [file3, setFile3] = useState(null);
    const [file4, setFile4] = useState(null);
    let bigData = new FormData();

    const [inputsCount, setInputsCount] = useState([{
        address: "",
        phone_number: "",
        full_name_head: ""
    }]);
    const [toogleCount4, setToogleCount4] = useState([{
        name: "",
        // certificate_number: "",
        accreditation_date: "",
        foreign_accredit: "",
    }]);
    const [toogleCount41, setToogleCount41] = useState([{
        full_name_staff: "",
    }]);
    const [toogleCount5, setToogleCount5] = useState([{
        additional_offices: ""
    }]);
    const addElement = () => {
        setInputsCount(inputsCount.concat({
            address: "",
            phone_number: "",
            full_name_head: ""
        }))
    };
    const removeElement = (item) => {
        setInputsCount(inputsCount.filter((abs, index) => index !== item));
    };
    const changeValue = (e, ind) => {
        setInputsCount(inputsCount.map((item, index) => {
            return index === ind ? {...item, [e.target.name]: e.target.value} : item
        }))
    };
    const addElementToogle4Value = () => {
        setToogleCount4(toogleCount4.concat({
            name: "",
            accreditation_date: "",
            // certificate_number: "",
            foreign_accredit: "",
        }));
    };
    const addElementToogle5Value = () => {
        setToogleCount5(toogleCount5.concat({
            additional_offices: ""
        }));
    };
    const removeToogle4 = (item) => {
        setToogleCount4(toogleCount4.filter((abs, index) => index !== item));
    };
    const changeToogle4Value = (e, ind) => {
        setToogleCount4(toogleCount4.map((item, index) => {
            return index === ind ? {...item, [e.target.name]: e.target.value} : item
        }))
    };
    const removeToogle5 = (item) => {
        setToogleCount5(toogleCount5.filter((abs, index) => index !== item));
    };
    const changeToogle5Value = (e, ind) => {
        setToogleCount5(toogleCount5.map((item, index) => {
            return index === ind ? {...item, [e.target.name]: e.target.value} : item
        }))
    };
    const changeToogle41Value = (e, ind) => {
        setToogleCount41(toogleCount41.map((item, index) => {
            return index === ind ? {...item, [e.target.name]: e.target.value} : item
        }))
    };
    const addElementToogle41Value = () => {
        setToogleCount41(toogleCount41.concat({full_name_staff: ""}));
    };
    const removeToogle41 = (item) => {
        setToogleCount41(toogleCount41.filter((abs, index) => index !== item));
    };
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();
    const ref7 = useRef();
    const ref8 = useRef();
    const ref9 = useRef();
    const ref10 = useRef();
    const ref11 = useRef();
    const ref12 = useRef();
    const ref13 = useRef();
    const ref14 = useRef();
    const ref15 = useRef();
    const ref151 = useRef();
    const ref16 = useRef();
    const ref17 = useRef();
    const ref18 = useRef();
    const ref19 = useRef();
    const ref20 = useRef();
    let prover2 = true;
    const validate = () => {
        if (file4 === null) {
            ref20.current.className = "errorInput";
            prover2 = false;
        } else {
            ref20.current.classList.remove("errorInput");
        }
        if (file3 === null) {
            ref19.current.className = "errorInput";
            prover2 = false;
        } else {
            ref19.current.classList.remove("errorInput");
        }
        if (file2 === null) {
            ref18.current.className = "errorInput";
            prover2 = false;
        } else {
            ref18.current.classList.remove("errorInput");
        }
        if (file1 === null) {
            ref17.current.className = "errorInput";
            prover2 = false;
        } else {
            ref17.current.classList.remove("errorInput");
        }
        if (phoneYurPerson === "") {
            ref16.current.focus();
            ref16.current.className = "errorInput";
            prover2 = false;
        } else {
            ref16.current.classList.remove("errorInput");
        }
        if (yurPerson === "") {
            ref15.current.focus();
            ref15.current.className = "errorInput";
            prover2 = false;
        } else {
            ref15.current.classList.remove("errorInput");
        }
        if (inn === "") {
            ref151.current.focus();
            ref151.current.className = "errorInput";
            prover2 = false;
        } else {
            ref151.current.classList.remove("errorInput");
        }
        if (soogu === "") {
            ref14.current.focus();
            ref14.current.className = "errorInput";
            prover2 = false;
        } else {
            ref14.current.classList.remove("errorInput");
        }
        if (oked === "") {
            ref13.current.focus();
            ref13.current.className = "errorInput";
            prover2 = false;
        } else {
            ref13.current.classList.remove("errorInput");
        }
        if (mfo === "") {
            ref12.current.focus();
            ref12.current.className = "errorInput";
            prover2 = false;
        } else {
            ref12.current.classList.remove("errorInput");
        }
        if (raschot === "") {
            ref11.current.focus();
            ref11.current.className = "errorInput";
            prover2 = false;
        } else {
            ref11.current.classList.remove("errorInput");
        }
        if (bank === "") {
            ref10.current.focus();
            ref10.current.className = "errorInput";
            prover2 = false;
        } else {
            ref10.current.classList.remove("errorInput");
        }
        if (mail === "") {
            ref9.current.focus();
            ref9.current.className = "errorInput";
            prover2 = false;
        } else {
            ref9.current.classList.remove("errorInput");
        }
        if (siteName === "") {
            ref8.current.focus();
            ref8.current.className = "errorInput";
            prover2 = false;
        } else {
            ref8.current.classList.remove("errorInput");
        }
        if (phoneNumber === "") {
            ref7.current.focus();
            ref7.current.className = "errorInput";
            prover2 = false;
        } else {
            ref7.current.classList.remove("errorInput");
        }
        if (factAddress === "") {
            ref6.current.focus();
            ref6.current.className = "errorInput";
            prover2 = false;
        } else {
            ref6.current.classList.remove("errorInput");
        }
        if (yurAddress === "") {
            ref5.current.focus();
            ref5.current.className = "errorInput";
            prover2 = false;
        } else {
            ref5.current.classList.remove("errorInput");
        }
        if (statusOrgDate === "") {
            ref4.current.focus();
            ref4.current.className = "errorInput";
            prover2 = false;
        } else {
            ref4.current.classList.remove("errorInput");
        }
        if (statusOrgNum === "") {
            ref3.current.focus();
            ref3.current.className = "errorInput";
            prover2 = false;
        } else {
            ref3.current.classList.remove("errorInput");
        }
        if (objectName === "") {
            ref2.current.focus();
            ref2.current.className = "errorInput";
            prover2 = false;
        } else {
            ref2.current.classList.remove("errorInput");
        }
        if (fullName === "") {
            ref1.current.focus();
            ref1.current.className = "errorInput";
            prover2 = false;
        } else {
            ref1.current.classList.remove("errorInput");
        }
        return prover2;
    };
    const sendDataModal = () => {
        // if (validate()) {
        setMainModal(true);
        // }
    };
    const sendData = () => {
        bigData.append("is_accreditation", akk);
        bigData.append("is_re_accreditation", prAkk);
        bigData.append("is_area_expansion_accreditation", rasAkk);
        bigData.append("is_actualization_accreditation", aktAkk);
        bigData.append("is_area_reduction_accreditation", sokAkk);
        bigData.append("is_upgrade_new_version", perAkk);
        bigData.append("legal_entity_full_name", fullName);
        bigData.append("full_name_accreditation_object", objectName);
        bigData.append("documentary_confirmation_int", statusOrgNum);
        bigData.append("documentary_confirmation_date", statusOrgDate);
        bigData.append("legal_address", yurAddress);
        bigData.append("actual_address", factAddress);
        bigData.append("phone", phoneNumber);
        bigData.append("web_site", siteName);
        bigData.append("email", mail);
        bigData.append("bank_name", bank);
        bigData.append("tin", inn);
        bigData.append("full_name_legal_person", yurPerson);
        bigData.append("phone_number_legal_person", phoneYurPerson);
        bigData.append("full_name_head_certification", orgSer);
        bigData.append("phone_head_certification", phoneOrgSer);
        bigData.append("eval_cert_organ", akk1);
        bigData.append("eval_education", akk2);
        bigData.append("eval_production", akk3);
        bigData.append("eval_other_places", akk4);
        bigData.append("is_branches", toogle1);
        if (toogle1) {
            inputsCount?.map((item, index) => {
                bigData.append("branches[" + index + "]address", item.address);
                bigData.append("branches[" + index + "]phone_number", item.phone_number);
                bigData.append("branches[" + index + "]full_name_head", item.full_name_head);
            })
        }
        bigData.append("active_cert_programs", toogle21);
        if (toogle2) {
            bigData.append("outsourcing_pass", mark);
        }
        bigData.append("is_commercial_activity", toogle2);
        if (toogle2) {
            bigData.append("type_of_commercial_activity", typeOf);
        }
        bigData.append("certification_activity", toogle3);
        if (toogle3) {
            bigData.append("certification_activity_count", serCount);
        }
        bigData.append("is_accredited_organ", toogle4);
        if (toogle4) {
            toogleCount4?.map((item, index) => {
                bigData.append("accredit_organ[" + index + "]name", item.name);
                // bigData.append("accredit_organ[" + index + "]certificate_number", item.certificate_number);
                bigData.append("accredit_organ[" + index + "]accreditation_date", item.accreditation_date);
                bigData.append("accredit_organ[" + index + "]foreign_accredit", item.foreign_accredit);
            })
        }
        bigData.append("is_add_staff", toogle41);
        if (toogle41) {
            toogleCount41?.map((item, index) => {
                bigData.append("staff[" + index + "]full_name_staff", item.full_name_staff);
            })
        }
        bigData.append("is_add_offices", toogle5);
        if (toogle5) {
            toogleCount5?.map((item, index) => {
                bigData.append("offices[" + index + "]additional_offices", item.additional_offices);
            })
        }
        bigData.append("manage_system", srok);
        bigData.append("exam_frequently", srok2);
        bigData.append("internal_audit", toogle6);
        bigData.append("engaged_staff", toogle31);
        bigData.append("leader_analyses", toogle7);
        bigData.append("registration_number", registration_number);
        bigData.append("certificate_validity_period_from", certificate_validity_period_from);
        bigData.append("certificate_validity_period_to", certificate_validity_period_to);
        bigData.append("project_scope_accreditation", file1?.target?.files[0]);
        bigData.append("quality_guide", file2?.target?.files[0]);
        bigData.append("management_system_docs", file3?.target?.files[0]);
        bigData.append("information_about", file4?.target?.files[0]);
        bigData.append("mfo", mfo);
        bigData.append("oked", oked);
        bigData.append("payment_acc", raschot);
        bigData.append("soogu", soogu);
        axios.post(API_APTH + "apps/application/send/7/", bigData, AUTH)
            .then(res => {
                toast.success("OK");
                setMainModal(false);
                // window.location.reload()
            })
    };
    const clearCheckBoxes = () => {
        setAkk1(false)
        setAkk2(false)
        setAkk3(false)
        setAkk4(false)
    }
    useEffect(() => {

    }, []);
    return (
        <div className="ManagementSystemsCertification">

            <div className="container2">
                <h2 className="open-sans-bold main-title">{getText("ser75")} <br/>
                    {getText("xs1")}
                </h2>
                <Checks
                    akk={akk}
                    setAkk={setAkk}
                    prAkk={prAkk}
                    setPrAkk={setPrAkk}
                    aktAkk={aktAkk}
                    setAktAkk={setAktAkk}
                    sokAkk={sokAkk}
                    setSokAkk={setSokAkk}
                    perAkk={perAkk}
                    setPerAkk={setPerAkk}
                    rasAkk={rasAkk}
                    setRasAkk={setRasAkk}
                />
                {
                    prAkk === true || aktAkk === true || aktAkk === true || sokAkk === true || rasAkk === true ?
                        <RegNumber
                            setcertificate_validity_period_from={setcertificate_validity_period_from}
                            setregistration_number={setregistration_number}
                            setcertificate_validity_period_to={setcertificate_validity_period_to}
                        />
                        :
                        ""
                }
                <div className="big-box">
                    <h3 className="big-box-title open-sans-medium">
                        {getText("ser9")}
                    </h3>
                    <div className="row">
                        <OneInput
                            refSelect={ref1}
                            setState={setFullName}
                            star={true}
                            inputType="text"
                            font="open-sans-medium"
                            titleLabel={getText("ser14")}
                            myClass="my-input-groups col-md-6"
                        />
                        <OneInput
                            refSelect={ref2}
                            setState={setObjectName}
                            star={true}
                            inputType="text"
                            font="open-sans-medium"
                            titleLabel={getText("ser15")}
                            myClass="my-input-groups col-md-6"
                        />
                        <div className="my-input-groups col-md-6">
                            <label className="open-sans-medium">{getText("ser16")}</label>
                            <div className="row">
                                <OneInput
                                    refSelect={ref3}
                                    setState={setStatusOrgNum}
                                    star={true}
                                    inputType="text"
                                    font="open-sans-medium"
                                    titleLabel={getText("ser18")}
                                    myClass="col-md-6 d-flex flex-column   justify-content-between"
                                />
                                <OneInput
                                    refSelect={ref4}
                                    setState={setStatusOrgDate}
                                    star={true}
                                    inputType="date"
                                    font="open-sans-medium"
                                    titleLabel={getText("ser19")}
                                    myClass="col-md-6  "
                                />
                            </div>
                        </div>
                        <OneInput
                            refSelect={ref5}
                            setState={setYurAddress}
                            star={true}
                            inputType="text"
                            font="open-sans-medium"
                            titleLabel={getText("ser17")}
                            myClass="my-input-groups col-md-6"
                        />
                        <OneInput
                            refSelect={ref6}
                            setState={setFactAddress}
                            star={true}
                            inputType="text"
                            font="open-sans-medium"
                            titleLabel={getText("ser20")}
                            myClass="my-input-groups col-md-6"
                        />
                        <OneInput
                            refSelect={ref7}
                            setState={setPhoneNumber}
                            star={true}
                            inputType="text"
                            font="open-sans-medium"
                            titleLabel={getText("ser21")}
                            myClass="my-input-groups col-md-6"
                        />
                        <OneInput
                            refSelect={ref8}
                            setState={setSiteName}
                            star={true}
                            inputType="text"
                            font="open-sans-medium"
                            titleLabel={getText("ser22")}
                            myClass="my-input-groups col-md-6"
                        />
                        <OneInput
                            refSelect={ref9}
                            setState={setMail}
                            star={true}
                            inputType="mail"
                            font="open-sans-medium"
                            titleLabel={getText("ser23")}
                            myClass="my-input-groups col-md-6"
                        />
                        <OneInput
                            refSelect={ref10}
                            setState={setBank}
                            star={true}
                            inputType="mail"
                            font="open-sans-medium"
                            titleLabel={getText("ser24")}
                            myClass="my-input-groups col-md-6"
                        />
                        <OneInput
                            refSelect={ref11}
                            setState={setRaschot}
                            star={true}
                            inputType="text"
                            font="open-sans-medium"
                            titleLabel={getText("ser25")}
                            myClass="my-input-groups col-md-6"
                        />
                        <OneInput
                            refSelect={ref12}
                            setState={setMFO}
                            star={true}
                            inputType="number"
                            font="open-sans-medium"
                            titleLabel={getText("ser26")}
                            myClass="my-input-groups col-md-6"
                        />
                        <OneInput
                            refSelect={ref13}
                            setState={setOKED}
                            star={true}
                            inputType="number"
                            font="open-sans-medium"
                            titleLabel={getText("ser27")}
                            myClass="my-input-groups col-md-6"
                        />
                        <OneInput
                            refSelect={ref14}
                            setState={setSoogu}
                            star={true}
                            inputType="number"
                            font="open-sans-medium"
                            titleLabel={getText("ser28")}
                            myClass="my-input-groups col-md-6"
                        />
                        <OneInput
                            refSelect={ref151}
                            setState={setInn}
                            star={true}
                            inputType="text"
                            font="open-sans-medium"
                            titleLabel={getText("ser29")}
                            myClass="my-input-groups col-md-6"
                        />
                        <OneInput
                            refSelect={ref15}
                            setState={setYurPerson}
                            star={true}
                            inputType="text"
                            font="open-sans-medium"
                            titleLabel={getText("ser30")}
                            myClass="my-input-groups col-md-6"
                        />
                        <OneInput
                            refSelect={ref16}
                            setState={setPhoneYurPerson}
                            star={true}
                            inputType="text"
                            font="open-sans-medium"
                            titleLabel={getText("ser31")}
                            myClass="my-input-groups col-md-6"
                        />
                        <OneInput
                            refSelect={ref17}
                            setState={setOrgSer}
                            star={true}
                            inputType="text"
                            font="open-sans-medium"
                            titleLabel={getText("ser32")}
                            myClass="my-input-groups col-md-6"
                        />
                        <OneInput
                            refSelect={ref18}
                            setState={setPhoneOrgSer}
                            star={true}
                            inputType="text"
                            font="open-sans-medium"
                            titleLabel={getText("ser33")}
                            myClass="my-input-groups col-md-6"
                        />
                    </div>
                </div>
                <div className="big-box">
                    <h2 className="big-box-title">
                        {getText("ser331")}
                    </h2>
                    <div className="toggle">
                        <label className="open-sans-medium">{getText("ser34")}
                            <div>
                                <button onClick={() => setToogle1(true)}
                                        className={toogle1 ? "open-sans-medium active" : "open-sans-medium"}>{getText("ser76")}
                                </button>
                                <button onClick={() => setToogle1(false)}
                                        className={toogle1 ? "open-sans-medium " : "open-sans-medium active"}>{getText("ser77")}
                                </button>
                            </div>
                        </label>
                    </div>
                    {
                        toogle1
                            ?
                            <div className="many-checks">
                                <p className="open-sans-medium">
                                    {getText("ser35")}
                                </p>
                                {
                                    inputsCount?.map((item, index) => (
                                        <div className="row inputs-box">
                                            <div className="index open-sans-bold">
                                                {index + 1})
                                            </div>
                                            <button onClick={() => removeElement(index)}
                                                    className="close open-sans-bold">
                                                <img src="/img/close.png" alt=""/>
                                            </button>
                                            <div className="my-input-groups col-md-4">
                                                <label className="open-sans-medium">{getText("ser36")} </label>
                                                <input onChange={(e) => changeValue(e, index)} value={item.address}
                                                       name="address" type="text"/>
                                            </div>
                                            <div className="my-input-groups col-md-4">
                                                <label className="open-sans-medium">{getText("ser37")} </label>
                                                <input onChange={(e) => changeValue(e, index)} value={item.phone_number}
                                                       name="phone_number" type="text"/>
                                            </div>
                                            <div className="my-input-groups col-md-4">
                                                <label className="open-sans-medium"> {getText("ser38")}</label>
                                                <input onChange={(e) => changeValue(e, index)}
                                                       value={item.full_name_head} name="full_name_head" type="text"/>
                                            </div>
                                        </div>
                                    ))}
                                <div className="row d-flex justify-content-end">
                                    <button className='btn btn-primary-private d-inline ' onClick={addElement}>???????????????? ??????
                                    </button>
                                </div>
                            </div>
                            :
                            ""
                    }
                    <div className="toggle">
                        <label className="open-sans-medium">{getText("xs2")}
                            <div>
                                <button onClick={() => setToogle21(true)}
                                        className={toogle21 ? "open-sans-medium active" : "open-sans-medium"}>{getText("ser76")}
                                </button>
                                <button onClick={() => setToogle21(false)}
                                        className={toogle21 ? "open-sans-medium " : "open-sans-medium active"}>{getText("ser77")}
                                </button>
                            </div>
                        </label>
                    </div>
                    {
                        toogle21
                            ?
                            <div className="many-checks">
                                <p className="open-sans-medium">
                                    {getText("ser42")}
                                </p>
                                <div className="row">
                                    <div className="my-input-groups col-md-12">
                                        <label className="open-sans-medium">{getText("xs3")}</label>
                                        <input type="text" onChange={(e) => setMark(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            :
                            ""
                    }
                    <div className="toggle">
                        <label className="open-sans-medium">{getText("xs4")}</label>
                    </div>
                    <div className="many-checks">
                        <div className="check-list">
                            <input type="checkbox"
                                   onChange={() => setAkk1(!akk1)}
                                   disabled={akk2 === true || akk3 === true || akk4 === true ? true : false}
                                   id="cur11"/>
                            <label htmlFor="cur11" className="open-sans-medium">{getText("xs7")}</label>
                        </div>
                        <div className="check-list">
                            <input type="checkbox"
                                   onChange={() => setAkk2(!akk2)}
                                   disabled={akk1 === true || akk3 === true || akk4 === true ? true : false}
                                   id="cur12"/>
                            <label htmlFor="cur12" className="open-sans-medium">{getText("xs8")}</label>
                        </div>
                        <div className="check-list">
                            <input type="checkbox"
                                   onChange={() => setAkk3(!akk3)}
                                   disabled={akk2 === true || akk1 === true || akk4 === true ? true : false}
                                   id="cur13"/>
                            <label htmlFor="cur13" className="open-sans-medium">{getText("xs9")}</label>
                        </div>
                        <div className="check-list">
                            <input type="checkbox"
                                   onChange={() => setAkk4(!akk4)}
                                   disabled={akk2 === true || akk3 === true || akk1 === true ? true : false}
                                   id="cur14"/>
                            <label htmlFor="cur14" className="open-sans-medium">{getText("xs10")}</label>
                        </div>
                    </div>
                    <div className="toggle-select many-checks">
                        <label className="open-sans-medium">{getText("xs11")}</label>
                        <div className="m-0 pt-3 toggle-select-more">
                            <button onClick={() => setSrok2(0)}
                                    className={srok2 === 0 ? "open-sans-medium active" : "open-sans-medium"}>
                                {getText("xs12")}
                            </button>
                            <button onClick={() => setSrok2(1)}
                                    className={srok2 === 1 ? "open-sans-medium active" : "open-sans-medium"}>
                                {getText("xs13")}
                            </button>
                            <button onClick={() => setSrok2(2)}
                                    className={srok2 === 2 ? "open-sans-medium active" : "open-sans-medium"}>
                                {getText("xs14")}
                            </button>
                            <button onClick={() => setSrok2(3)}
                                    className={srok2 === 3 ? "open-sans-medium active" : "open-sans-medium"}>
                                {getText("xs15")}
                            </button>
                            <button onClick={() => setSrok2(4)}
                                    className={srok2 === 4 ? "open-sans-medium active" : "open-sans-medium"}>
                                {getText("xs16")}
                            </button>
                            <button onClick={() => setSrok2(5)}
                                    className={srok2 === 5 ? "open-sans-medium active" : "open-sans-medium"}>
                                {getText("xs17")}
                            </button>
                        </div>
                    </div>
                    <div className="toggle">
                        <label className="open-sans-medium">{getText("xs5")}
                            <div>
                                <button onClick={() => setToogle2(true)}
                                        className={toogle2 ? "open-sans-medium active" : "open-sans-medium"}>{getText("ser76")}
                                </button>
                                <button onClick={() => setToogle2(false)}
                                        className={toogle2 ? "open-sans-medium " : "open-sans-medium active"}>{getText("ser77")}
                                </button>
                            </div>
                        </label>
                    </div>
                    {
                        toogle2
                            ?
                            <div className="many-checks">
                                <p className="open-sans-medium">
                                    {getText("ser42")}
                                </p>
                                <div className="row">
                                    <div className="my-input-groups col-md-12">
                                        <label className="open-sans-medium">{getText("ser43")}</label>
                                        <input type="text" onChange={(e) => setTypeOf(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            :
                            ""
                    }
                    <div className="toggle">
                        <label className="open-sans-medium">{getText("xs6")}
                            <div>
                                <button onClick={() => setToogle31(true)}
                                        className={toogle31 ? "open-sans-medium active" : "open-sans-medium"}>{getText("ser76")}
                                </button>
                                <button onClick={() => setToogle31(false)}
                                        className={toogle31 ? "open-sans-medium " : "open-sans-medium active"}>{getText("ser77")}
                                </button>
                            </div>
                        </label>
                    </div>
                    <div className="toggle">
                        <label className="open-sans-medium">{getText("ser44")}
                            <div>
                                <button onClick={() => setToogle3(true)}
                                        className={toogle3 ? "open-sans-medium active" : "open-sans-medium"}>{getText("ser76")}
                                </button>
                                <button onClick={() => setToogle3(false)}
                                        className={toogle3 ? "open-sans-medium " : "open-sans-medium active"}>{getText("ser77")}
                                </button>
                            </div>
                        </label>
                    </div>
                    {
                        toogle3
                            ?
                            <div className="many-checks">
                                <p className="open-sans-medium">
                                    {getText("ser45")}
                                </p>
                                <div className="row">
                                    <div className="my-input-groups col-md-12">
                                        <label className="open-sans-medium">{getText("ser46")}</label>
                                        <input onChange={(e) => setSerCount(e.target.value)} type="number"/>
                                    </div>
                                </div>
                            </div>
                            :
                            ""
                    }
                    <div className="toggle">
                        <label className="open-sans-medium">{getText("ser47")}
                            <div>
                                <button onClick={() => setToogle4(true)}
                                        className={toogle4 ? "open-sans-medium active" : "open-sans-medium"}>{getText("ser76")}
                                </button>
                                <button onClick={() => setToogle4(false)}
                                        className={toogle4 ? "open-sans-medium " : "open-sans-medium active"}>{getText("ser77")}
                                </button>
                            </div>
                        </label>
                    </div>
                    {
                        toogle4
                            ?
                            <div className="many-checks">
                                <p className="open-sans-medium">
                                    {getText("ser48")}
                                </p>
                                {
                                    toogleCount4?.map((item, index) => (
                                        <div className="row inputs-box">
                                            <div className="index open-sans-bold">
                                                {index + 1})
                                            </div>
                                            <button onClick={() => removeToogle4(index)}
                                                    className="close open-sans-bold">
                                                <img src="/img/close.png" alt=""/>
                                            </button>
                                            <div className="my-input-groups col-md-6">
                                                <label className="open-sans-medium">{getText("ser49")}</label>
                                                <input type="text"
                                                       onChange={(e) => changeToogle4Value(e, index)}
                                                       value={item.name}
                                                       name="name"/>
                                            </div>
                                            <div className="my-input-groups col-md-6">
                                                <label className="open-sans-medium">{getText("ser50")}</label>
                                                <input type="date"
                                                       onChange={(e) => changeToogle4Value(e, index)}
                                                       value={item.accreditation_date}
                                                       name="accreditation_date"/>
                                            </div>
                                            <div className="my-input-groups col-md-12">
                                                <label className="open-sans-medium">{getText("ser51")}</label>
                                                <input type="text"
                                                       onChange={(e) => changeToogle4Value(e, index)}
                                                       value={item.foreign_accredit}
                                                       name="foreign_accredit"/>
                                            </div>
                                        </div>
                                    ))}
                                <div className="row d-flex justify-content-end">
                                    <button className='btn btn-primary-private d-inline '
                                            onClick={addElementToogle4Value}>???????????????? ??????
                                    </button>
                                </div>
                            </div>
                            :
                            ""
                    }
                    <div className="toggle">
                        <label className="open-sans-medium">{getText("io5")}
                            <div>
                                <button onClick={() => setToogle41(true)}
                                        className={toogle41 ? "open-sans-medium active" : "open-sans-medium"}>{getText("ser76")}
                                </button>
                                <button onClick={() => setToogle41(false)}
                                        className={toogle41 ? "open-sans-medium " : "open-sans-medium active"}>{getText("ser77")}
                                </button>
                            </div>
                        </label>
                    </div>
                    {
                        toogle41
                            ?
                            <div className="many-checks">
                                <p className="open-sans-medium">
                                    {getText("ser48")}
                                </p>
                                {
                                    toogleCount41?.map((item, index) => (
                                        <div className="row inputs-box">
                                            <div className="index open-sans-bold">
                                                {index + 1})
                                            </div>
                                            <button onClick={() => removeToogle41(index)}
                                                    className="close open-sans-bold">
                                                <img src="/img/close.png" alt=""/>
                                            </button>
                                            <div className="my-input-groups col-md-12">
                                                <label className="open-sans-medium">{getText("io6")}</label>
                                                <input onChange={(e) => changeToogle41Value(e, index)}
                                                       value={item.full_name_staff}
                                                       name="full_name_staff"
                                                       type="text"/>
                                            </div>
                                        </div>
                                    ))}
                                <div className="row d-flex justify-content-end">
                                    <button className='btn btn-primary-private d-inline '
                                            onClick={addElementToogle41Value}>???????????????? ??????
                                    </button>
                                </div>
                            </div>
                            :
                            ""
                    }
                    <div className="toggle">
                        <label className="open-sans-medium">{getText("ser52")}
                            <div>
                                <button onClick={() => setToogle5(true)}
                                        className={toogle5 ? "open-sans-medium active" : "open-sans-medium"}>{getText("ser76")}
                                </button>
                                <button onClick={() => setToogle5(false)}
                                        className={toogle5 ? "open-sans-medium " : "open-sans-medium active"}>{getText("ser77")}
                                </button>
                            </div>
                        </label>
                    </div>
                    {
                        toogle5
                            ?
                            <div className="many-checks">
                                <p className="open-sans-medium">
                                    {getText("ser53")}
                                </p>
                                {
                                    toogleCount5?.map((item, index) => (
                                        <div className="row inputs-box">
                                            <div className="index open-sans-bold">
                                                {index + 1})
                                            </div>
                                            <button onClick={() => removeToogle5(index)}
                                                    className="close open-sans-bold">
                                                <img src="/img/close.png" alt=""/>
                                            </button>
                                            <div className="my-input-groups col-md-12">
                                                <label className="open-sans-medium">{getText("ser54")}</label>
                                                <input type="text"
                                                       onChange={(e) => changeToogle5Value(e, index)}
                                                       value={item.additional_offices}
                                                       name="additional_offices"/>
                                            </div>
                                        </div>
                                    ))}
                                <div className="row d-flex justify-content-end">
                                    <button className='btn btn-primary-private d-inline '
                                            onClick={addElementToogle5Value}>???????????????? ??????
                                    </button>
                                </div>
                            </div>
                            :
                            ""
                    }
                    <SrokSelect
                        title={getText("ser55")}
                        srok={srok}
                        setSrok={setSrok}
                    />
                    <div className="toggle">
                        <label className="open-sans-medium">{getText("ser59")}
                            <div>
                                <button onClick={() => setToogle6(true)}
                                        className={toogle6 ? "open-sans-medium active" : "open-sans-medium"}>{getText("ser76")}
                                </button>
                                <button onClick={() => setToogle6(false)}
                                        className={toogle6 ? "open-sans-medium " : "open-sans-medium active"}>{getText("ser77")}
                                </button>
                            </div>
                        </label>
                    </div>
                    <div className="toggle">
                        <label className="open-sans-medium">{getText("ser60")}
                            <div>
                                <button onClick={() => setToogle7(true)}
                                        className={toogle7 ? "open-sans-medium active" : "open-sans-medium"}>{getText("ser76")}
                                </button>
                                <button onClick={() => setToogle7(false)}
                                        className={toogle7 ? "open-sans-medium " : "open-sans-medium active"}>{getText("ser77")}
                                </button>
                            </div>
                        </label>
                    </div>
                </div>
                {
                    prAkk === true || aktAkk === true || aktAkk === true || sokAkk === true || rasAkk === true ?
                        <RegNumber
                            setcertificate_validity_period_from={setcertificate_validity_period_from}
                            setregistration_number={setregistration_number}
                            setcertificate_validity_period_to={setcertificate_validity_period_to}
                        />
                        :
                        ""
                }
                <FileInputs
                    ref17={ref17} setFile1={setFile1}
                    ref18={ref18} setFile2={setFile2}
                    ref19={ref19} setFile3={setFile3}
                    ref20={ref20} setFile4={setFile4}
                />
                <div className="big-box justify-content-end d-flex footer-btn">
                    <button className="btn   open-sans-medium clear-btn">{getText("ser78")}</button>
                    <button type="button" className="btn   open-sans-medium add-btn"
                            onClick={sendDataModal}>{getText("send")}</button>
                </div>
            </div>
            <PersonnelCertificationCheckModal
                mainModal={mainModal} setMainModal={setMainModal}
                akk={akk} prAkk={prAkk} rasAkk={rasAkk} aktAkk={aktAkk}
                sokAkk={sokAkk} perAkk={perAkk} fullName={fullName}
                objectName={objectName} statusOrgNum={statusOrgNum}
                statusOrgDate={statusOrgDate}
                yurAddress={yurAddress} factAddress={factAddress} phoneNumber={phoneNumber}
                siteName={siteName} mail={mail} bank={bank} raschot={raschot} mfo={mfo}
                oked={oked} soogu={soogu} inn={inn} yurPerson={yurPerson} phoneYurPerson={phoneYurPerson}
                orgSer={orgSer} phoneOrgSer={phoneOrgSer} toogle1={toogle1} toogle2={toogle2}
                toogle3={toogle3} toogle31={toogle31} toogle4={toogle4} toogle5={toogle5} toogle6={toogle6}
                inputsCount={inputsCount} toogle41={toogle41} toogleCount41={toogleCount41}
                toogle7={toogle7} srok={srok} toogleCount5={toogleCount5}
                toogleCount4={toogleCount4} typeOf={typeOf} registration_number={registration_number}
                certificate_validity_period_from={certificate_validity_period_from}
                certificate_validity_period_to={certificate_validity_period_to} mark={mark}
                srok2={srok2} akk2={akk2} akk1={akk1} akk3={akk3} akk4={akk4} serCount={serCount}
                file1={file1} file2={file2} file3={file3} file4={file4} sendData={sendData}/>
        </div>
    );
};

export default PersonnelCertification;
