import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import { menuItems } from "../infoMenus";
import { Link } from "react-router-dom";
import {
    Card,
    CardActions,
    CardContent, FormControl, InputLabel, Select, TextField,
    Typography
} from "@mui/material";
import jsonData from "../exemplo.json";
import Cabecalho from "./Cabecalho";


export default function Login() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (index, event) => {
        setAnchorEl({ [index]: event.currentTarget });
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const [tipo, setTipo] = React.useState('');
    const [comentario, setComentario] = React.useState('');

    const handleChangeTipo = (event) => {
        setTipo(event.target.value);
    };

    const val = {
        tipo,
        comentario,
    };

    const handleChangeComentario = (event) => {
        setComentario(event.target.value);
    };

    const resetar = () => {
        setTipo('');
        setComentario('');
    };

    const [studentData, setStudentData] = useState(jsonData);

    const tableRows = studentData.map((info) => {
        return (
            <tr>
                <td>{info.id}</td>
                <td>{info.tipo}</td>
                <td>{info.comentario}</td>
            </tr>
        );
    });

    const addRows = (data) => {
        const totalStudents = val.length;
        data.id = totalStudents + 1;
        const updatedStudentData = [...studentData];
        updatedStudentData.push(val);
        setStudentData(updatedStudentData);
    };

    function alerta() {
        alert("Boleto pago!");
    }

    return (
        <div className="cabecalho">
                <Cabecalho></Cabecalho>
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

                <div className="cardProfile">

                    <Card variant="outlined" sx={{ minWidth: 40 }} className="cardNotas">
                        <CardContent>

                            <div>
                                <table className="">
                                    <thead>
                                        <tr>
                                            <th>Data Vencimento</th>
                                            <th>Convênio</th>
                                            <th>Valor Bruto</th>
                                            <th>Abatimento</th>
                                            <th>Deduções</th>
                                            <th>Acréscimo</th>
                                            <th>Multa</th>
                                            <th>Data Pagamento</th>
                                            <th>Valor Pago</th>
                                            <th>Detalhes</th>
                                        </tr>
                                        <tr>
                                            <th>25/09/2022</th>
                                            <th>Nenhum</th>
                                            <th>1.211,91</th>
                                            <th>0,00</th>
                                            <th>0,00</th>
                                            <th>0,00</th>
                                            <th>0,00</th>
                                            <th>12/09/2022</th>
                                            <th>1.211,91</th>
                                            <th>
                                            <Button
                                                    variant="contained"
                                                    size={"small"}
                                                    onClick={alerta}
                                                >
                                                    Detalhes</Button>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th>25/08/2022</th>
                                            <th>Nenhum</th>
                                            <th>1.211,91</th>
                                            <th>0,00</th>
                                            <th>0,00</th>
                                            <th>0,00</th>
                                            <th>0,00</th>
                                            <th>17/08/2022</th>
                                            <th>1.211,91</th>
                                            <th>
                                            <Button
                                                    variant="contained"
                                                    size={"small"}
                                                    onClick={alerta}
                                                >
                                                    Detalhes</Button>
                                            </th>
                                        </tr>
                                    </thead>
                                </table>

                                <br />
                            </div>

                        </CardContent>
                    </Card>
                </div>


            <div className="rodape"> Alunos: Elizabeth, Jordana e Ueran.</div>
        </div>
    );
}
