import frub_logo from "../frub_logo.png";
import Toolbar from "@material-ui/core/Toolbar";
import {menuItems} from "../infoMenus";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {Link} from "react-router-dom";
import React from "react";

function Cabecalho() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (index, event) => {
        setAnchorEl({[index]: event.currentTarget});
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="cabecalho">
            <img src={frub_logo} alt="Logo" className="logo"/>

            <div className="div-logo">
                <h2 className="logo">FRUB</h2>
                <h3 className="logo complemento-area-estudante">Área do Estudante</h3>
            </div>

            <Toolbar className="toolbar">
                {Object.keys(menuItems).map((item, index) => (
                    <div className="navButton" key={index}>
                        <Button color="inherit" onClick={(e) => handleClick(index, e)}>
                            {item}
                        </Button>
                        <Menu
                            anchorEl={anchorEl && anchorEl[index]}
                            keepMounted
                            open={anchorEl && Boolean(anchorEl[index])}
                            onClose={handleClose}
                            getContentAnchorEl={null}
                            anchorOrigin={{vertical: "bottom", horizontal: "center"}}
                            transformOrigin={{vertical: "top", horizontal: "center"}}
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
        </div>)
}

export default Cabecalho;