import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import { menuItems } from "../infoMenus";
import { Link } from "react-router-dom";
import {
    Card,
    CardContent,
    TextField,
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

    const val = {
        tipo,
        comentario,
    };

    const [studentData, setStudentData] = useState(jsonData);

    const addRows = (data) => {
        const totalStudents = val.length;
        data.id = totalStudents + 1;
        const updatedStudentData = [...studentData];
        updatedStudentData.push(val);
        setStudentData(updatedStudentData);
    };

    const trocarImagemPerfil = () => {
    }

    return (
        <div>
            <Cabecalho></Cabecalho>
            <div className="cabecalho2">

                <div className="cardProfile">

                    <Card variant="outlined" sx={{ minWidth: 40 }} className="cardInstitucional">
                        <CardContent>
                            <Typography sx={{ fontSize: 14, marginLeft: 2 }} color="text.secondary" gutterBottom >
                                Detalhes do Usuário
                            </Typography>

                            <div className="table2">
                                <table>
                                    <thead>
                                        <tr>
                                            <TextField
                                                margin="normal"
                                                id="nome"
                                                label="Nome"
                                                name="nome"
                                                autoComplete="nome"
                                                autoFocus
                                                variant={"filled"}
                                                disabled
                                            />
                                            <br />
                                            <TextField
                                                margin="normal"
                                                id="email"
                                                label="E-mail"
                                                name="email"
                                                autoComplete="email"
                                                autoFocus
                                                variant={"filled"}
                                                disabled
                                            />
                                            <br />
                                            <TextField
                                                margin="normal"
                                                name="senha"
                                                label="Senha"
                                                type="senha"
                                                id="senha"
                                                variant={"filled"}
                                                disabled
                                            />
                                        </tr>
                                    </thead>
                                </table>

                                <br />
                            </div>

                            <div class="imagemPerfil"><img className="imagemDoPerfil" src="../imagemPerfil.jpg"></img></div>

                            <div className="textoImagemPerfil">
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Trocar Imagem do Perfil
                                </Typography>
                            </div>

                        </CardContent>
                    </Card>

                </div>

            </div>
            <div className="rodape">Alunos: Elizabeth Junkes, Jordana Tomio e Ueran Piazza.</div>
        </div>
    );
}
