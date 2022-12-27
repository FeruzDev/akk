import React, {useEffect, useState} from 'react';
import {SITE_LANG} from "../tools/Const";
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
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

    const drawerWidth = 240;
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
                {/*<ul className="list-unstyled components-lists">*/}
                {/*    <li> <a href="#!">HOME</a></li>*/}
                {/*    <li> <a href="#!">HOME</a></li>*/}
                {/*    <li> <a href="#!">HOME</a></li>*/}
                {/*    <li> <a href="#!">HOME</a></li>*/}
                {/*    <li> <a href="#!">HOME</a></li>*/}
                {/*</ul>*/}
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Responsive drawer
                        </Typography>
                    </Toolbar>
                </AppBar>
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
            </nav>

    );
};

export default SideBar;
