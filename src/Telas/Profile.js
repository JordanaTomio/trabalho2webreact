import React, { useState } from "react";
import {
    Card,
    CardContent,
    TextField,
    Typography
} from "@mui/material";
import jsonData from "../exemplo.json";
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";


export default function Login() {
    return (
        <div>
            <Cabecalho></Cabecalho>
            <div className="cabecalho2">

                <div className="cardProfile">

                    <Card variant="outlined" sx={{ minWidth: 40 }} className="cardInstitucional">
                        <CardContent>
                            <Typography sx={{ fontSize: 18, marginLeft: 4 }} color="text.primary" gutterBottom >
                                Detalhes do Usuário
                            </Typography>

                            <div>
                                <table className="table2">
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
                                <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                                    Trocar Imagem do Perfil
                                </Typography>
                            </div>

                        </CardContent>
                    </Card>

                </div>

            </div>
            <Rodape/>
        </div>
    );
}
