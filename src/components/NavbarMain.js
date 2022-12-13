import React, {useEffect, useState} from 'react';
import {SITE_LANG} from "../tools/Const";

const NavbarMain = () => {
    const [locLang, setLocLang] = useState("ru")

    const changeLang = (lang) => {
        localStorage.setItem(SITE_LANG, lang);
        setLocLang(lang)
    };

    useEffect(() => {
        if (localStorage.getItem("language") === "uz") (
            setLocLang("uz")
        );
        else (
            setLocLang("ru")
        )

    }, []);
    return (
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
    );
};

export default NavbarMain;