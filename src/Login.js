import React, {useState} from "react";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import {menuItems} from "./infoMenus";
import {Link} from "react-router-dom";
import {
    Card,
    CardActions,
    CardContent, FormControl, InputLabel, Select, TextField,
    Typography
} from "@mui/material";
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
    const [email, setEmail] = React.useState('');
    const [errors, setErrors] = React.useState('');
    const [dadosUsuario, setDadosUsuario] = useState(jsonData);

    const handleChangeTipo = (event) => {
        setTipo(event.target.value);
    };

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleChangeComentario = (event) => {
        setComentario(event.target.value);
    };

    const objetoTabela = {
        tipo,
        comentario,
    };

    const tableRows = dadosUsuario.map((info) => {
        return (
            <tr>
                <td>{info.tipo}</td>
                <td>{info.comentario}</td>
            </tr>
        );
    });

    const addRows = () => {
        if (email.length < 4 || tipo.length < 4 || comentario.length < 4) {
            setErrors("por favor, preencha todos os campos")
        } else {
            setErrors('')
            const dadosParaInserir = [...dadosUsuario];
            dadosParaInserir.push(objetoTabela);
            setDadosUsuario(dadosParaInserir);

            setTipo('');
            setComentario('');
            setEmail('')
        }
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
                                        error={errors}
                                        helperText={errors}
                                        onChange={handleChangeTipo}
                                    >
                                        <MenuItem value={'critica'}>Critica</MenuItem>
                                        <MenuItem value={'sugestao'}>Sugestao</MenuItem>
                                        <MenuItem value={'elogio'}>Elogio</MenuItem>
                                    </Select>

                                    <TextField variant="outlined"
                                               label={"Email"}
                                               className="espacamento"
                                               onChange={handleChangeEmail}
                                               value={email}
                                               error={errors}
                                               helperText={errors}
                                    />

                                    <TextField variant="outlined"
                                               multiline
                                               rows={10}
                                               className="espacamento"
                                               label={"Escreva seu comentário"}
                                               onChange={handleChangeComentario}
                                               value={comentario}
                                               error={errors}
                                               helperText={errors}
                                    />

                                </FormControl>
                            </div>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={addRows}>Enviar</Button>
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
                                        <th>Tipo</th>
                                        <th>Comentario</th>
                                    </tr>
                                    </thead>
                                    <tbody>{tableRows}</tbody>
                                </table>

                                <br/>
                            </div>
                        </CardContent>
                    </Card>
                </div>


            </div>
            <div className="rodape"> Alunos: Elizabeth, Jordana e Ueran.</div>
        </div>
    );
}
