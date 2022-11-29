import React, { useEffect, useState } from "react";
import {
    Button,
    Card,
    CardContent,
    TextField,
    Typography
} from "@mui/material";
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import axios from "axios";
import { ContactPageOutlined } from "@mui/icons-material";
import {useNavigate} from "react-router-dom";

export default function Login() {

    const [nome, setNome] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [errors, setErrors] = React.useState('');
    const [checked, setChecked] = React.useState(false);

    const navigate = useNavigate();

    const handleChangeSenha = (event) => {
        setSenha(event.target.value);
    };

    const handleChangeNome = (event) => {
        setNome(event.target.value);
    };

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function editar() {

        if (document.getElementById("botaoEditar").textContent = "Editar Perfil") {
            document.getElementById("botaoEditar").textContent = "Salvar";
        }

        document.getElementById("nome").disabled = false;
        document.getElementById("senha").disabled = false;
        document.getElementById("nome").variant = "outlined";
        document.getElementById("senha").variant = "outlined";
    }

    function salvar() {

        if (document.getElementById("botaoEditar").textContent = "Salvar") {
            document.getElementById("botaoEditar").textContent = "Editar Perfil";
        }

        document.getElementById("nome").disabled = true;
        document.getElementById("senha").disabled = true;

        if (nome.length > 0 && senha.length > 0 && validateEmail(email)) {

            const usuario = { nome: nome, senha: senha, email: email };
            axios.post('http://localhost:8090/usuarios/edit', usuario)
                .then(response => {
                    console.log(response)
                    if (response.data === 200) {
                        alert("Informações atualizadas!");
                    } else if (response.data === 403) {
                        alert("Informações incorretas, favor preencher os campos corretamente!");
                    }
                });

            if (checked === true) {
                localStorage.setItem("senhaSalva", senha);
                localStorage.setItem("checked", true);
            } else {
                localStorage.setItem("emailSalvo", '');
                localStorage.setItem("checked", false);
            }

        } else {
            setErrors("por favor, preencha todos os campos")
        }
    }

    function deletaConta() {
        axios.post('http://localhost:8090/usuario/excluir', localStorage.getItem('email')).then(response => {
            if(response.data === 200) {
                alert("Perfil deletado com sucesso");

                navigate("/");
            } else {
                alert("Erro ao deletar perfil!");
            }
        });
    }

    useEffect(() => {
        console.log(localStorage.getItem('email'));
        axios.post('http://localhost:8090/usuario/find', localStorage.getItem('email')).then(response => {

            setNome(response.data.nome);
            setEmail(response.data.email);
            setSenha(response.data.senha);
        });

    }, []);

    return (
        <div>
            <Cabecalho></Cabecalho>
            <div className="cabecalho2">

                <div className="cardProfile">

                    <Card variant="outlined" sx={{ minWidth: 40 }} className="cardPerfil">
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
                                                label={"Nome"}
                                                name="nome"
                                                autoComplete="nome"
                                                className="espacamento"
                                                autoFocus
                                                variant={"filled"}
                                                disabled={true}
                                                value={nome}
                                                onChange={handleChangeNome}

                                            />
                                            <br />
                                            <TextField
                                                margin="normal"
                                                variant={"filled"}
                                                disabled
                                                label={"Email"}
                                                className="espacamento"
                                                value={email}
                                            />
                                            <br />
                                            <TextField
                                                margin="normal"
                                                className="espacamento"
                                                name="senha"
                                                label={"Senha"}
                                                type="password"
                                                id="senha"
                                                variant={"filled"}
                                                disabled={true}
                                                value={senha}
                                                onChange={handleChangeSenha}
                                            />
                                        </tr>
                                    </thead>
                                </table>

                                <br />
                            </div>

                            <div class="imagemPerfil"><img className="imagemDoPerfil" src="../imagemPerfil.jpg"></img></div>

                            <div class="botaoPerfil">
                                <Button className="botaoEditarPerfil" id="botaoEditar" onClick={editar} onDoubleClick={salvar}>
                                    Editar Perfil
                                </Button>
                                <Button className="botaoExcluirPerfil" onClick={deletaConta}>
                                    Excluir Conta
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                </div>

            </div>
            <Rodape />
        </div>
    );
}
