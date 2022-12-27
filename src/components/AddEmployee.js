import React, { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";
import { API_APTH, AUTH, SITE_LANG } from "../tools/Const";
import { toast } from "react-toastify";
import LocationModal from "./modals/LocationModal";
import PropiskaModal from "./modals/PropiskaModal";
import NationModal from "./modals/NationModal";
import PositionModal from "./modals/PositionModal";
import LangModal from "./modals/LangModal";
import CompetencyModal from "./modals/CompetencyModal";
import UniversityModal from "./modals/UniversityModal";
import MgModal from "./modals/MgModal";
import AspModal from "./modals/AspModal";
import DcModal from "./modals/DcModal";
import AcModal from "./modals/AcModal";
import ConfilctModal from "./modals/ConfilctModal";
import { getText } from "../locales";
import FactoryModal from "./modals/FactoryModal";
import SerModal from "./modals/SerModal";
import FamilyModal from "./modals/FamilyModal";
import MainModal from "./modals/MainModal";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const AddEmployee = () => {
  const data = [];
  let bigData = new FormData();
  const [locLang, setLocLang] = useState("ru")

  const changeLang = (lang) => {
    localStorage.setItem(SITE_LANG, lang);
    setLocLang(lang)
  };
  // modal
  const [mainModal, setMainModal] = useState(false);
  const [locationModal, setLocationModal] = useState(false);
  const [locationModalSecond, setLocationModalSecond] = useState(false);
  const [propiskaModal, setPropiskaModal] = useState(false);
  const [propiskaModalSecond, setPropiskaModalSecond] = useState(false);
  const [nationModal, setNationModal] = useState(false);
  const [positionModal, setPositionModal] = useState(false);
  const [confilictModal, setConfilictModal] = useState(false);
  const [langModal, setLangModal] = useState(false);
  const [compModal, setCompModal] = useState(false);
  const [compModalSecond, setCompModalSecond] = useState(false);
  const [unModal1, setUnModal1] = useState(false);
  const [unModal2, setUnModal2] = useState(false);
  const [unModal3, setUnModal3] = useState(false);
  const [unModal4, setUnModal4] = useState(false);
  const [unModal5, setUnModal5] = useState(false);
  const [unModalSecond1, setUnModalSecond1] = useState(false);
  const [unModalSecond2, setUnModalSecond2] = useState(false);
  const [unModalSecond3, setUnModalSecond3] = useState(false);
  const [unModalSecond4, setUnModalSecond4] = useState(false);
  const [unModalSecond5, setUnModalSecond5] = useState(false);
  const [unModalThird1, setUnModalThird1] = useState(false);
  const [unModalThird2, setUnModalThird2] = useState(false);
  const [unModalThird3, setUnModalThird3] = useState(false);
  const [unModalThird4, setUnModalThird4] = useState(false);
  const [unModalThird5, setUnModalThird5] = useState(false);
  const [factoryName, setFactoryName] = useState(false);
  const [certificate, setCertificate] = useState(false);
  const [family, setFamily] = useState(false);



  // info user
  const [users, setUsers] = useState([]);
  const [usersValue, setUsersValue] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthday, setBirthday] = useState("");
  const [location, setLocation] = useState([]);
  const [locationValue, setLocationValue] = useState(null);
  const [sferaAkk, setSferaAkk] = useState("");
  const [dateWork, setDateWork] = useState("");
  const [adressPropiska, setAdressPropiska] = useState("");
  const [workExpresience, setWorkExpresience] = useState([]);
  const [audit, setAudit] = useState("");
  const [reccomend, setReccomend] = useState(null);
  const [bachelorList, setBachelorList] = useState([]);
  const [bachelorValue, setBachelorValue] = useState(null);
  const [magstrList, setMagstrList] = useState([]);
  const [magstrValue, setMagstrValue] = useState("");
  const [aspirantValue, setAspirantValue] = useState("");
  const [aspirantList, setAspirantList] = useState([]);
  const [doctorantValue, setDoctorantValue] = useState("");
  const [doctorantList, setDoctorantList] = useState([]);
  const [academikValue, setAcademikValue] = useState("");
  const [academikList, setAcademikList] = useState([]);
  const [partiya, setPartiya] = useState("");
  const [bilet, setBilet] = useState("");
  const [nagrad, setNagrad] = useState("");
  const [workAdress, setWorkAdress] = useState("");
  const [factAdress, setFactAdress] = useState("");
  const [agreeCenter, setAgreeCenter] = useState("");
  const [lastWork, setLastWork] = useState("");
  const [status, setStatus] = useState([]);
  const [statusValue, setStatusValue] = useState(null);
  const [statusCenter, setStatusCenter] = useState(false);
  const [uvolen, setUvolen] = useState(false);
  const [pic, setPic] = useState(null);
  const [cv, setCv] = useState(null);
  const [propiskaValue, setpropiskaValue] = useState(null);
  const [nation, setNation] = useState(null);
  const [nationValue, setNationValue] = useState(null);
  const [getNation, setGetNation] = useState([]);
  const [position, setPosition] = useState(null);
  const [positionValue, setPositionValue] = useState(null);
  const [getPosition, setGetPosition] = useState([]);
  const [confilict, setConfilict] = useState(null);
  const [confilictValue, setConfilictValue] = useState("");
  const [getConfilict, setGetConfilict] = useState([]);
  const [lang, setLang] = useState(null);
  const [langValue, setLangValue] = useState("");
  const [getLang, setGetLang] = useState([]);
  const [comp, setComp] = useState(null);
  const [compValue, setCompValue] = useState("");
  const [getComp, setGetComp] = useState([]);
  const [factoryNameValue, setFactoryNameValue] = useState([]);
  const [certificateValue, setCertificateValue] = useState([]);
  const [familyValue, setFamilyValue] = useState([]);
  const [facId, setFacId] = useState("");
  const [famId, setFamId] = useState("");
  const [itemFamily, setItemFamily] = useState("");
  const [facIndex, setIndex] = useState("");
  const [serId, setSerId] = useState("");
  const getUsersList = () => {
    axios.get(API_APTH + "users/list/", AUTH).then((res) => {
      setUsers(res.data);
    });
  };
  const getCityList = () => {
    axios.get(API_APTH + "apps/references/city/", AUTH).then((res) => {
      setLocation(res.data);
    });
  };
  const getNationData = () => {
    axios.get(API_APTH + "apps/references/nation/", AUTH).then((res) => {
      setGetNation(res.data);
    });
  };
  const getPositionData = () => {
    axios.get(API_APTH + "apps/references/position/", AUTH).then((res) => {
      setGetPosition(res.data);
    });
  };
  const getConfilictData = () => {
    axios
      .get(API_APTH + "apps/references/conflict_of_interest/", AUTH)
      .then((res) => {
        setGetConfilict(res.data);
      });
  };
  const getLangData = () => {
    axios
      .get(API_APTH + "apps/references/foreign_languages/", AUTH)
      .then((res) => {
        setGetLang(res.data);
      });
  };
  const getCompData = () => {
    axios.get(API_APTH + "apps/references/competency/", AUTH).then((res) => {
      setGetComp(res.data);
    });
  };
  const getStatusData = () => {
    axios.get(API_APTH + "apps/references/status/", AUTH).then((res) => {
      setStatus(res.data);
    });
  };
  const getBachelorData = () => {
    axios.get(API_APTH + "apps/references/bachelor/", AUTH).then((res) => {
      setBachelorList(res.data);
    });
  };
  const getMagstrData = () => {
    axios.get(API_APTH + "apps/references/magistracy/", AUTH).then((res) => {
      setMagstrList(res.data);
    });
  };
  const getAspirantData = () => {
    axios.get(API_APTH + "apps/references/phd/", AUTH).then((res) => {
      setAspirantList(res.data);
    });
  };
  const getDoctorantData = () => {
    axios.get(API_APTH + "apps/references/dr_science/", AUTH).then((res) => {
      setDoctorantList(res.data);
    });
  };
  const getAcademikData = () => {
    axios.get(API_APTH + "apps/references/academician/", AUTH).then((res) => {
      setAcademikList(res.data);
    });
  };
  const [photo123, setphoto123] = useState("/img/Camera.png");
  const uploadImg = (event) => {
    setphoto123(URL.createObjectURL(event.target.files[0]));
    setPic(event);
  };
  const uploadImg2 = (event) => {
    // bigData.append("resume",  event.target.value)
    setCv(event);
    document.getElementById("img3").style.display = "block";
    document.getElementById("img2").style.display = "none";
  };
  const facModalOpen = (id, index) => {
    setFacId(id);
    setFactoryName(true);
  };

  const SerModalOpen = (id, index) => {
    setSerId(id);
    setCertificate(true);
  };
  const familyModalOpen = (id, item) => {
    setFamId(id);
    setItemFamily(item);
    setFamily(true);
  };
  let langList = [];
  let compList = [];
  let statusList = [];
  let confilictList = [];
  // validation
  const [errors, setErrors] = useState({
    user: "",
    phone_number: "",
    birthday: "",
    address: "",
    work: "",
    start_at_accreditation: "",
    fact_live_place: "",
    first_working_date: "",
    centre_agree: "",
    place_of_birth: "",
    nation: "",
    bachelor: "",
    work_position: "",
    location: "",
    title_of_exp: "",
  });
  let prover2 = true;
  const validate = () => {
    if (usersValue === null) {
      setErrors({ ...errors, user: "to'ldiring" });
      prover2 = false;
    }
    if (phoneNumber === "") {
      setErrors({ ...errors, phone_number: "to'ldiring" });
      prover2 = false;
    }
    if (birthday === "") {
      setErrors({ ...errors, birthday: "to'ldiring" });
      prover2 = false;
    }
    if (adressPropiska === "") {
      setErrors({ ...errors, address: "to'ldiring" });
      prover2 = false;
    }
    if (workAdress === "") {
      setErrors({ ...errors, work: "to'ldiring" });
      prover2 = false;
    }
    if (sferaAkk === "") {
      setErrors({ ...errors, start_at_accreditation: "to'ldiring" });
      prover2 = false;
    }
    if (dateWork === "") {
      setErrors({ ...errors, first_working_date: "to'ldiring" });
      prover2 = false;
    }
    if (factAdress === "") {
      setErrors({ ...errors, fact_live_place: "to'ldiring" });
      prover2 = false;
    }
    if (agreeCenter === "") {
      setErrors({ ...errors, centre_agree: "to'ldiring" });
      prover2 = false;
    }
    if (propiskaValue === null) {
      setErrors({ ...errors, place_of_birth: "to'ldiring" });
      prover2 = false;
    }
    if (nationValue === null) {
      setErrors({ ...errors, nation: "to'ldiring" });
      prover2 = false;
    }
    if (bachelorValue === null) {
      setErrors({ ...errors, bachelor: "to'ldiring" });
      prover2 = false;
    }
    if (positionValue === null) {
      setErrors({ ...errors, work_position: "to'ldiring" });
      prover2 = false;
    }
    if (locationValue === null) {
      setErrors({ ...errors, location: "to'ldiring" });
      prover2 = false;
    }
    if (statusValue === null) {
      setErrors({ ...errors, title_of_exp: "to'ldiring" });
      prover2 = false;
    }
    return prover2;
  };



  const [allData, setAllData] = useState(null);
  const sendData2 = (e, value) => {
    // e.preventDefault();
    if (validate()) {
      setMainModal(true);
      toast.success("ok");
    } else {
      toast.warning("Warning");
    }
  };


  const sendAllData = () => {
    bigData.append("photo_pic", pic.target.files[0]);
    bigData.append("resume", cv.target.files[0]);
    bigData.append("address", adressPropiska);
    bigData.append("phone_number", phoneNumber);
    bigData.append("work", workAdress);
    bigData.append("start_at_accreditation", sferaAkk);
    bigData.append("partition", partiya);
    bigData.append("military_special_rank", bilet);
    bigData.append("graduate_by_government", nagrad);
    bigData.append("birthday", birthday);
    bigData.append("fact_live_place", factAdress);
    bigData.append("last_work", lastWork);
    bigData.append("work_xp", workExpresience);
    bigData.append("agree_status", statusCenter);
    bigData.append("first_working_date", dateWork);
    bigData.append("centre_agree", agreeCenter);
    bigData.append("is_fired", uvolen);
    bigData.append("audit_count", audit);
    bigData.append("user", usersValue?.value);
    bigData.append("nation", nationValue?.value);
    bigData.append("place_of_birth", propiskaValue?.value);
    bigData.append("bachelor", bachelorValue?.value);
    bigData.append("magistracy", magstrValue?.value);
    bigData.append("phd", aspirantValue?.value);
    bigData.append("doctor_science", doctorantValue?.value);
    bigData.append("academician", academikValue?.value);
    bigData.append("work_position", positionValue?.value);
    bigData.append("location", locationValue?.value);
    bigData.append("recommendation", reccomend?.value);

    // bigData.append("title_of_exp", statusValueFake )
    langValue?.map((item) => {
      bigData.append(`foreign_lang`, item.value);
    });
    compValue?.map((item) => {
      bigData.append(`tech_area`, item.value);
    });
    statusValue?.map((item) => {
      bigData.append(`title_of_exp`, item.value);
    });
    confilictValue?.map((item) => {
      bigData.append(`conflict_of_interest`, item.value);
    });
    factoryNameValue?.map((item) => {
      bigData.append(`labor_activity`, item.id);
    });
    familyValue?.map((item) => {
      bigData.append(`about_family`, item.id);
    });

    certificateValue?.map((item) => {
      bigData.append(`certificate`, item.id);
    });

    axios
      .post(API_APTH + "apps/employees/create/", bigData, {
        headers: {
          Authorization: "token " + localStorage.getItem("auth_token"),
        },
      })
      .then((res) => {
        toast.success(getText("toastText"));
        window.location.reload(true);
      });
  };
  useEffect(() => {
    getUsersList();
    getCityList();
    getNationData();
    getPositionData();
    getConfilictData();
    getLangData();
    getCompData();
    getBachelorData();
    getAcademikData();
    getMagstrData();
    getDoctorantData();
    getAspirantData();
    getStatusData();
    if (localStorage.getItem("language") === "uz")(
        setLocLang("uz")
    )
    else (
        setLocLang("ru")
    )
  }, []);

  return (
    <div className="add-employee">
      <div className="navbar-main">
        <div className="container d-flex justify-content-between align-items-center h-100">
          <div className="logo">
            <img src="/img/logo12.svg" alt="" />
          </div>
          <div className="lang-btn position-relative" style={{bottom: "0"}}>
            <button
                onClick={() => changeLang("ru")}
                className={
                  !locLang ||
                  locLang === "ru"
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

      <div className="container add-employee-mt">
        <h2 className="open-sans-bold pt-5 mb-4">{getText("main")}</h2>
        <form className="row">
          <div className="col-md-4 my-form-groups   ">
            <div className="my-select-style">
              <label htmlFor="dd2" className="open-sans-semibold">
                {getText("inputTittle1")} <span className="with-star">*</span>
              </label>
              <div className="row flex-nowrap m-0 position-relative  ">
                <Select
                  options={users?.map((item) => {
                    return { value: item.id, label: item.full_name };
                  })}
                  isClearable
                  className={errors.user.length > 0 ? "error" : ""}
                  onChange={(e) => {
                    setUsersValue(e);
                    setErrors({ ...errors, user: "" });
                  }}
                  placeholder={getText("inputTittle1")}
                />
              </div>
            </div>
          </div>
          <div className="col-md-4 my-form-groups">
            <div className="my-input-style">
              <label htmlFor="dd2" className="open-sans-semibold">
                {getText("inputTittle2")} <span className="with-star">*</span>
              </label>
              <div className="row flex-nowrap m-0 position-relative">
                <input
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                    setErrors({ ...errors, phone_number: "" });
                  }}
                  type="text"
                  className={errors.phone_number.length > 0 ? "errorInput" : ""}
                  placeholder={getText("inputTittle2")}
                />
              </div>
            </div>
          </div>
          <div className="col-md-4 my-form-groups">
            <div className="my-input-style">
              <label htmlFor="dd2" className="open-sans-semibold">
                {getText("inputTittle3")} <span className="with-star">*</span>
              </label>
              <div className="row flex-nowrap m-0 position-relative">
                <input
                  type="date"
                  onChange={(e) => {
                    setBirthday(e.target.value);
                    setErrors({ ...errors, birthday: "" });
                  }}
                  placeholder={getText("inputTittle3")}
                  className={errors.birthday.length > 0 ? "errorInput" : ""}
                />
              </div>
            </div>
          </div>
          <div className="col-md-4 my-form-groups   ">
            <div className="my-select-style">
              <label htmlFor="dd2" className="open-sans-semibold">
                {getText("inputTittle4")} <span className="with-star">*</span>
              </label>
              <div className="row flex-nowrap m-0 position-relative">
                <Select
                  isClearable
                  placeholder={getText("inputTittle3")}
                  options={location?.map((item) => {
                    return {
                      value: item.id,
                      label: item.country.name + "-" + item.name,
                      country_id: item.country.id,
                      country_name: item.country.name,
                      city_name: item.name,
                    };
                  })}
                  value={locationValue}
                  className={errors.location.length > 0 ? "error" : ""}
                  onChange={(e) => {
                    setLocationValue(e);
                    setErrors({ ...errors, location: "" });
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
            fieldName="Локация"
            setLocationModalSecond={setLocationModalSecond}
            data={data}
          />
          <div className="col-md-4 my-form-groups">
            <div className="my-input-style">
              <label htmlFor="dd2" className="open-sans-semibold">
                {getText("inputTittle5")} <span className="with-star">*</span>
              </label>
              <div className="row flex-nowrap m-0 position-relative">
                <input
                  type="date"
                  onChange={(e) => {
                    setSferaAkk(e.target.value);
                    setErrors({ ...errors, start_at_accreditation: "" });
                  }}
                  placeholder={getText("inputTittle5")}
                  className={
                    errors.start_at_accreditation.length > 0 ? "errorInput" : ""
                  }
                />
              </div>
            </div>
          </div>
          <div className="col-md-4 my-form-groups">
            <div className="my-input-style">
              <label htmlFor="dd2" className="open-sans-semibold">
                {getText("inputTittle6")} <span className="with-star">*</span>
              </label>
              <div className="row flex-nowrap m-0 position-relative">
                <input
                  type="date"
                  onChange={(e) => {
                    setDateWork(e.target.value);
                    setErrors({ ...errors, first_working_date: "" });
                  }}
                  placeholder={getText("inputTittle6")}
                  className={
                    errors.first_working_date.length > 0 ? "errorInput" : ""
                  }
                />
              </div>
            </div>
          </div>
          <div className="col-md-4 my-form-groups   ">
            <div className="my-select-style">
              <label htmlFor="dd2" className="open-sans-semibold">
                {getText("inputTittle7")} <span className="with-star">*</span>
              </label>
              <div className="row flex-nowrap m-0 position-relative">
                <Select
                  isClearable
                  placeholder={getText("inputTittle7")}
                  options={location?.map((item) => {
                    return {
                      value: item.id,
                      label: item.country.name + "-" + item.name,
                      country_id: item.country.id,
                      country_name: item.country.name,
                      city_name: item.name,
                    };
                  })}
                  value={propiskaValue}
                  className={errors.place_of_birth.length > 0 ? "error" : ""}
                  onChange={(e) => {
                    setpropiskaValue(e);
                    setErrors({ ...errors, place_of_birth: "" });
                  }}
                />
                <button
                  type="button"
                  className="add-btn"
                  onClick={() => setPropiskaModal(true)}
                >
                  {propiskaValue ? (
                    <img src="/img/edit.png" alt="+" />
                  ) : (
                    <img src="/img/plus.png" alt="+" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <PropiskaModal
            locationValue={propiskaValue}
            setLocationValue={setpropiskaValue}
            fieldName={getText("inputTittle7")}
            locationModal={propiskaModal}
            setLocationModal={setPropiskaModal}
            locationModalSecond={propiskaModalSecond}
            setLocationModalSecond={setPropiskaModalSecond}
            data={data}
            setLocation={setLocation}
          />
          <div className="col-md-4 my-form-groups">
            <div className="my-select-style">
              <label htmlFor="dd2" className="open-sans-semibold">
                {getText("inputTittle8")} <span className="with-star">*</span>
              </label>
              <div className="row flex-nowrap m-0 position-relative">
                <Select
                  options={getNation?.map((item) => {
                    return {
                      value: item.id,
                      label: item.name,
                    };
                  })}
                  value={nationValue}
                  isClearable
                  placeholder={getText("inputTittle8")}
                  className={errors.nation.length > 0 ? "error" : ""}
                  onChange={(e) => {
                    setNationValue(e);
                    setErrors({ ...errors, nation: "" });
                  }}
                />
                <button
                  className="add-btn"
                  type="button"
                  onClick={() => setNationModal(true)}
                >
                  {nationValue ? (
                    <img src="/img/edit.png" alt="+" />
                  ) : (
                    <img src="/img/plus.png" alt="+" />
                  )}
                </button>
              </div>
            </div>
            <NationModal
              locationValue={nationValue}
              setLocationValue={setNationValue}
              fieldName={getText("inputTittle8")}
              locationModal={nationModal}
              setLocationModal={setNationModal}
              setGetNation={setGetNation}
              getNation={getNation}
              setNation={setNation}
              nation={nation}
            />
          </div>
          <div className="col-md-4 my-form-groups ">
            <div className="my-select-style">
              <label htmlFor="dd2" className="open-sans-semibold">
                {getText("inputTittle9")} <span className="with-star">*</span>
              </label>
              <div className="row flex-nowrap m-0 position-relative">
                <Select
                  options={getPosition?.map((item) => {
                    return { value: item.id, label: item.name };
                  })}
                  value={positionValue}
                  isClearable
                  className={errors.work_position.length > 0 ? "error" : ""}
                  placeholder={getText("inputTittle9")}
                  onChange={(e) => {
                    setPositionValue(e);
                    setErrors({ ...errors, work_position: "" });
                  }}
                />
                <button
                  className="add-btn"
                  type="button"
                  onClick={() => setPositionModal(true)}
                >
                  {positionValue ? (
                    <img src="/img/edit.png" alt="+" />
                  ) : (
                    <img src="/img/plus.png" alt="+" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <PositionModal
            locationValue={positionValue}
            setLocationValue={setPositionValue}
            fieldName={getText("inputTittle9")}
            locationModal={positionModal}
            setLocationModal={setPositionModal}
            setGetPosition={setGetPosition}
            getPosition={getPosition}
            setPosition={setPosition}
            position={position}
          />
          <div className="col-md-4 my-form-groups">
            <div className="my-input-style">
              <label htmlFor="dd2" className="open-sans-semibold">
                {getText("inputTittle10")}{" "}
              </label>
              <div className="row flex-nowrap m-0 position-relative">
                <input
                  onChange={(e) => setWorkExpresience(e.target.value)}
                  type="number"
                  placeholder={getText("inputTittle10")}
                />
              </div>
            </div>
          </div>
          <div className="col-md-4 my-form-groups">
            <div className="my-input-style">
              <label htmlFor="dd2" className="open-sans-semibold">
                {getText("inputTittle11")}
              </label>
              <div className="row flex-nowrap m-0 position-relative">
                <input
                  onChange={(e) => setAudit(e.target.value)}
                  type="number"
                  placeholder={getText("inputTittle11")}
                />
              </div>
            </div>
          </div>
          <div className="col-md-4 my-form-groups   ">
            <div className="my-select-style">
              <label htmlFor="dd2" className="open-sans-semibold">
                {getText("inputTittle12")}{" "}
              </label>
              <div className="row flex-nowrap m-0 position-relative  ">
                <Select
                  options={users?.map((item) => {
                    return { value: item.id, label: item.full_name };
                  })}
                  isClearable
                  onChange={(e) => setReccomend(e)}
                  placeholder={getText("inputTittle12")}
                />
              </div>
            </div>
          </div>
          <div className="col-md-4 my-form-groups   ">
            <div className="my-select-style">
              <label htmlFor="dd2" className="open-sans-semibold">
                {getText("inputTittle13")} <span className="with-star">*</span>
              </label>
              <div className="row flex-nowrap m-0 position-relative">
                <Select
                  options={bachelorList?.map((item) => {
                    return {
                      value: item.id,
                      label:
                        item.education.university.name +
                        "-" +
                        item.education.graduate +
                        "   " +
                        item.period,
                    };
                  })}
                  isClearable
                  className={errors.bachelor.length > 0 ? "error" : ""}
                  onChange={(e) => {
                    setBachelorValue(e);
                    setErrors({ ...errors, bachelor: "" });
                  }}
                  placeholder={getText("inputTittle13")}
                />
                <button
                  className="add-btn"
                  type="button"
                  onClick={() => setUnModal1(true)}
                >
                  {bachelorValue ? (
                    <img src="/img/edit.png" alt="+" />
                  ) : (
                    <img src="/img/plus.png" alt="+" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <UniversityModal
            unValue={bachelorValue}
            setBachelorList={setBachelorList}
            fieldName={getText("inputTittle13")}
            unModal={unModal1}
            setUnModal={setUnModal1}
            unModalSecond={unModalSecond1}
            setUnModalSecond={setUnModalSecond1}
            unModalThird={unModalThird1}
            setUnModalThird={setUnModalThird1}
            title={getText("bac1")}
            titleSecond={getText("vuz1")}
            titleThird={getText("fac3")}
            url="bachelor"
          />
          <div className="col-md-4 my-form-groups   ">
            <div className="my-select-style">
              <label htmlFor="dd2" className="open-sans-semibold">
                {getText("inputTittle14")}{" "}
              </label>
              <div className="row flex-nowrap m-0 position-relative">
                <Select
                  isClearable
                  options={magstrList?.map((item) => {
                    return {
                      value: item.id,
                      label:
                        item.education.university.name +
                        "-" +
                        item.education.graduate +
                        "   " +
                        item.period,
                    };
                  })}
                  onChange={(e) => setMagstrValue(e)}
                  placeholder={getText("inputTittle14")}
                />
                <button
                  className="add-btn"
                  type="button"
                  onClick={() => setUnModal2(true)}
                >
                  {magstrValue ? (
                    <img src="/img/edit.png" alt="+" />
                  ) : (
                    <img src="/img/plus.png" alt="+" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <MgModal
            unValue={magstrValue}
            setBachelorList={setMagstrList}
            fieldName={getText("inputTittle14")}
            unModal={unModal2}
            setUnModal={setUnModal2}
            unModalSecond={unModalSecond2}
            setUnModalSecond={setUnModalSecond2}
            unModalThird={unModalThird2}
            setUnModalThird={setUnModalThird2}
            title={getText("bac1")}
            titleSecond={getText("vuz1")}
            titleThird={getText("fac3")}
            url="magistracy"
          />
          <div className="col-md-4 my-form-groups   ">
            <div className="my-select-style">
              <label htmlFor="dd2" className="open-sans-semibold">
                {getText("inputTittle15")}{" "}
              </label>
              <div className="row flex-nowrap m-0 position-relative">
                <Select
                  isClearable
                  options={aspirantList?.map((item) => {
                    return {
                      value: item.id,
                      label:
                        item.education.university.name +
                        "-" +
                        item.education.graduate +
                        "   " +
                        item.period,
                    };
                  })}
                  onChange={(e) => setAspirantValue(e)}
                  placeholder={getText("inputTittle15")}
                />
                <button
                  className="add-btn"
                  type="button"
                  onClick={() => setUnModal3(true)}
                >
                  {aspirantValue ? (
                    <img src="/img/edit.png" alt="+" />
                  ) : (
                    <img src="/img/plus.png" alt="+" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <AspModal
            unValue={aspirantValue}
            setBachelorList={setAspirantList}
            fieldName={getText("inputTittle15")}
            unModal={unModal3}
            setUnModal={setUnModal3}
            unModalSecond={unModalSecond3}
            setUnModalSecond={setUnModalSecond3}
            unModalThird={unModalThird3}
            setUnModalThird={setUnModalThird3}
            title={getText("bac1")}
            titleSecond={getText("vuz1")}
            titleThird={getText("fac3")}
            url="phd"
          />
          <div className="col-md-4 my-form-groups   ">
            <div className="my-select-style">
              <label htmlFor="dd2" className="open-sans-semibold">
                {getText("inputTittle16")}{" "}
              </label>
              <div className="row flex-nowrap m-0 position-relative">
                <Select
                  options={doctorantList?.map((item) => {
                    return {
                      value: item.id,
                      label:
                        item.education.university.name +
                        "-" +
                        item.education.graduate +
                        "   " +
                        item.period,
                    };
                  })}
                  onChange={(e) => setDoctorantValue(e)}
                  isClearable
                  placeholder={getText("inputTittle16")}
                />
                <button
                  className="add-btn"
                  type="button"
                  onClick={() => setUnModal4(true)}
                >
                  {doctorantValue ? (
                    <img src="/img/edit.png" alt="+" />
                  ) : (
                    <img src="/img/plus.png" alt="+" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <DcModal
            unValue={doctorantValue}
            setBachelorList={setDoctorantList}
            fieldName={getText("inputTittle16")}
            unModal={unModal4}
            setUnModal={setUnModal4}
            unModalSecond={unModalSecond4}
            setUnModalSecond={setUnModalSecond4}
            unModalThird={unModalThird4}
            setUnModalThird={setUnModalThird4}
            title={getText("bac1")}
            titleSecond={getText("vuz1")}
            titleThird={getText("fac3")}
            url="dr_science"
          />
          <div className="col-md-4 my-form-groups   ">
            <div className="my-select-style">
              <label htmlFor="dd2" className="open-sans-semibold">
                {getText("inputTittle17")}{" "}
              </label>
              <div className="row flex-nowrap m-0 position-relative">
                <Select
                  options={academikList?.map((item) => {
                    return {
                      value: item.id,
                      label:
                        item.education.university.name +
                        "-" +
                        item.education.graduate +
                        "   " +
                        item.period,
                    };
                  })}
                  onChange={(e) => setAcademikValue(e)}
                  isClearable
                  placeholder={getText("inputTittle17")}
                />
                <button
                  className="add-btn"
                  type="button"
                  onClick={() => setUnModal5(true)}
                >
                  {academikValue ? (
                    <img src="/img/edit.png" alt="+" />
                  ) : (
                    <img src="/img/plus.png" alt="+" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <AcModal
            unValue={academikValue}
            setBachelorList={setAcademikList}
            fieldName={getText("inputTittle17")}
            unModal={unModal5}
            setUnModal={setUnModal5}
            unModalSecond={unModalSecond5}
            setUnModalSecond={setUnModalSecond5}
            unModalThird={unModalThird5}
            setUnModalThird={setUnModalThird5}
            title={getText("bac1")}
            titleSecond={getText("vuz1")}
            titleThird={getText("fac3")}
            url="academician"
            status={5}
          />
          <div className="col-md-4 my-form-groups">
            <div className="my-input-style">
              <label htmlFor="dd2" className="open-sans-semibold">
                {getText("inputTittle18")}
              </label>
              <div className="row flex-nowrap m-0 position-relative">
                <input
                  type="text"
                  onChange={(e) => setPartiya(e.target.value)}
                  placeholder={getText("inputTittle18")}
                />
              </div>
            </div>
          </div>
          <div className="col-md-4 my-form-groups">
            <div className="my-input-style">
              <label htmlFor="dd2" className="open-sans-semibold">
                {getText("inputTittle19")}
              </label>
              <div className="row flex-nowrap m-0 position-relative">
                <input
                  type="text"
                  onChange={(e) => setBilet(e.target.value)}
                  placeholder={getText("inputTittle19")}
                />
              </div>
            </div>
          </div>
          <div className="col-md-4 my-form-groups">
            <div className="my-input-style">
              <label htmlFor="dd2" className="open-sans-semibold">
                {getText("inputTittle20")}
              </label>
              <div className="row flex-nowrap m-0 position-relative">
                <input
                  type="text"
                  onChange={(e) => setNagrad(e.target.value)}
                  placeholder={getText("inputTittle20")}
                />
              </div>
            </div>
          </div>
          <div className="col-md-4 my-form-groups">
            <div className="my-input-style">
              <label htmlFor="dd2" className="open-sans-semibold">
                {getText("inputTittle21")}
                <span className="with-star">*</span>
              </label>
              <div className="row flex-nowrap m-0 position-relative">
                <input
                  type="text"
                  onChange={(e) => {
                    setAdressPropiska(e.target.value);
                    setErrors({ ...errors, address: "" });
                  }}
                  placeholder={getText("inputTittle21")}
                  className={errors.address.length > 0 ? "errorInput" : ""}
                />
              </div>
            </div>
          </div>
          <div className="col-md-4 my-form-groups">
            <div className="my-input-style">
              <label htmlFor="dd2" className="open-sans-semibold">
                {getText("inputTittle22")}
                <span className="with-star">*</span>
              </label>
              <div className="row flex-nowrap m-0 position-relative">
                <input
                  type="text"
                  onChange={(e) => {
                    setWorkAdress(e.target.value);
                    setErrors({ ...errors, work: "" });
                  }}
                  placeholder={getText("inputTittle22")}
                  className={errors.work.length > 0 ? "errorInput" : ""}
                />
              </div>
            </div>
          </div>
          <div className="col-md-4 my-form-groups">
            <div className="my-input-style">
              <label htmlFor="dd2" className="open-sans-semibold">
                {getText("inputTittle23")} <span className="with-star">*</span>
              </label>
              <div className="row flex-nowrap m-0 position-relative">
                <input
                  type="text"
                  onChange={(e) => {
                    setFactAdress(e.target.value);
                    setErrors({ ...errors, fact_live_place: "" });
                  }}
                  placeholder={getText("inputTittle23")}
                  className={
                    errors.fact_live_place.length > 0 ? "errorInput" : ""
                  }
                />
              </div>
            </div>
          </div>
          <div className="col-md-4 my-form-groups">
            <div className="my-input-style">
              <label htmlFor="dd2" className="open-sans-semibold">
                {getText("inputTittle24")}
                <span className="with-star">*</span>
              </label>
              <div className="row flex-nowrap m-0 position-relative">
                <input
                  type="text"
                  onChange={(e) => {
                    setAgreeCenter(e.target.value);
                    setErrors({ ...errors, centre_agree: "" });
                  }}
                  placeholder={getText("inputTittle24")}
                  className={errors.centre_agree.length > 0 ? "errorInput" : ""}
                />
              </div>
            </div>
          </div>
          <div className="col-md-4 my-form-groups">
            <div className="my-input-style">
              <label htmlFor="dd2" className="open-sans-semibold">
                {getText("inputTittle25")}
              </label>
              <div className="row flex-nowrap m-0 position-relative">
                <input
                  type="text"
                  onChange={(e) => setLastWork(e.target.value)}
                  placeholder={getText("inputTittle25")}
                />
              </div>
            </div>
          </div>
          <div className="col-md-4 my-form-groups   ">
            <div className="my-select-style">
              <label htmlFor="dd2" className="open-sans-semibold">
                {getText("inputTittle26")}
              </label>
              <div className="row flex-nowrap m-0 position-relative">
                <Select
                  isMulti
                  options={getComp?.map((item) => {
                    return { value: item.id, label: item.name_code };
                  })}
                  onChange={(e) => setCompValue(e)}
                  isClearable
                  placeholder={getText("inputTittle26")}
                />
                <button
                  type="button"
                  onClick={() => setCompModal(true)}
                  className="add-btn"
                >
                  {compValue ? (
                    <img src="/img/edit.png" alt="+" />
                  ) : (
                    <img src="/img/plus.png" alt="+" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <CompetencyModal
            locationValue={compValue}
            setLocation={setGetComp}
            locationModal={compModal}
            setLocationModal={setCompModal}
            locationModalSecond={compModalSecond}
            fieldName={getText("inputTittle26")}
            setLocationModalSecond={setCompModalSecond}
            setLoaction={setComp}
          />
          <div className="col-md-4 my-form-groups   ">
            <div className="my-select-style">
              <label htmlFor="dd2" className="open-sans-semibold">
                {getText("inputTittle27")}
              </label>
              <div className="row flex-nowrap m-0 position-relative">
                <Select
                  options={getLang?.map((item) => {
                    return { value: item.id, label: item.lang };
                  })}
                  isClearable
                  isMulti
                  onChange={(e) => {
                    setLangValue(e);
                  }}
                  value={langValue}
                  placeholder={getText("inputTittle27")}
                />
                <button
                  className="add-btn"
                  type="button"
                  onClick={() => setLangModal(true)}
                >
                  {langValue[0] ? (
                    <img src="/img/edit.png" alt="+" />
                  ) : (
                    <img src="/img/plus.png" alt="+" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <LangModal
            locationValue={langValue}
            setLocationvalue={setLangValue}
            fieldName={getText("inputTittle27")}
            locationModal={langModal}
            setLocationModal={setLangModal}
            setGetLang={setGetLang}
            getLang={getLang}
            setLang={setLang}
            lang={lang}
          />
          <div className="col-md-4 my-form-groups   ">
            <div className="my-select-style">
              <label htmlFor="dd2" className="open-sans-semibold">
                {getText("trd")}
              </label>
              <div className="row flex-nowrap m-0 position-relative">
                <button
                  type="button"
                  onClick={() => setFactoryName(true)}
                  className="full_add_btn"
                >
                  {getText("trd")} <img src="/img/plus.png" alt="+" />
                </button>
              </div>
            </div>
            <div className="main-list">
              {factoryNameValue?.map((item, index) => (
                <div className="trdName">
                  <div>
                    <span>{item?.period}</span>
                    <span>{item?.name}</span>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={() => facModalOpen(item?.id, index)}
                    >
                      <img src="img/pencil.png" alt="edit" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <FactoryModal
            locationValue={factoryNameValue}
            setLocationvalue={setFactoryNameValue}
            fieldName={getText("trd")}
            locationModal={factoryName}
            setLocationModal={setFactoryName}
            setGetLang={setGetLang}
            getLang={getLang}
            setLang={setLang}
            facId={facId}
            facIndex={facIndex}
            setFacId={setFacId}
          />
          <div className="col-md-4 my-form-groups ">
            <div className="my-select-style">
              <label htmlFor="dd2" className="open-sans-semibold">
                {getText("srd")}
              </label>
              <div className="row flex-nowrap m-0 position-relative">
                <button
                  type="button"
                  onClick={() => setCertificate(true)}
                  className="full_add_btn"
                >
                  {getText("srd")}
                  <img src="/img/plus.png" alt="+" />
                </button>
              </div>
            </div>
            <div className="main-list">
              {certificateValue?.map((item, index) => (
                <div className="trdName">
                  <div>
                    <span>{item?.period}</span>
                    <span>{item?.name}</span>
                    <span>{item?.person}</span>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={() => SerModalOpen(item?.id, index)}
                    >
                      <img src="img/pencil.png" alt="edit" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <SerModal
            locationValue={certificateValue}
            setLocationvalue={setCertificateValue}
            fieldName={getText("srd")}
            locationModal={certificate}
            setLocationModal={setCertificate}
            setGetLang={setGetLang}
            getLang={getLang}
            setLang={setLang}
            lang={lang}
            facId={serId}
            setFacId={setSerId}
          />
          <div className="col-md-4 my-form-groups    ">
            <div className="my-select-style">
              <label htmlFor="dd2" className="open-sans-semibold">
                {getText("frd")}
              </label>
              <div className="row flex-nowrap m-0 position-relative">
                <button
                  type="button"
                  onClick={() => setFamily(true)}
                  className="full_add_btn"
                >
                  {getText("frd")} <img src="/img/plus.png" alt="+" />
                </button>
              </div>
            </div>
            <div className="main-list">
              {familyValue?.map((item, index) => (
                <div className="trdName">
                  <div>
                    <span>{item?.relation_degree_choice}</span>
                    <span>{item?.full_name}</span>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={() => familyModalOpen(item?.id, item)}
                    >
                      <img src="img/pencil.png" alt="edit" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <FamilyModal
            locationValue={familyValue}
            setLocationvalue={setFamilyValue}
            fieldName={getText("frd")}
            locationModal={family}
            setLocationModal={setFamily}
            setGetLang={setGetLang}
            getLang={getLang}
            setLang={setLang}
            facId={itemFamily}
          />
          <div className="col-md-4 my-form-groups   ">
            <div className="my-select-style">
              <label htmlFor="dd2" className="open-sans-semibold">
                {getText("inputTittle31")} <span className="with-star">*</span>
              </label>
              <div className="row flex-nowrap m-0 position-relative  ">
                <Select
                  options={status?.map((item) => {
                    return { value: item.id, label: item.name };
                  })}
                  isClearable
                  isMulti
                  className={errors.title_of_exp.length > 0 ? "error" : ""}
                  onChange={(e) => {
                    setStatusValue(e);
                    setErrors({ ...errors, title_of_exp: "" });
                  }}
                  placeholder={getText("inputTittle31")}
                />
              </div>
            </div>
          </div>
          <div className="col-md-4 my-form-groups   ">
            <div className="my-select-style">
              <label htmlFor="dd2" className="open-sans-semibold">
                {getText("inputTittle32")}
              </label>
              <div className="row flex-nowrap m-0 position-relative">
                <Select
                  options={getConfilict?.map((item) => {
                    return {
                      value: item.id,
                      label: item.name + " " + item.reason,
                    };
                  })}
                  isClearable
                  isMulti
                  placeholder={getText("inputTittle32")}
                  onChange={(e) => {
                    setConfilictValue(e);
                  }}
                />
                <button
                  className="add-btn"
                  type="button"
                  onClick={() => setConfilictModal(true)}
                >
                  {confilictValue ? (
                    <img src="/img/edit.png" alt="+" />
                  ) : (
                    <img src="/img/plus.png" alt="+" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <ConfilctModal
            locationValue={confilictValue}
            fieldName={getText("inputTittle32")}
            locationModal={confilictModal}
            setLocationModal={setConfilictModal}
            setGetPosition={setGetConfilict}
            getPosition={getConfilict}
            setPosition={setConfilict}
            // position={confilict}
          />
          <div className="col-md-4 my-form-groups   d-flex flex-column  pt-4 justify-content-evenly">
            <div className="my-check-style">
              <input
                type="checkbox"
                onChange={() => setStatusCenter(!statusCenter)}
                id="dd245"
              />
              <label htmlFor="dd245" className="open-sans-semibold">
                {getText("inputTittle33")}
              </label>
            </div>
            <div className="my-check-style">
              <input
                id="dd235"
                onChange={() => setUvolen(!uvolen)}
                type="checkbox"
              />
              <label htmlFor="dd235" className="open-sans-semibold">
                {getText("inputTittle34")}
              </label>
            </div>
          </div>
          <div className="col-md-12 my-form-groups   d-flex flex-row">
            <div className="userPhoto">
              <label htmlFor="userPhoto" id="img1">
                {" "}
                <img src={photo123} alt="" />
              </label>
              <input
                type="file"
                onChange={(e) => uploadImg(e)}
                id="userPhoto"
              />
              <p className="open-sans-semibold">{getText("photo")}</p>
            </div>
            <div className="userPhoto ">
              <label htmlFor="userFile">
                <img
                  id="img3"
                  src="/img/check.png"
                  style={{ display: "none" }}
                  alt="file"
                />
              </label>
              <label htmlFor="userFile">
                <img id="img2" src="/img/file.png" alt="file" />
              </label>
              <input type="file" onChange={uploadImg2} id="userFile" />
              <p className="open-sans-semibold  ">{getText("resume")}</p>
            </div>
          </div>
          <div className="col-md-12">
            <button
              type="button"
              onClick={sendData2}
              className="save-btn open-sans-semibold"
            >
              {getText("save")}
            </button>
          </div>
        </form>
        <Modal
          isOpen={mainModal}
          size="xl"
          toggle={() => setMainModal(false)}
          className="main-modal"
          dialogClassName="modal-90w"
        >
          <ModalHeader toggle={() => setMainModal(false)}>
            {getText("mhead")}
          </ModalHeader>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <p>
                  <span>{getText("inputTittle1")}:</span>
                  <span>{usersValue?.label}</span>
                </p>
              </div>
              <div className="col-md-4">
                <p>
                  <span>{getText("inputTittle2")}:</span>
                  <span>{phoneNumber}</span>
                </p>
              </div>
              <div className="col-md-4">
                <p>
                  <span>{getText("inputTittle3")}:</span>
                  <span>{birthday}</span>
                </p>
              </div>
              <div className="col-md-4">
                <p>
                  <span>{getText("inputTittle4")}:</span>
                  <span>{locationValue?.label}</span>
                </p>
              </div>

              <div className="col-md-4">
                <p>
                  <span>{getText("inputTittle5")}:</span>
                  <span>{sferaAkk}</span>
                </p>
              </div>

              <div className="col-md-4">
                <p>
                  <span>{getText("inputTittle6")}:</span>
                  <br />
                  <span>{dateWork}</span>
                </p>
              </div>

              <div className="col-md-4">
                <p>
                  <span>{getText("inputTittle7")}:</span>
                  <br />
                  <span>{propiskaValue?.label}</span>
                </p>
              </div>

              <div className="col-md-4">
                <p>
                  <span>{getText("inputTittle8")}:</span>
                  <span>{nationValue?.label}</span>
                </p>
              </div>

              <div className="col-md-4">
                <p>
                  <span>{getText("inputTittle9")}:</span>
                  <span>{positionValue?.label}</span>
                </p>
              </div>

              <div className="col-md-4">
                <p>
                  <span>{getText("inputTittle10")}:</span>
                  <br />
                  <span>{workExpresience}</span>
                </p>
              </div>

              <div className="col-md-4">
                <p>
                  <span>{getText("inputTittle11")}:</span>
                  <span>{audit}</span>
                </p>
              </div>

              <div className="col-md-4">
                <p>
                  <span>{getText("inputTittle12")}:</span>
                  <span>{reccomend?.label}</span>
                </p>
              </div>

              <div className="col-md-4">
                <p>
                  <span>{getText("inputTittle13")}:</span>
                  <br />
                  <span>{bachelorValue?.label}</span>
                </p>
              </div>

              <div className="col-md-4">
                <p>
                  <span>{getText("inputTittle14")}:</span>
                  <br />
                  <span>{magstrValue?.label}</span>
                </p>
              </div>

              <div className="col-md-4">
                <p>
                  <span>{getText("inputTittle15")}:</span>
                  <br />
                  <span>{aspirantValue?.label}</span>
                </p>
              </div>
              <div className="col-md-4">
                <p>
                  <span>{getText("inputTittle16")}:</span>
                  <br />
                  <span>{doctorantValue?.label}</span>
                </p>
              </div>

              <div className="col-md-4">
                <p>
                  <span>{getText("inputTittle17")}:</span>
                  <br />
                  <span>{academikValue?.label}</span>
                </p>
              </div>

              <div className="col-md-4">
                <p>
                  <span>{getText("inputTittle18")}:</span>
                  <br />
                  <span>{partiya}</span>
                </p>
              </div>
              <div className="col-md-4">
                <p>
                  <span>{getText("inputTittle19")}:</span>
                  <br />
                  <span>{bilet}</span>
                </p>
              </div>

              <div className="col-md-4">
                <p>
                  <span>{getText("inputTittle20")}:</span>
                  <br />
                  <span>{nagrad}</span>
                </p>
              </div>

              <div className="col-md-4">
                <p>
                  <span>{getText("inputTittle21")}:</span>
                  <br />
                  <span>{adressPropiska}</span>
                </p>
              </div>
              <div className="col-md-4">
                <p>
                  <span>{getText("inputTittle22")}:</span>
                  <br />
                  <span>{workAdress}</span>
                </p>
              </div>

              <div className="col-md-4">
                <p>
                  <span>{getText("inputTittle23")}:</span>
                  <br />
                  <span>{factAdress}</span>
                </p>
              </div>

              <div className="col-md-4">
                <p>
                  <span>{getText("inputTittle24")}:</span>
                  <br />
                  <span>{agreeCenter}</span>
                </p>
              </div>
              <div className="col-md-4">
                <p>
                  <span>{getText("inputTittle25")}:</span>
                  <br />
                  <span>{lastWork}</span>
                </p>
              </div>

              <div className="col-md-4">
                <p>
                  <span>{getText("inputTittle26")}:</span>
                  <br />
                  <span>
                    {compValue !== ""
                      ? compValue?.map((item) => (
                          <div className="items">{item?.label}</div>
                        ))
                      : ""}
                  </span>
                </p>
              </div>

              <div className="col-md-4">
                <p>
                  <span>{getText("inputTittle27")}:</span>
                  <br />
                  <span>
                    {langValue !== ""
                      ? langValue?.map((item) => (
                          <div className="items">{item?.label}</div>
                        ))
                      : ""}
                  </span>
                </p>
              </div>

              <div className="col-md-4">
                <p>
                  <span>{getText("trd")}:</span>
                  <br />
                  <span>
                    {factoryNameValue?.label}
                    {factoryNameValue !== ""
                      ? factoryNameValue?.map((item) => (
                          <div className="items2">
                            <div className="items">{item?.period}</div>
                            <div className="items">{item?.name}</div>
                          </div>
                        ))
                      : ""}
                  </span>
                </p>
              </div>
              <div className="col-md-4">
                <p>
                  <span>{getText("srd")}:</span>
                  <br />
                  <span>
                    {certificateValue !== ""
                      ? certificateValue?.map((item) => (
                          <div className="items">
                            {item?.period} {item?.name}
                          </div>
                        ))
                      : ""}
                  </span>
                </p>
              </div>
              <div className="col-md-4">
                <p>
                  <span>{getText("frd")}:</span>
                  <br />
                  <span>
                    {familyValue !== ""
                      ? familyValue?.map((item) => (
                          <div className="items2">
                            <div className="items">
                              {item?.relation_degree_choice}
                            </div>
                            <div className="items"> {item?.full_name}</div>
                          </div>
                        ))
                      : ""}
                  </span>
                </p>
              </div>

              <div className="col-md-4">
                <p>
                  <span>{getText("inputTittle31")}:</span>
                  <br />
                  <span>
                    {statusValue !== ""
                      ? statusValue?.map((item) => (
                          <div className="items">{item?.label}</div>
                        ))
                      : ""}
                  </span>
                </p>
              </div>

              <div className="col-md-4">
                <p>
                  <span>{getText("inputTittle32")}:</span>
                  <br />
                  <span>
                    {confilictValue !== ""
                      ? confilictValue?.map((item) => (
                          <div className="items">{item?.label}</div>
                        ))
                      : ""}
                  </span>
                </p>
              </div>

              <div className="col-md-4">
                <p>
                  <span>{getText("inputTittle33")}:</span>
                  {statusCenter ? (
                    <img className="check-img" src="/img/bird.png" />
                  ) : (
                    <img className="check-img" src="/img/del.png" />
                  )}
                </p>
                <p>
                  <span>{getText("inputTittle34")}:</span>
                  {uvolen ? (
                    <img className="check-img" src="/img/bird.png" />
                  ) : (
                    <img className="check-img" src="/img/del.png" />
                  )}
                </p>
              </div>
              <div className="col-md-4">
                <span>{getText("photo")}</span>
                <img className="user-img" src={photo123} alt="" />
              </div>
              <div className="col-md-4">
                <span className="text-center">{getText("resume")}</span>
                <p>
                  {cv ? (
                    <img src="/img/check.png" className="user-img" alt="file" />
                  ) : (
                    "no resume"
                  )}
                </p>
              </div>
            </div>
          </div>
          <ModalFooter>
            <button
              className="modal-cancel-btn"
              onClick={() => setMainModal(false)}
            >
              {getText("cancel")}
            </button>
            <button onClick={sendAllData} className="modal-save-btn">
              {getText("save")}
            </button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};

export default AddEmployee;
