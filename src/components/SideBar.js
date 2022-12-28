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
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
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
            <nav id="sidebar" className={props.open ? "active " : ""}>
                <ul className="list-unstyled components-lists">

                        <ListItemButton className="my-btn">
                            <ListItemIcon>
                                <ExploreIcon />
                            </ListItemIcon>
                            < ListItemText  primary="Home" />
                        </ListItemButton>
                        <ListItemButton  className="my-btn"  onClick={handleClick}>
                            <ListItemIcon>
                                <AppsIcon />
                            </ListItemIcon>
                            <ListItemText    primary="Apps" />

                            <Badge color="primary" badgeContent={24} showZero>
                            </Badge>
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 7 }}>
                                    <ListItemText  className="text-color" primary="Calendar" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 7 }}>
                                    <ListItemText  className="text-color" primary="Media" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 7 }}>
                                    <ListItemText  className="text-color" primary="Messages" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 7 }}>
                                    <ListItemText  className="text-color" primary="Social" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 7 }}>
                                    <ListItemText  className="text-color" primary="Chat" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    <ListItemButton className="my-btn">
                        <ListItemIcon>
                            <ImageIcon />
                        </ListItemIcon>
                        <ListItemText  primary="Widgets" />
                    </ListItemButton>
                    <ListItemButton  className="my-btn"  onClick={handleClick}>
                        <ListItemIcon>
                            <BarChartIcon />
                        </ListItemIcon>
                        <ListItemText    primary="Material" />
                        <Badge color="error" badgeContent={11} showZero>

                        </Badge>
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 7 }}>
                                <ListItemText  className="text-color" primary="App Bar" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 7 }}>
                                <ListItemText  className="text-color" primary="Auto Complete" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 7 }}>
                                <ListItemText  className="text-color" primary="Avatars" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 7 }}>
                                <ListItemText  className="text-color" primary="Badges" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 7 }}>
                                <ListItemText  className="text-color" primary="Button Navigation" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 7 }}>
                                <ListItemText  className="text-color" primary="Buttons" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 7 }}>
                                <ListItemText  className="text-color" primary="Cards" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 7 }}>
                                <ListItemText  className="text-color" primary="Chips" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 7 }}>
                                <ListItemText  className="text-color" primary="Dialogs" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 7 }}>
                                <ListItemText  className="text-color" primary="Dividers" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 7 }}>
                                <ListItemText  className="text-color" primary="Drawers" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 7 }}>
                                <ListItemText  className="text-color" primary="Expansion Panels" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 7 }}>
                                <ListItemText  className="text-color" primary="Grid list" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 7 }}>
                                <ListItemText  className="text-color" primary="Lists" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 7 }}>
                                <ListItemText  className="text-color" primary="Menus" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 7 }}>
                                <ListItemText  className="text-color" primary="Paper" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 7 }}>
                                <ListItemText  className="text-color" primary="Progress" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 7 }}>
                                <ListItemText  className="text-color" primary="Selection Controls" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 7 }}>
                                <ListItemText  className="text-color" primary="Selects" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 7 }}>
                                <ListItemText  className="text-color" primary="Snackbars" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 7 }}>
                                <ListItemText  className="text-color" primary="Steppers" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 7 }}>
                                <ListItemText  className="text-color" primary="Progress" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 7 }}>
                                <ListItemText  className="text-color" primary="Tables" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 7 }}>
                                <ListItemText  className="text-color" primary="Tabs" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 7 }}>
                                <ListItemText  className="text-color" primary="Text Fields" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 7 }}>
                                <ListItemText  className="text-color" primary="Tooltips" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItemButton className="my-btn">
                        <ListItemIcon>
                            <Looks3Icon />
                        </ListItemIcon>
                        <ListItemText  primary="Editor" />
                    </ListItemButton>
                    <ListItemButton  className="my-btn"  onClick={handleClick}>
                        <ListItemIcon>
                            <Looks4Icon />
                        </ListItemIcon>
                        <ListItemText    primary="Ecommerce" />
                        <Badge color="error" badgeContent={14} showZero>

                        </Badge>
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 7 }}>
                                <ListItemText  className="text-color" primary="Products" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 7 }}>
                                <ListItemText  className="text-color" primary="Details" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItemButton className="my-btn">
                        <ListItemIcon>
                            <ViewColumnIcon />
                        </ListItemIcon>
                        <ListItemText  primary="TaskBoard" />
                    </ListItemButton>
                    <ListItemButton className="my-btn">
                        <ListItemIcon>
                            <ShowChartIcon />
                        </ListItemIcon>
                        <ListItemText  primary="Charts" />
                    </ListItemButton>
                    <ListItemButton className="my-btn" onClick={handleClick}>
                        <ListItemIcon>
                            <NavigationIcon />
                        </ListItemIcon>
                        <ListItemText  primary="Maps" />
                        {open ? <ExpandLess /> : <ExpandMore />} </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 7 }}>
                                <ListItemText  className="text-color" primary="Google" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 7 }}>
                                <ListItemText  className="text-color" primary="Leaflet" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItemButton className="my-btn" onClick={handleClick}>
                        <ListItemIcon>
                            <PagesIcon />
                        </ListItemIcon>
                        <ListItemText  primary="Pages" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 7 }}>
                                <ListItemText  className="text-color" primary="Invoice" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 7 }}>
                                <ListItemText  className="text-color" primary="Timeline" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 7 }}>
                                <ListItemText  className="text-color" primary="Blank" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 7 }}>
                                <ListItemText  className="text-color" primary="Pricing" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItemButton className="my-btn"  onClick={handleClick}>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText  primary="Authentication" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>

                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 7 }}>
                                <ListItemText  className="text-color" primary="SignIn" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 7 }}>
                                <ListItemText  className="text-color" primary="SignUp" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 7 }}>
                                <ListItemText  className="text-color" primary="Forgot" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 7 }}>
                                <ListItemText  className="text-color" primary="Lockscreen" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItemButton className="my-btn"  onClick={handleClick}>
                        <ListItemIcon>
                            <FaceIcon />
                        </ListItemIcon>
                        <ListItemText  primary="Error" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>

                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 7 }}>
                                <ListItemText  className="text-color" primary="404" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 7 }}>
                                <ListItemText  className="text-color" primary="Error" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItemButton className="my-btn">
                        <ListItemIcon>
                            <LocalLibraryIcon />
                        </ListItemIcon>
                        <ListItemText  primary="Documentation" />
                    </ListItemButton>
                    <ListItemButton className="my-btn">
                        <ListItemIcon>
                            <BookmarkIcon />
                        </ListItemIcon>
                        <ListItemText  primary="Get Angular Version" />
                    </ListItemButton>

                    <div className="lang-btn" >
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
