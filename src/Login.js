import React, {useState} from "react";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import {menuItems} from "./infoMenus";
import {Link, useNavigate} from "react-router-dom";
import {
    Card,
    CardActions,
    CardContent, FormControl, InputLabel, Select, TextField,
    Typography
} from "@mui/material";
import Tabela from "./Tabela"
import StudentForm from "./Forms";
import jsonData from "./exemplo.json";


export default function Login() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (index, event) => {
        setAnchorEl({[index]: event.currentTarget});
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

    return (
        <div>
            <div className="cabecalho">
                <h2 className="logo">FRUB</h2>
                <Toolbar className="toolbar">
                    {Object.keys(menuItems).map((item, index) => (
                        <div className="navButton" key={index}>
                            <Button color="inherit" onClick={(e) => handleClick(index, e)}>
                                {item}
                                <i className="fas fa-caret-down"/>
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

                <div className="card">
                    <Card variant="outlined" sx={{minWidth: 40}} className="card2">
                        <CardContent>
                            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                BOAS VINDAS
                            </Typography>
                            <a>Aluno, seja bem-vindo ao seu espaço do estudante! <br></br>
                                Aqui você pode encontrar vários recursos úteis para sua graduação.
                            </a>
                        </CardContent>
                    </Card>

                    <Card variant="outlined" sx={{minWidth: 50}} className="card2">
                        <CardContent>
                            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                FORMULARIO
                            </Typography>
                            <a>Tem alguma sugestão ou crítica? Manda pra gente!</a>

                            <div className="card-texto">
                                <FormControl>
                                    <InputLabel id="tipo-comentario-label">Tipo Comentario</InputLabel>
                                    <Select
                                        labelId="tipo-comentario-label"
                                        id="tipo-comentario"
                                        label={"Tipo Comentario"}
                                        className="espacamento"
                                        onChange={handleChangeTipo}
                                    >
                                        <MenuItem value={'critica'}>Critica</MenuItem>
                                        <MenuItem value={'sugestao'}>Sugestao</MenuItem>
                                        <MenuItem value={'elogio'}>Elogio</MenuItem>
                                    </Select>

                                    <TextField variant="outlined"
                                               label={"Email"}
                                               className="espacamento"
                                    />

                                    <TextField variant="outlined"
                                               multiline
                                               rows={10}
                                               className="espacamento"
                                               label={"Escreva seu comentário"}
                                               onChange={handleChangeComentario}
                                               value={comentario}
                                    />

                                </FormControl>
                            </div>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={resetar}>Enviar</Button>
                        </CardActions>
                    </Card>

                    <Card variant="outlined" sx={{minWidth: 40}} className="card2">
                        <CardContent>
                            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                TABELA
                            </Typography>

                            <div>
                                <table className="table table-stripped">
                                    <thead>
                                    <tr>
                                        <th>Codigo</th>
                                        <th>Tipo</th>
                                        <th>Comentario</th>
                                    </tr>
                                    </thead>
                                    <tbody>{tableRows}</tbody>
                                </table>

                                <br/>
                            </div>

                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={addRows}>Atualizar</Button>
                        </CardActions>
                    </Card>
                </div>


            </div>
            <div className="rodape"> Alunos: Elizabeth, Jordana e Ueran.</div>
        </div>
    );
}
