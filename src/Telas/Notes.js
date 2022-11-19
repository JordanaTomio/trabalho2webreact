import React, {useEffect, useState} from "react";
import {
    Card,
    CardContent
} from "@mui/material";
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import jsonData from "../exemplo_nota.json";
import axios from "axios";

export default function Login() {
    const [dadosUsuario, setDadosUsuario] = useState(jsonData);

    const colunasTabela = dadosUsuario.map((info) => {
        return (
            <tr>
                <td>{info.avaliacao}</td>
                <td>{info.nota}</td>
                <td>{info.peso}</td>
            </tr>
        );
    });

    useEffect(() => {
        console.log(localStorage.getItem('email'));
        axios.post('http://localhost:8090/nota/find', localStorage.getItem('email')).then(response =>
        {
            console.log(response.data)
            const dadosParaInserir = [...response.data];
            setDadosUsuario(dadosParaInserir);
        });

    }, []);

    return (
        <div>
            <Cabecalho></Cabecalho>

                <div className="cardNotas">

                    <Card variant="outlined" sx={{ minWidth: 40 }} className="cardNotas">
                        <CardContent>

                            <div>
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th>Avaliação</th>
                                        <th>Nota</th>
                                        <th>Peso</th>
                                    </tr>
                                    </thead>
                                    <tbody>{colunasTabela}</tbody>
                                </table>
                                <br />
                            </div>

                        </CardContent>
                    </Card>
                </div>

            <Rodape/>
        </div>
    );
}

