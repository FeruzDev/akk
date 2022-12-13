import React, {useEffect, useRef, useState} from 'react';
import {API_APTH, AUTH, SITE_LANG} from "../tools/Const";
import axios from "axios";
import Select from "react-select";
import {getText} from "../locales";
import {Modal, ModalFooter, ModalHeader} from "reactstrap";
import {toast} from "react-toastify";
import Checks from "./inputs/Checks";
import SrokSelect from "./inputs/SrokSelect";

const InspectionBody = () => {
    const [design, setDesign] = useState([])
    const [cert, setCert] = useState([])
    const [certValue, setCertValue] = useState(null)
    const [designValue, setDesignValue] = useState(null)
    const [locLang, setLocLang] = useState("ru")

    const [mainModal, setMainModal] = useState(false);

    const [toogle1, setToogle1] = useState(false);
    const [toogle2, setToogle2] = useState(false);
    const [toogle3, setToogle3] = useState(false);
    const [toogle4, setToogle4] = useState(false);
    const [toogle5, setToogle5] = useState(false);
    const [toogle6, setToogle6] = useState(false);
    const [toogle7, setToogle7] = useState(false);
    const [toogle8, setToogle8] = useState(false);
    const [srok, setSrok] = useState(null);

    const [akk, setAkk] = useState(false);
    const [prAkk, setPrAkk] = useState(false);
    const [rasAkk, setRasAkk] = useState(false);
    const [aktAkk, setAktAkk] = useState(false);
    const [sokAkk, setSokAkk] = useState(false);
    const [perAkk, setPerAkk] = useState(false);

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

    const [consulting_info, setconsulting_info] = useState("");
    const [registration_number, setregistration_number] = useState("");
    const [certificate_validity_period_from, setcertificate_validity_period_from] = useState("");
    const [certificate_validity_period_to, setcertificate_validity_period_to] = useState("");


    const [file1, setFile1] = useState(null);
    const [file2, setFile2] = useState(null);
    const [file3, setFile3] = useState(null);
    const [file4, setFile4] = useState(null);
    let bigData = new FormData();
    const changeLang = (lang) => {
        localStorage.setItem(SITE_LANG, lang);
        setLocLang(lang)
    };

    const [inputsCount, setInputsCount] = useState([{
        adress: "",
        phone_number: "",
        full_name_head: "",
    }]);
    const [toogleCount3, setToogleCount3] = useState([{
        mobile_complex: "",
    }]);
    const [toogleCount4, setToogleCount4] = useState([{
        full_name_staff: "",
    }]);
    const [toogleCount5, setToogleCount5] = useState([{
        additional_offices: "",
    }]);

    const addElement = () => {
        setInputsCount(inputsCount.concat({adress: "", phone_number: "", full_name_head: ""}));

    };
    const addElementToogle3Value = () => {
        setToogleCount3(toogleCount3.concat({mobile_complex: ""}));
    };
    const addElementToogle4Value = () => {
        setToogleCount4(toogleCount4.concat({full_name_staff: ""}));
    };
    const addElementToogle5Value = () => {
        setToogleCount5(toogleCount5.concat({additional_offices: ""}));
    };
    const removeElement = (item) => {
        setInputsCount(inputsCount.filter((abs, index) => index !== item));
    };
    const removeToogle3 = (item) => {
        setToogleCount3(toogleCount3.filter((abs, index) => index !== item));
    };

    const removeToogle4 = (item) => {
        setToogleCount4(toogleCount4.filter((abs, index) => index !== item));
    };
    const removeToogle5 = (item) => {
        setToogleCount5(toogleCount5.filter((abs, index) => index !== item));
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
        if (validate()) {
            setMainModal(true);
        }
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
        bigData.append("is_branches", toogle1);
        if (toogle1) {
            inputsCount?.map((item, index) => {
                bigData.append("branches[" + index + "]address", item.adress);
                bigData.append("branches[" + index + "]phone_number", item.phone_number);
                bigData.append("branches[" + index + "]full_name_head", item.full_name_head);
            })
        }

        bigData.append("is_commercial_activity", toogle2);
        if (toogle2) {
            bigData.append("type_of_commercial_activity", typeOf);
        }

        bigData.append("certification_activity", toogle3);
        if (toogle3) {
            toogleCount3?.map((item, index) => {
                bigData.append("mobile_complex[" + index + "]reg_number", item.mobile_complex);
            })

        }

        bigData.append("is_add_staff", toogle4);
        if (toogle4) {
            toogleCount4?.map((item, index) => {
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
        bigData.append("internal_audit", toogle6);
        bigData.append("leader_analyses", toogle7);

        bigData.append("is_consulting_company", toogle8);
        if (toogle8) {
            bigData.append("consulting_info", consulting_info);
        }
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

        designValue?.map((item) => {
            bigData.append("standard_designation", item.value);
        });
        certValue?.map((item) => {
            bigData.append("standard_certification", item.value);
        });
        axios.post(API_APTH + "apps/application/send/5/", bigData, AUTH)
            .then(res => {
                toast.success("OK");
                setMainModal(false);
                window.location.reload()
            })
    };
    useEffect(() => {
        if (localStorage.getItem("language") === "uz") (
            setLocLang("uz")
        );
        else (
            setLocLang("ru")
        )

    }, []);

    const changeValue = (e, ind) => {
        setInputsCount(inputsCount.map((item, index) => {
            return index === ind ? {...item, [e.target.name]: e.target.value} : item
        }))
    };
    const changeToogle3Value = (e, ind) => {
        setToogleCount3(toogleCount3.map((item, index) => {
            return index === ind ? {...item, [e.target.name]: e.target.value} : item
        }))
    };
    const changeToogle4Value = (e, ind) => {
        setToogleCount4(toogleCount4.map((item, index) => {
            return index === ind ? {...item, [e.target.name]: e.target.value} : item
        }))
    };
    const changeToogle5Value = (e, ind) => {
        setToogleCount5(toogleCount5.map((item, index) => {
            return index === ind ? {...item, [e.target.name]: e.target.value} : item
        }))
    };

    return (
        <div className="ManagementSystemsCertification">

            <div className="navbar-main">
                <div className="container d-flex justify-content-between align-items-center h-100">
                    <div className="logo">
                        <img src="/img/logo12.svg" alt=""/>
                    </div>
                    <div className="lang-btn">
                        <button
                            onClick={() => changeLang("ru")}
                            className={
                                locLang !== "uz"
                                    ? "active"
                                    : ""
                            }
                        >
                            Русский
                        </button>
                        <button
                            onClick={() => changeLang("uz")}
                            className={
                                locLang === "uz" ? "active" : ""
                            }
                        >
                            O'zbek
                        </button>
                    </div>
                </div>
            </div>
            <div className="container">
                <h2 className="open-sans-bold main-title">{getText("ser75")} <br/>
                    {getText("io1")}
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
                <div className="big-box">
                    <h3 className="big-box-title open-sans-medium">
                        {getText("ser9")}
                    </h3>
                    <div className="check-list">
                        <label className="open-sans-medium">{getText("ser10")}</label>
                        <label className="open-sans-medium" style={{marginLeft: "10px"}}>{getText("ser101")}</label>
                    </div>
                    <div className="row">
                        <div className="my-input-groups col-md-6 pr-20">
                            <label className="open-sans-medium">{getText("ser14")}<span
                                className="with-star">*</span></label>
                            <input type="text" ref={ref1} onChange={(e) => setFullName(e.target.value)}/>
                        </div>
                        <div className="my-input-groups col-md-6">
                            <label className="open-sans-medium">{getText("ser15")}<span
                                className="with-star">*</span></label>
                            <input type="text" ref={ref2} onChange={(e) => setObjectName(e.target.value)}/>
                        </div>
                        <div className="my-input-groups col-md-6">
                            <label className="open-sans-medium">{getText("ser16")}</label>
                            <div className="row">
                                <div className="col-md-6 d-flex flex-column   justify-content-between">
                                    <label className="open-sans-medium"> {getText("ser18")}<span
                                        className="with-star">*</span> </label>
                                    <input type="number" ref={ref3} onChange={(e) => setStatusOrgNum(e.target.value)}/>
                                </div>
                                <div className="col-md-6">
                                    <label className="open-sans-medium">{getText("ser19")} <span
                                        className="with-star">*</span></label>
                                    <input type="date" ref={ref4} onChange={(e) => setStatusOrgDate(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        <div className="my-input-groups col-md-6">
                            <label className="open-sans-medium">{getText("ser17")} <span className="with-star">*</span></label>
                            <input type="text" ref={ref5} onChange={(e) => setYurAddress(e.target.value)}/>
                        </div>
                        <div className="my-input-groups col-md-6 ">
                            <label className="open-sans-medium">{getText("ser20")}<span className="with-star">*</span>
                            </label>
                            <input type="text" ref={ref6} onChange={(e) => setFactAddress(e.target.value)}/>
                        </div>
                        <div className="my-input-groups col-md-6">
                            <label className="open-sans-medium">{getText("ser21")}<span className="with-star">*</span>
                            </label>
                            <input type="text" ref={ref7} onChange={(e) => setPhoneNumber(e.target.value)}/>
                        </div>
                        <div className="my-input-groups col-md-6">
                            <label className="open-sans-medium">{getText("ser22")}<span
                                className="with-star">*</span></label>
                            <input type="text" ref={ref8} onChange={(e) => setSiteName(e.target.value)}/>
                        </div>
                        <div className="my-input-groups col-md-6">
                            <label className="open-sans-medium">{getText("ser23")}<span
                                className="with-star">*</span></label>
                            <input type="mail" ref={ref9} onChange={(e) => setMail(e.target.value)}/>
                        </div>
                        <div className="my-input-groups col-md-6">
                            <label className="open-sans-medium">{getText("ser24")}<span
                                className="with-star">*</span></label>
                            <input type="text" ref={ref10} onChange={(e) => setBank(e.target.value)}/>
                        </div>
                        <div className="my-input-groups col-md-6">
                            <label className="open-sans-medium">{getText("ser25")}<span
                                className="with-star">*</span></label>
                            <input type="text" ref={ref11} onChange={(e) => setRaschot(e.target.value)}/>
                        </div>
                        <div className="my-input-groups col-md-6">
                            <label className="open-sans-medium">  {getText("ser26")}<span className="with-star">*</span></label>
                            <input type="number" ref={ref12} onChange={(e) => setMFO(e.target.value)}/>
                        </div>
                        <div className="my-input-groups col-md-6">
                            <label className="open-sans-medium">{getText("ser27")}<span
                                className="with-star">*</span></label>
                            <input type="number" ref={ref13} onChange={(e) => setOKED(e.target.value)}/>
                        </div>
                        <div className="my-input-groups col-md-6">
                            <label className="open-sans-medium">{getText("ser28")}<span
                                className="with-star">*</span></label>
                            <input type="number" ref={ref14} onChange={(e) => setSoogu(e.target.value)}/>
                        </div>
                        <div className="my-input-groups col-md-6">
                            <label className="open-sans-medium">{getText("ser29")}</label>
                            <input type="text" ref={ref151} onChange={(e) => setInn(e.target.value)}/>
                        </div>
                        <div className="my-input-groups col-md-6">
                            <label className="open-sans-medium">{getText("ser30")} <span className="with-star">*</span></label>
                            <input type="text" ref={ref15} onChange={(e) => setYurPerson(e.target.value)}/>
                        </div>
                        <div className="my-input-groups col-md-6">
                            <label className="open-sans-medium">{getText("ser31")}<span
                                className="with-star">*</span></label>
                            <input type="text" ref={ref16} onChange={(e) => setPhoneYurPerson(e.target.value)}/>
                        </div>
                        <div className="my-input-groups col-md-6">
                            <label className="open-sans-medium">{getText("ser32")}</label>
                            <input type="text" onChange={(e) => setOrgSer(e.target.value)}/>
                        </div>
                        <div className="my-input-groups col-md-6">
                            <label className="open-sans-medium">{getText("ser33")}</label>
                            <input type="text" onChange={(e) => setPhoneOrgSer(e.target.value)}/>
                        </div>

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
                                                <input onChange={(e) => changeValue(e, index)} value={item.adress}
                                                       name="adress" type="text"/>
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
                                    <button className='btn btn-primary d-inline ' onClick={addElement}>Добавить ещё
                                    </button>
                                </div>

                            </div>

                            :
                            ""
                    }

                    <div className="toggle">
                        <label className="open-sans-medium">{getText("io2")}
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
                        <label className="open-sans-medium">{getText("io3")}
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


                                {
                                    toogleCount3?.map((item, index) => (

                                        <div className="row inputs-box">
                                            <div className="index open-sans-bold">
                                                {index + 1})
                                            </div>
                                            <button onClick={() => removeToogle3(index)}
                                                    className="close open-sans-bold">
                                                <img src="/img/close.png" alt=""/>
                                            </button>
                                            <div className="my-input-groups col-md-12">
                                                <label className="open-sans-medium">{getText("io4")}</label>
                                                <input onChange={(e) => changeToogle3Value(e, index)}
                                                       value={item.mobile_complex}
                                                       name="mobile_complex"
                                                       type="text"/>
                                            </div>
                                        </div>
                                    ))}
                                <div className="row d-flex justify-content-end">
                                    <button className='btn btn-primary d-inline ' onClick={addElementToogle3Value}>Добавить ещё
                                    </button>
                                </div>

                            </div>
                            :
                            ""
                    }
                    <div className="toggle">
                        <label className="open-sans-medium">{getText("io5")}
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
                                            <div className="my-input-groups col-md-12">
                                                <label className="open-sans-medium">{getText("io6")}</label>
                                                <input onChange={(e) => changeToogle4Value(e, index)}
                                                       value={item.full_name_staff}
                                                       name="full_name_staff"
                                                       type="text"/>
                                            </div>
                                        </div>
                                    ))}
                                <div className="row d-flex justify-content-end">
                                    <button className='btn btn-primary d-inline ' onClick={addElementToogle4Value}>Добавить ещё
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
                                                <input onChange={(e) => changeToogle5Value(e, index)}
                                                       value={item.additional_offices}
                                                       name="additional_offices"
                                                       type="text"/>
                                            </div>
                                        </div>
                                    ))}
                                <div className="row d-flex justify-content-end">
                                    <button className='btn btn-primary d-inline ' onClick={addElementToogle5Value}>Добавить ещё
                                    </button>
                                </div>

                            </div>
                            :
                            ""
                    }
                    <div className="toggle-select">
                        <label className="open-sans-medium">{getText("ser55")}
                            <div>
                                <button onClick={() => setSrok(0)}
                                        className={srok === 0 ? "open-sans-medium active" : "open-sans-medium"}>
                                    {getText("ser56")}

                                </button>
                                <button onClick={() => setSrok(1)}
                                        className={srok === 1 ? "open-sans-medium active" : "open-sans-medium"}>
                                    {getText("ser57")}

                                </button>
                                <button onClick={() => setSrok(2)}
                                        className={srok === 2 ? "open-sans-medium active" : "open-sans-medium"}>
                                    {getText("ser58")}
                                </button>
                            </div>
                        </label>
                    </div>

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
                <div className="big-box">
                    <h2 className="big-box-title">
                        {getText("ser61")}
                    </h2>

                    <div className="toggle">
                        <label className="open-sans-medium">{getText("ser62")}
                            <div>
                                <button onClick={() => setToogle8(true)}
                                        className={toogle8 ? "open-sans-medium active" : "open-sans-medium"}>{getText("ser76")}
                                </button>
                                <button onClick={() => setToogle8(false)}
                                        className={toogle8 ? "open-sans-medium " : "open-sans-medium active"}>{getText("ser77")}
                                </button>
                            </div>
                        </label>
                    </div>
                    {
                        toogle8
                            ?
                            <div className="many-checks">
                                <p className="open-sans-medium">
                                    {getText("ser63")}
                                </p>

                                <div className="row">
                                    <div className="my-input-groups col-md-12">
                                        <label className="open-sans-medium">{getText("ser64")}</label>
                                        <input type="text" onChange={(e) => setconsulting_info(e.target.value)}/>
                                    </div>

                                </div>
                            </div>
                            :
                            ""
                    }
                </div>
                <div className="big-box">
                    <h2 className="big-box-title">
                        {getText("ser65")}
                    </h2>
                    <div className="row">
                        <div className="my-input-groups col-md-6">
                            <label className="open-sans-medium">{getText("ser66")}</label>
                            <input type="text" onChange={(e) => setregistration_number(e.target.value)}/>
                        </div>
                        <div className="my-input-groups col-md-6">
                            <label className="open-sans-medium">{getText("ser67")}</label>
                            <div className="row d-flex">
                                <div className="date-field col-md-6  d-flex align-items-center">
                                    <label className="open-sans-medium">{getText("ser68")}</label>
                                    <input type="date"
                                           onChange={(e) => setcertificate_validity_period_from(e.target.value)}/>
                                </div>
                                <div className="date-field col-md-6 d-flex align-items-center">
                                    <label className="open-sans-medium">{getText("ser69")} </label>
                                    <input type="date"
                                           onChange={(e) => setcertificate_validity_period_to(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="big-box">
                    <h2 className="big-box-title">
                        {getText("ser70")}
                    </h2>
                    <div className="row">
                        <div className="my-input-groups col-md-6">
                            <label className="open-sans-medium">{getText("ser71")} <span className="with-star">*</span>
                            </label>
                            <input type="file" ref={ref17} onChange={(e) => setFile1(e)}/>
                        </div>
                        <div className="my-input-groups col-md-6">
                            <label className="open-sans-medium">{getText("ser72")} <span className="with-star"
                                                                                         style={{bottom: "0 !important"}}>*</span>
                            </label>
                            <input type="file" ref={ref18} onChange={(e) => setFile2(e)} accept=".zip,.rar,.7zip"/>
                        </div>
                        <div className="my-input-groups col-md-6">
                            <label className="open-sans-medium">{getText("ser73")} <span className="with-star">*</span></label>
                            <input type="file" ref={ref19} onChange={(e) => setFile3(e)} accept=".zip,.rar,.7zip"/>
                        </div>
                        <div className="my-input-groups col-md-6">
                            <label className="open-sans-medium">{getText("ser74")} <span className="with-star">*</span></label>
                            <input type="file" ref={ref20} onChange={(e) => setFile4(e)}/>
                        </div>
                    </div>
                </div>
                <div className="big-box justify-content-end d-flex footer-btn">
                    <button className="btn   open-sans-medium clear-btn">{getText("ser78")}</button>
                    <button type="button" className="btn   open-sans-medium add-btn"
                            onClick={sendDataModal}>{getText("send")}</button>
                </div>
            </div>
            <Modal
                isOpen={mainModal}
                size="xl"
                toggle={() => setMainModal(false)}
                className="main-modal"
                dialogClassName="modal-100w"
            >
                <ModalHeader toggle={() => setMainModal(false)}>
                    {getText("ser75")}
                </ModalHeader>

                <div className="main-modal-content">
                    <div className="big-box">
                        <h3 className="big-box-title open-sans-medium">
                            {getText("ser2")}
                        </h3>
                        <div className="check-list d-flex align-items-center">
                            {akk ? (
                                <img className="check-img" src="/img/bird.png"/>
                            ) : (
                                <img className="check-img" src="/img/del.png"/>
                            )}
                            <label className="open-sans-medium">{getText("ser3")}</label>
                        </div>
                        <div className="check-list d-flex align-items-center">
                            {prAkk ? (
                                <img className="check-img" src="/img/bird.png"/>
                            ) : (
                                <img className="check-img" src="/img/del.png"/>
                            )}
                            <label className="open-sans-medium">{getText("ser4")}</label>
                        </div>
                        <div className="check-list d-flex align-items-center">
                            {rasAkk ? (
                                <img className="check-img" src="/img/bird.png"/>
                            ) : (
                                <img className="check-img" src="/img/del.png"/>
                            )}
                            <label className="open-sans-medium">{getText("ser5")} </label>
                        </div>
                        <div className="check-list d-flex align-items-center">
                            {aktAkk ? (
                                <img className="check-img" src="/img/bird.png"/>
                            ) : (
                                <img className="check-img" src="/img/del.png"/>
                            )}
                            <label className="open-sans-medium">{getText("ser6")} </label>
                        </div>
                        <div className="check-list d-flex align-items-center">
                            {sokAkk ? (
                                <img className="check-img" src="/img/bird.png"/>
                            ) : (
                                <img className="check-img" src="/img/del.png"/>
                            )}
                            <label className="open-sans-medium">{getText("ser7")} </label>
                        </div>
                        <div className="check-list d-flex align-items-center">
                            {perAkk ? (
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
                                <span className="mb-3">{fullName ? fullName : "-"}</span>
                            </div>
                            <div className="my-input-groups col-md-6 m-0 justify-content-center">
                                <label className="open-sans-bold">{getText("ser15")} </label>
                                <span className="mb-3">{objectName ? objectName : "-"}</span>
                            </div>
                            <div className="my-input-groups col-md-6 m-0 justify-content-center">
                                <label className="open-sans-bold"> {getText("ser16")} </label>
                                <div className="row">
                                    <div className="col-md-6 m-0 justify-content-center">
                                        <label className="open-sans-bold"> {getText("ser18")} </label>
                                        <span className="mb-3">{statusOrgNum ? statusOrgNum : "-"}</span>
                                    </div>
                                    <div className="col-md-6 m-0 justify-content-center">
                                        <label className="open-sans-bold">{getText("ser19")}</label>
                                        <span className="mb-3">{statusOrgDate ? statusOrgDate : "-"}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="my-input-groups col-md-6 m-0 justify-content-center">
                                <label className="open-sans-bold"> {getText("ser17")} </label>
                                <span className="mb-3">{yurAddress ? yurAddress : "-"}</span>
                            </div>
                            <div className="my-input-groups col-md-6 m-0 justify-content-center">
                                <label className="open-sans-bold">{getText("ser20")} </label>
                                <span className="mb-3">{factAddress ? factAddress : "-"}</span>
                            </div>
                            <div className="my-input-groups col-md-6 m-0 justify-content-center">
                                <label className="open-sans-bold">{getText("ser21")} </label>
                                <span className="mb-3">{phoneNumber ? phoneNumber : "-"}</span>
                            </div>
                            <div className="my-input-groups col-md-6 m-0 justify-content-center">
                                <label className="open-sans-bold">{getText("ser22")} </label>
                                <span className="mb-3">{siteName ? siteName : "-"}</span>
                            </div>
                            <div className="my-input-groups col-md-6 m-0 justify-content-center">
                                <label className="open-sans-bold">{getText("ser23")}</label>
                                <span className="mb-3">{mail ? mail : "-"}</span>
                            </div>
                            <div className="my-input-groups col-md-6 m-0 justify-content-center">
                                <label className="open-sans-bold">{getText("ser24")}</label>
                                <span className="mb-3">{bank ? bank : "-"}</span>
                            </div>
                            <div className="my-input-groups col-md-6 m-0 justify-content-center">
                                <label className="open-sans-bold">{getText("ser25")}</label>
                                <span className="mb-3">{raschot ? raschot : "-"}</span>
                            </div>
                            <div className="my-input-groups col-md-6 m-0 justify-content-center">
                                <label className="open-sans-bold">{getText("ser26")}</label>
                                <span className="mb-3">{mfo ? mfo : "-"}</span>
                            </div>
                            <div className="my-input-groups col-md-6 m-0 justify-content-center">
                                <label className="open-sans-bold">{getText("ser27")}</label>
                                <span className="mb-3">{oked ? oked : "-"}</span>
                            </div>
                            <div className="my-input-groups col-md-6 m-0 justify-content-center">
                                <label className="open-sans-bold">{getText("ser28")}</label>
                                <span className="mb-3">{soogu ? soogu : "-"}</span>
                            </div>
                            <div className="my-input-groups col-md-6 m-0 justify-content-center">
                                <label className="open-sans-bold">{getText("ser29")} </label>
                                <span className="mb-3">{inn ? inn : "-"}</span>
                            </div>
                            <div className="my-input-groups col-md-6 m-0 justify-content-center">
                                <label className="open-sans-bold">{getText("ser30")} </label>
                                <span className="mb-3">{yurPerson ? yurPerson : "-"}</span>
                            </div>
                            <div className="my-input-groups col-md-6 m-0 justify-content-center">
                                <label className="open-sans-bold">{getText("ser31")}</label>
                                <span className="mb-3">{phoneYurPerson ? phoneYurPerson : "-"}</span>
                            </div>
                            <div className="my-input-groups col-md-6 m-0 justify-content-center">
                                <label className="open-sans-bold">{getText("ser32")}</label>
                                <span className="mb-3">{orgSer ? orgSer : "-"}</span>
                            </div>
                            <div className="my-input-groups col-md-6 m-0 justify-content-center">
                                <label className="open-sans-bold">{getText("ser33")}</label>
                                <span className="mb-3">{phoneOrgSer ? phoneOrgSer : "-"}</span>
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
                                    {toogle1 ? (
                                        <img className="check-img-md" src="/img/bird.png"/>
                                    ) : (
                                        <img className="check-img-md" src="/img/del.png"/>
                                    )}

                                </div>
                            </label>
                        </div>
                        {
                            toogle1
                                ?
                                <div className="many-checks-items mt-4">
                                    {
                                        inputsCount?.map((item, index) => (
                                            <div className="row inputs-box">
                                                <div className="index open-sans-bold">
                                                    {index + 1})
                                                </div>
                                                <div className="my-input-groups col-md-6">
                                                    <label className="open-sans-bold">{getText("ser36")} </label>
                                                    <span>{item?.adress ? item.adress : "-"}</span>
                                                </div>
                                                <div className="my-input-groups col-md-6">
                                                    <label className="open-sans-bold">{getText("ser37")} </label>
                                                    <span>{item?.phone_number ? item.phone_number : "-"}</span>
                                                </div>
                                                <div className="my-input-groups col-md-6">
                                                    <label className="open-sans-bold"> {getText("ser38")}</label>
                                                    <span>{item?.full_name_head ? item.full_name_head : "-"}</span>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>
                                :
                                ""
                        }
                        <div className="toggle">
                            <label className="open-sans-bold">{getText("io2")}
                                <div>
                                    {toogle2 ? (
                                        <img className="check-img-md" src="/img/bird.png"/>
                                    ) : (
                                        <img className="check-img-md" src="/img/del.png"/>
                                    )}
                                </div>
                            </label>
                        </div>

                        {
                            toogle2
                                ?
                                <div className="many-checks-items mt-4">
                                    <div className="row inputs-box pt-0 pb-0">
                                        <div className="my-input-groups col-md-12">
                                            <label className="open-sans-bold">{getText("ser43")}</label>
                                            <span>{typeOf ? typeOf : "-"}</span>
                                        </div>
                                    </div>
                                </div>
                                :
                                ""
                        }

                        <div className="toggle">
                            <label className="open-sans-bold">
                                {getText("io3")}
                                <div>
                                    {toogle3 ? (
                                        <img className="check-img-md" src="/img/bird.png"/>
                                    ) : (
                                        <img className="check-img-md" src="/img/del.png"/>
                                    )}
                                </div>
                            </label>
                        </div>
                        {
                            toogle3
                                ?
                                <div className="many-checks-item">
                                    {
                                        toogleCount3?.map((item, index)=>(
                                            <div className="row inputs-box">
                                                <div className="index open-sans-bold">
                                                    {index + 1})
                                                </div>
                                                <div className="my-input-groups col-md-12">
                                                    <label className="open-sans-bold">{getText("ser46")}</label>

                                                    <span>{item.mobile_complex ? item.mobile_complex : "-"}</span>
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
                                    {toogle4 ? (
                                        <img className="check-img-md" src="/img/bird.png"/>
                                    ) : (
                                        <img className="check-img-md" src="/img/del.png"/>
                                    )}
                                </div>
                            </label>
                        </div>
                        {
                            toogle4
                                ?
                                <div className="many-checks-items">

                                    {
                                        toogleCount4?.map((item, index)=>(
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
                                    {toogle5 ? (
                                        <img className="check-img-md" src="/img/bird.png"/>
                                    ) : (
                                        <img className="check-img-md" src="/img/del.png"/>
                                    )}
                                </div>
                            </label>
                        </div>
                        {
                            toogle5
                                ?
                                <div className="many-checks-items">
                                    {
                                        toogleCount5?.map((item, index)=>(
                                            <div className="row inputs-box">
                                                <div className="index open-sans-bold">
                                                    {index + 1})
                                                </div>
                                                <div className="my-input-groups col-md-12">
                                                    <label className="open-sans-bold">{getText("ser54")}</label>

                                                    <span>{item.additional_offices ? item.additional_offices : "-"}</span>
                                                </div>
                                            </div>
                                        ))
                                    }
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
                            <label className="open-sans-bold">{getText("ser59")}
                                <div>
                                    {toogle6 ? (
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
                                    {toogle7 ? (
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
                            {getText("ser61")}
                        </h2>
                        <div className="toggle">
                            <label className="open-sans-bold">{getText("ser62")}
                                <div>
                                    {toogle8 ? (
                                        <img className="check-img-md" src="/img/bird.png"/>
                                    ) : (
                                        <img className="check-img-md" src="/img/del.png"/>
                                    )}
                                </div>
                            </label>
                        </div>
                        {
                            toogle8
                                ?
                                <div className="many-checks-items">

                                            <div className="row inputs-box pt-2">

                                                <div className="my-input-groups col-md-12">
                                                    <label className="open-sans-bold">{getText("ser64")}</label>

                                                    <span>{consulting_info ?  consulting_info : "-"}</span>
                                                </div>
                                            </div>

                                </div>
                                :
                                ""
                        }
                    </div>
                    <div className="big-box">
                        <h2 className="big-box-title">
                            {getText("ser65")}
                        </h2>
                        <div className="row">
                            <div className="my-input-groups col-md-6">
                                <label className="open-sans-medium">{getText("ser66")}</label>
                                <span className="mb-3">{registration_number ? registration_number : "-"}</span>
                            </div>
                            <div className="my-input-groups col-md-6">
                                <label className="open-sans-medium">{getText("ser67")}</label>
                                <div className="row d-flex">
                                    <div className="date-field col-md-6  d-flex align-items-center">
                                        <label className="open-sans-medium">{getText("ser68")}</label>
                                        <span
                                            className="mb-2">{certificate_validity_period_from ? certificate_validity_period_from : "-"}</span>
                                    </div>
                                    <div className="date-field col-md-6 d-flex align-items-center">
                                        <label className="open-sans-medium">{getText("ser69")} </label>
                                        <span
                                            className="mb-2">{certificate_validity_period_to ? certificate_validity_period_to : "-"}</span>
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
                                    {file1 ? (
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
                                    {file2 ? (
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
                                    {file3 ? (
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
                                    {file4 ? (
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
                        onClick={() => setMainModal(false)}
                    >
                        {getText("cancel")}
                    </button>
                    <button onClick={sendData} className="modal-save-btn">
                        {getText("send")}
                    </button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default InspectionBody;