import React, {useEffect, useState} from 'react';
import {SITE_LANG} from "../tools/Const";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import BarChartIcon from '@mui/icons-material/BarChart';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Badge from "@mui/material/Badge";
import ExploreIcon from '@mui/icons-material/Explore';
import AppsIcon from '@mui/icons-material/Apps';
import ImageIcon from '@mui/icons-material/Image';
import Looks4Icon from '@mui/icons-material/Looks4';
import Looks3Icon from '@mui/icons-material/Looks3';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import NavigationIcon from '@mui/icons-material/Navigation';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import PagesIcon from '@mui/icons-material/Pages';
import PersonIcon from '@mui/icons-material/Person';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import FaceIcon from '@mui/icons-material/Face';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LanguageIcon from '@mui/icons-material/Language';
import CalculateIcon from '@mui/icons-material/Calculate';
import SettingsIcon from '@mui/icons-material/Settings';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';
import {useTranslation} from "react-i18next";

import {getText} from "../locales";

const SideBar = (props) => {
    const [locLang, setLocLang] = useState("ru")
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const changeLang = (lang) => {
        localStorage.setItem(SITE_LANG, lang);
        setLocLang(lang)
    };
    const {t, i18n} = useTranslation();

    const [openCount, setOpenCount] = React.useState(null);
    const handleClick = (item) => {
        // setOpen(!open);
        if (openCount === item) {
            setOpenCount(null)
        } else {
            setOpenCount(item)
        }
    };
    useEffect(() => {
        if (localStorage.getItem("language") === "uz") (
            setLocLang("uz")
        );
        else (
            setLocLang("ru")
        )
        console.log(i18n)
    }, []);
    return (
        <nav id="sidebar" className={props.open ? "active " : ""}>
            <ul className="list-unstyled components-lists d-flex flex-column pb-3">
                {
                    localStorage.getItem("role") === "2"
                        ?
                        <div>
                            <ListItemButton className="my-btn" onClick={() => handleClick(1)}>
                                <ListItemIcon>
                                    <AppsIcon/>
                                </ListItemIcon>
                                <ListItemText primary={getText("sdm1")}/>
                                {openCount === 1 ? <ExpandLess/> : <ExpandMore/>}
                            </ListItemButton>
                            <Collapse in={openCount === 1} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sdm2")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sdm6")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sdm4")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sdm5")}/>
                                    </ListItemButton>
                                </List>
                            </Collapse>
                            <ListItemButton className="my-btn" onClick={() => handleClick(2)}>
                                <ListItemIcon>
                                    <AssignmentIcon/>
                                </ListItemIcon>
                                <ListItemText primary={getText("sdm6")}/>
                                {openCount === 2 ? <ExpandLess/> : <ExpandMore/>}
                            </ListItemButton>
                            <Collapse in={openCount === 2} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sdm7")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sdm8")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sdm9")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sdm10")}/>
                                    </ListItemButton>
                                </List>
                            </Collapse>
                            <ListItemButton className="my-btn" onClick={() => handleClick(3)}>
                                <ListItemIcon>
                                    <PersonIcon/>
                                </ListItemIcon>
                                <ListItemText primary={getText("sdm11")}/>
                                {openCount === 3 ? <ExpandLess/> : <ExpandMore/>}
                            </ListItemButton>
                            <Collapse in={openCount === 3} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sdm8")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sdm9")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sdm12")}/>
                                    </ListItemButton>
                                </List>
                            </Collapse>
                            <ListItemButton className="my-btn">
                                <ListItemIcon>
                                    <LanguageIcon/>
                                </ListItemIcon>
                                < ListItemText primary={getText("sdm13")}/>
                            </ListItemButton>
                            <ListItemButton className="my-btn">
                                <ListItemIcon>
                                    <CalculateIcon/>
                                </ListItemIcon>
                                <a href="https://akkred.uz/calculate" target="_blank">
                                    < ListItemText primary={getText("sdm14")}/>
                                </a>
                            </ListItemButton>
                            <ListItemButton className="my-btn">
                                <ListItemIcon>
                                    <DataThresholdingIcon/>
                                </ListItemIcon>
                                <a href="https://akkred.uz/inspections" target="_blank">
                                    < ListItemText primary={getText("sdm15")}/>
                                </a>
                            </ListItemButton>
                            <ListItemButton className="my-btn" onClick={() => handleClick(4)}>
                                <ListItemIcon>
                                    <SettingsIcon/>
                                </ListItemIcon>
                                <ListItemText primary={getText("sdm16")}/>
                                {openCount === 4 ? <ExpandLess/> : <ExpandMore/>}
                            </ListItemButton>
                            <Collapse in={openCount === 4} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{pl: 7}}>
                                        <a href="https://akkred.uz/documents?parents=1" target="_blank">
                                            <ListItemText className="text-color" primary={getText("sdm17")}/>
                                        </a>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <a href="https://akkred.uz/documents?parents=3" target="_blank">
                                            <ListItemText className="text-color" primary={getText("sdm18")}/>
                                        </a>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <a href="https://www.iaf.nu/articles/Mandatory_Documents_/38" target="_blank">
                                            <ListItemText className="text-color" primary={getText("sdm19")}/>
                                        </a>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <a href="https://www.iaf.nu/articles/Mandatory_Documents_/38" target="_blank">
                                            <ListItemText className="text-color" primary={getText("sdm20")}/>
                                        </a>
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </div>
                        : localStorage.getItem("role") === "3"
                    ?
                        <div>
                            <ListItemButton className="my-btn" onClick={() => handleClick(1)}>
                                <ListItemIcon>
                                    <AppsIcon/>
                                </ListItemIcon>
                                <ListItemText primary={getText("sdm1")}/>
                                {openCount === 1 ? <ExpandLess/> : <ExpandMore/>}
                            </ListItemButton>
                            <Collapse in={openCount === 1} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sdm2")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sdm6")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sdm4")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sdm5")}/>
                                    </ListItemButton>
                                </List>
                            </Collapse>
                            <ListItemButton className="my-btn" onClick={() => handleClick(2)}>
                                <ListItemIcon>
                                    <AssignmentIcon/>
                                </ListItemIcon>
                                <ListItemText primary={getText("sdm61")}/>
                                {openCount === 2 ? <ExpandLess/> : <ExpandMore/>}
                            </ListItemButton>
                            <Collapse in={openCount === 2} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sdm7")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sdm71")}/>
                                    </ListItemButton>
                                </List>
                            </Collapse>
                            <ListItemButton className="my-btn">
                                <ListItemIcon>
                                    <LanguageIcon/>
                                </ListItemIcon>
                                < ListItemText primary={getText("sdm13")}/>
                            </ListItemButton>
                            <ListItemButton className="my-btn">
                                <ListItemIcon>
                                    <CalculateIcon/>
                                </ListItemIcon>
                                <a href="https://akkred.uz/calculate" target="_blank">
                                    < ListItemText primary={getText("sdm14")}/>
                                </a>
                            </ListItemButton>
                            <ListItemButton className="my-btn">
                                <ListItemIcon>
                                    <DataThresholdingIcon/>
                                </ListItemIcon>
                                <a href="https://akkred.uz/inspections" target="_blank">
                                    < ListItemText primary={getText("sdm15")}/>
                                </a>
                            </ListItemButton>
                            <ListItemButton className="my-btn" onClick={() => handleClick(4)}>
                                <ListItemIcon>
                                    <SettingsIcon/>
                                </ListItemIcon>
                                <ListItemText primary={getText("sdm16")}/>
                                {openCount === 4 ? <ExpandLess/> : <ExpandMore/>}
                            </ListItemButton>
                            <Collapse in={openCount === 4} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{pl: 7}}>
                                        <a href="https://akkred.uz/documents?parents=1" target="_blank">
                                            <ListItemText className="text-color" primary={getText("sdm17")}/>
                                        </a>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <a href="https://akkred.uz/documents?parents=3" target="_blank">
                                            <ListItemText className="text-color" primary={getText("sdm18")}/>
                                        </a>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <a href="https://www.iaf.nu/articles/Mandatory_Documents_/38" target="_blank">
                                            <ListItemText className="text-color" primary={getText("sdm19")}/>
                                        </a>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <a href="https://www.iaf.nu/articles/Mandatory_Documents_/38" target="_blank">
                                            <ListItemText className="text-color" primary={getText("sdm20")}/>
                                        </a>
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </div>

                        :
                        <>
                            <ListItemButton className="my-btn">
                                <ListItemIcon>
                                    <ExploreIcon/>
                                </ListItemIcon>
                                < ListItemText primary={getText("sd1")}/>
                            </ListItemButton>
                            <ListItemButton className="my-btn" onClick={() => handleClick(1)}>
                                <ListItemIcon>
                                    <AppsIcon/>
                                </ListItemIcon>
                                <ListItemText primary={getText("sd111")}/>
                                <Badge color="primary" badgeContent={24} showZero/>
                                {openCount === 1 ? <ExpandLess/> : <ExpandMore/>}
                            </ListItemButton>
                            <Collapse in={openCount === 1} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sd2")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sd3")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sd4")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sd5")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sd6")}/>
                                    </ListItemButton>
                                </List>
                            </Collapse>
                            <ListItemButton className="my-btn">
                                <ListItemIcon>
                                    <ImageIcon/>
                                </ListItemIcon>
                                <ListItemText primary={getText("sd7")}/>
                            </ListItemButton>
                            <ListItemButton className="my-btn" onClick={() => handleClick(2)}>
                                <ListItemIcon>
                                    <BarChartIcon/>
                                </ListItemIcon>
                                <ListItemText primary={getText("sd8")}/>
                                <Badge color="error" badgeContent={11} showZero/>
                                {openCount === 2 ? <ExpandLess/> : <ExpandMore/>}
                            </ListItemButton>
                            <Collapse in={openCount === 2} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sd9")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sd10")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sd11")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sd12")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sd13")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sd14")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sd15")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sd16")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sd17")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sd18")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sd19")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sd20")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sd21")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sd22")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sd23")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sd24")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sd25")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sd26")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sd27")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sd28")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sd29")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sd30")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sd31")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sd32")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sd33")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sd34")}/>
                                    </ListItemButton>
                                </List>
                            </Collapse>
                            <ListItemButton className="my-btn">
                                <ListItemIcon>
                                    <Looks3Icon/>
                                </ListItemIcon>
                                <ListItemText primary={getText("sd33")}/>
                            </ListItemButton>
                            <ListItemButton className="my-btn" onClick={() => handleClick(3)}>
                                <ListItemIcon>
                                    <Looks4Icon/>
                                </ListItemIcon>
                                <ListItemText primary={getText("sd34")}/>
                                <Badge color="error" badgeContent={14} showZero/>
                                {openCount === 3 ? <ExpandLess/> : <ExpandMore/>}
                            </ListItemButton>
                            <Collapse in={openCount === 3} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sd35")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sd36")}/>
                                    </ListItemButton>
                                </List>
                            </Collapse>
                            <ListItemButton className="my-btn">
                                <ListItemIcon>
                                    <ViewColumnIcon/>
                                </ListItemIcon>
                                <ListItemText primary={getText("sd37")}/>
                            </ListItemButton>
                            <ListItemButton className="my-btn">
                                <ListItemIcon>
                                    <ShowChartIcon/>
                                </ListItemIcon>
                                <ListItemText primary={getText("sd38")}/>
                            </ListItemButton>
                            <ListItemButton className="my-btn" onClick={() => handleClick(4)}>
                                <ListItemIcon>
                                    <NavigationIcon/>
                                </ListItemIcon>
                                <ListItemText primary={getText("sd39")}/>
                                {openCount === 4 ? <ExpandLess/> : <ExpandMore/>} </ListItemButton>
                            <Collapse in={openCount === 4} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sd40")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sd41")}/>
                                    </ListItemButton>
                                </List>
                            </Collapse>
                            <ListItemButton className="my-btn" onClick={() => handleClick(5)}>
                                <ListItemIcon>
                                    <PagesIcon/>
                                </ListItemIcon>
                                <ListItemText primary={getText("sd42")}/>
                                {openCount === 5 ? <ExpandLess/> : <ExpandMore/>}
                            </ListItemButton>
                            <Collapse in={openCount === 5} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sd43")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sd44")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sd45")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sd46")}/>
                                    </ListItemButton>
                                </List>
                            </Collapse>
                            <ListItemButton className="my-btn" onClick={() => handleClick(6)}>
                                <ListItemIcon>
                                    <PersonIcon/>
                                </ListItemIcon>
                                <ListItemText primary={getText("sd47")}/>
                                {openCount === 6 ? <ExpandLess/> : <ExpandMore/>}
                            </ListItemButton>
                            <Collapse in={openCount === 6} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sd48")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sd49")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sd50")}/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sd51")}/>
                                    </ListItemButton>
                                </List>
                            </Collapse>
                            <ListItemButton className="my-btn" onClick={() => handleClick(7)}>
                                <ListItemIcon>
                                    <FaceIcon/>
                                </ListItemIcon>
                                <ListItemText primary={getText("sd52")}/>
                                {openCount === 7 ? <ExpandLess/> : <ExpandMore/>}
                            </ListItemButton>
                            <Collapse in={openCount === 7} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary="404"/>
                                    </ListItemButton>
                                    <ListItemButton sx={{pl: 7}}>
                                        <ListItemText className="text-color" primary={getText("sd52")}/>
                                    </ListItemButton>
                                </List>
                            </Collapse>
                            <ListItemButton className="my-btn">
                                <ListItemIcon>
                                    <LocalLibraryIcon/>
                                </ListItemIcon>
                                <ListItemText primary={getText("sd55")}/>
                            </ListItemButton>
                            <ListItemButton className="my-btn">
                                <ListItemIcon>
                                    <BookmarkIcon/>
                                </ListItemIcon>
                                <ListItemText primary={getText("sd56")}/>
                            </ListItemButton>
                        </>
                }


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
            </ul>


        </nav>

    );
};

export default SideBar;
