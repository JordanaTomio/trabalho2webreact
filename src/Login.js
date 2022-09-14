import React from "react";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import { menuItems } from "./infoMenus";
import {Link, useNavigate} from "react-router-dom";


export default function Login() {
    const navigate = useNavigate();
    const navegar = (path) => {
        navigate("/" + path);
    }
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (index, event) => {
        setAnchorEl({ [index]: event.currentTarget });
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="cabecalho">
            <h2 className="logo">FRUB</h2>
            <Toolbar className="toolbar">
                {Object.keys(menuItems).map((item, index) => (
                    <div className="navButton" key={index}>
                        <Button color="inherit" onClick={(e) => handleClick(index, e)}>
                            {item}
                            <i className="fas fa-caret-down" />
                        </Button>
                        <Menu
                            anchorEl={anchorEl && anchorEl[index]}
                            keepMounted
                            open={anchorEl && Boolean(anchorEl[index])}
                            onClose={handleClose}
                            getContentAnchorEl={null}
                            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                            transformOrigin={{ vertical: "top", horizontal: "center" }}
                        >
                            {menuItems[item].map((menuitems, menuindex) => (
                                <MenuItem
                                    key={menuindex}
                                    selected={menuitems === item}
                                    component={Link} to={menuitems.path}
                                >
                                    {menuitems.title}

                                </MenuItem>
                            ))}
                        </Menu>
                    </div>
                ))}
            </Toolbar>
        </div>
    );
}
