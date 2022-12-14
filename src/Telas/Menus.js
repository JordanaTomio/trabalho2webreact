import React, {useEffect, useState} from "react";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import { Card, CardActions, CardContent, FormControl, InputLabel, Select, TextField, Typography } from "@mui/material";
import jsonData from "../exemplo_ouvidoria.json";
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import axios from "axios";

export default function Menus() {

    const [tipo, setTipo] = React.useState('');
    const [comentario, setComentario] = React.useState('');
    const [assunto, setAssunto] = useState('');
    const [email, setEmail] = React.useState('');
    const [errors, setErrors] = React.useState('');
    const [dadosUsuario, setDadosUsuario] = useState(jsonData);

    const handleChangeTipo = (event) => {
        setTipo(event.target.value);
    };

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleChangeAssunto = (event) => {
        setAssunto(event.target.value);
    };

    const handleChangeComentario = (event) => {
        setComentario(event.target.value);
    };

    const objetoTabela = {
        tipo,
        assunto
    };

    const colunasTabela = dadosUsuario.map((info) => {
        return (
            <tr>
                <td>{info.tipo}</td>
                <td>{info.assunto}</td>
            </tr>
        );
    });

    const resetar = () => {
        setTipo('');
        setComentario('');
        setEmail('')
        setAssunto('')
    }

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const inserirTabela = () => {
        if (assunto.length < 4 || email.length < 4 || tipo.length < 4 || comentario.length < 4 || !validateEmail(email)) {
            setErrors("por favor, preencha todos os campos")
        } else {
            setErrors('')
            const dadosParaInserir = [...dadosUsuario];
            dadosParaInserir.push(objetoTabela);
            setDadosUsuario(dadosParaInserir);

            const ouvidoria = {tipo: tipo.toString(), comentario: comentario, email: email, assunto: assunto};
            axios.post('http://localhost:8090/ouvidoria/inserir', ouvidoria).then(response => console.log(response.status));

            setTipo('');
            setComentario('');
            setEmail('');
            setAssunto('');
        }
    };

    useEffect(() => {
        console.log(localStorage.getItem('email'));
        axios.post('http://localhost:8090/ouvidoria/find', localStorage.getItem('email')).then(response =>
        {
            const dadosParaInserir = [...response.data];
            dadosParaInserir.push(objetoTabela);
            setDadosUsuario(dadosParaInserir);
        });

    }, []);

    return (
        <div>
            <Cabecalho></Cabecalho>
            <div className="cards">
                <Card variant="outlined" sx={{ minWidth: 40 }} className="card-conteudo">
                    <CardContent>
                        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                            <b>Bem-vindo, aluno XXX!</b>
                        </Typography>
                        <Typography>Seja bem-vindo ao seu espa??o do estudante! <br></br>
                            Aqui voc?? pode encontrar v??rios recursos ??teis para sua gradua????o.
                        </Typography>
                    </CardContent>
                </Card>

                <Card variant="outlined" sx={{ minWidth: 40 }} className="card-conteudo">
                    <CardContent>
                        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                            <b>Ouvidoria</b>
                        </Typography>
                        <Typography>Tem alguma sugest??o ou cr??tica? Manda pra gente!</Typography>

                        <div className="card-texto">
                            <FormControl>
                                <InputLabel id="tipo-comentario-label">Tipo de Coment??rio*</InputLabel>
                                <Select
                                    labelId="tipo-comentario-label"
                                    id="tipo-comentario"
                                    label={"Tipo Comentario"}
                                    className="espacamento"
                                    error={errors}
                                    helperText={errors}
                                    onChange={handleChangeTipo}
                                    value={tipo}
                                    required
                                >
                                    <MenuItem value=""><em>None</em></MenuItem>
                                    <MenuItem value={'critica'}>Cr??tica</MenuItem>
                                    <MenuItem value={'sugestao'}>Sugest??o</MenuItem>
                                    <MenuItem value={'elogio'}>Elogio</MenuItem>
                                </Select>

                                <TextField variant="outlined"
                                           label={"Email"}
                                           className="espacamento"
                                           onChange={handleChangeEmail}
                                           value={email}
                                           error={errors}
                                           helperText={errors}
                                           required
                                />

                                <TextField variant="outlined"
                                           label={"Assunto"}
                                           className="espacamento"
                                           onChange={handleChangeAssunto}
                                           value={assunto}
                                           error={errors}
                                           helperText={errors}
                                           required
                                />

                                <TextField variant="outlined"
                                           multiline
                                           rows={10}
                                           className="espacamento"
                                           label={"Escreva seu coment??rio"}
                                           onChange={handleChangeComentario}
                                           value={comentario}
                                           error={errors}
                                           helperText={errors}
                                           required
                                />

                            </FormControl>
                        </div>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant="contained" onClick={inserirTabela}>Enviar</Button>
                        <Button size="small" variant="contained" onClick={resetar}>Limpar</Button>
                    </CardActions>
                </Card>

                <Card variant="outlined" sx={{ minWidth: 40 }} className="card-conteudo">
                    <CardContent>

                        <Typography sx={{ fontSize: 20 }} color="text.secondary" >
                            <b>Tabela</b>
                        </Typography>

                        <Typography>Aqui voc?? pode acompanhar seu hist??rico de coment??rios.</Typography>
                        <br></br>

                        <div>
                            <table>
                                <thead>
                                <tr>
                                    <th>Tipo</th>
                                    <th>Assunto</th>
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
