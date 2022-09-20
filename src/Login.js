import React from "react";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import { menuItems } from "./infoMenus";
import {Link, useNavigate} from "react-router-dom";
import {Card, CardActions, CardContent, Typography} from "@mui/material";

const styles = {
    card: {
        minWidth: 275,
        display: "inline-block"
    }
};

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
        <div>  <div className="cabecalho">
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

            <div className="card">
                <Card variant="outlined" sx={{ minWidth: 100 }} className="card2">
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            BOAS VINDAS
                        </Typography>
                        <Typography variant="h5" component="div">
                            duvidas?
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            adjective
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                </Card>

                <Card variant="outlined" sx={{ minWidth: 100 }} className="card2">
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            FORMULARIO
                        </Typography>
                        <Typography variant="h5" component="div">
                            duvidas?
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            adjective
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>

                <Card variant="outlined" sx={{ minWidth: 100 }}  className="card2">
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            TABELA
                        </Typography>
                        <Typography variant="h5" component="div">
                            duvidas?
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            adjective
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>


        </div>
            <div className="rodape"> Alunos: Elizabeth, Jordana e Ueran.</div>
        </div>
    );
}
