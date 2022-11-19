import * as React from 'react';

import {Link, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {useNavigate } from "react-router-dom";

import imagem_trabalho from "../imagem_trabalho.png"
import arte_novo from "../arte_novo.png"
import logo from "../logo.png"

import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import {useEffect} from "react";
import axios from "axios";

const isLoggedIn = false;

function Homepage() {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const [errors, setErrors] = React.useState('');
    const [checked, setChecked] = React.useState(false);
    const [isLoggedIn, setisLoggedIn] = React.useState(false);

    function validar() {
        if (localStorage.getItem('emailSalvo') != null) {
            setEmail(localStorage.getItem('emailSalvo'))
            setSenha(localStorage.getItem('senhaSalva'))
        } else {
            setEmail('')
            setSenha('')
        }

        setChecked(localStorage.getItem("checked"))
        console.log("logado? " + localStorage.getItem("checked"))
    }


    useEffect(() => {
        validar();
    }, []);

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleChangeSenha = (event) => {
        setSenha(event.target.value);
    };

    const handleChange = () => {
        setChecked(!checked);
        localStorage.setItem("checked", !checked)
    };

    const registrar = () => {
        navigate("/register");
    }

    localStorage.setItem("isLog", "false");

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const logar = () => {
        console.log("logado:" + localStorage.getItem("isLog"))

        if (email.length > 0 && senha.length > 0 && validateEmail(email)) {
            console.log("fazendo login...")

            setErrors('');
            localStorage.setItem("isLog", "true");
            localStorage.setItem("email", email);

            const usuario = {nome: '', email: email, senha: senha};
            axios.post('http://localhost:8090/usuarios/login', usuario)
                .then(response => {
                    console.log(response)
                    if (response.data === 200) {
                        navigate("/menus");
                    } else if (response.data === 403) {
                        setErrors("email/senha incorretos")
                    }
                });

            if (checked === true) {
                localStorage.setItem("emailSalvo", email);
                localStorage.setItem("senhaSalva", senha);
                localStorage.setItem("checked", true);
            } else {
                localStorage.setItem("senhaSalva", '');
                localStorage.setItem("emailSalvo", '');
                localStorage.setItem("checked", false);
            }

        } else {
            setErrors("por favor, preencha todos os campos")
        }
    }

    return (
        <><div className="split left">
            <div className="centered">
                <img src={logo} className="logo2"/>
                <img src={arte_novo} className="arte" />
                <div className="texto-padrao">
                    <h4 style={{marginBottom: "25px"}}>Bem-vindo de volta!</h4>
                </div>

                <div className="texto-padrao" style={{ textAlign: "left" }}>
                    <h5 style={{ marginBottom: "10px" }}>Iniciar sessão:</h5>
                </div>
                <TextField className="input"
                           margin="normal"
                           size="normal"
                           required
                           fullWidth
                           id="email"
                           label="Email"
                           name="email"
                           autoComplete="email"
                           autoFocus
                           variant={"filled"}
                           placeholder="email@email.com"
                           value={email}
                           error={errors}
                           helperText={errors}
                           onChange={handleChangeEmail}
                           InputProps={{
                               startAdornment: (
                                   <InputAdornment position="start">
                                       <AccountCircle />
                                   </InputAdornment>
                               ),
                           }} />

                <TextField className="input"
                           marginTop="15px"
                           required
                           fullWidth
                           name="senha"
                           label="Senha"
                           type="password"
                           id="senha"
                           variant={"filled"}
                           placeholder="******"
                           value={senha}
                           onChange={handleChangeSenha}
                           error={errors}
                           helperText={errors}
                           InputProps={{
                               startAdornment: (
                                   <InputAdornment position="start">
                                       <LockIcon />
                                   </InputAdornment>
                               ),
                           }} />


                <label>
                    <input type="checkbox"
                           checked={checked}
                           onChange={handleChange}
                           value={checked}/>
                    Lembrar
                </label>

                <Button
                    style={{margin: "10px"}}
                    background-color="#ffffff"
                    variant="contained"
                    size={"large"}
                    endIcon={<ArrowForwardIcon />}
                    onClick={logar}>

                    Entrar</Button>

                <div className="texto-padrao mini">
                    <h5 style={{ marginTop: "8px"}}>Não possui cadastro? <Link href={"/register"} onClick={registrar}><a>Clique aqui</a></Link></h5>
                </div>

            </div>
        </div>

            <div className="split right">
                <div className="centered">
                    <img src={imagem_trabalho} className="image" />
                </div>
            </div></>


    );

}

export {Homepage, isLoggedIn};
