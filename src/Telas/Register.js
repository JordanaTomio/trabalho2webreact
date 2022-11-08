import "../Register.css";
import {Link, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {useNavigate} from "react-router-dom";
import React from "react";
import axios from "axios";

function Register() {
    const navigate = useNavigate();

    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const [nome, setNome] = React.useState('');
    const [errors, setErrors] = React.useState('');

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleChangeSenha = (event) => {
        setSenha(event.target.value);
    };

    const handleChangeNome = (event) => {
        setNome(event.target.value);
    };

    const logar = () => {
        navigate("/");
    }

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const registrar = () => {
        if (email.length > 0 && senha.length > 0 && nome.length > 0 && validateEmail(email)) {
            setErrors('');
            localStorage.setItem("isLog", "true");
            const usuario = {nome: nome, email: email, senha: senha};
            axios.post('http://localhost:8090/usuarios/inserir', usuario)
                .then(response => {
                    console.log(response)
                    if (response.data === 200) {
                        navigate("/menus");
                    } else if (response.data === 422) {
                        setErrors("email ja cadastrado")
                    }
                });

        } else {
            setErrors("por favor, preencha todos os campos")
        }
    }

    return (
        <>
            <body class="container-register-main">
            <div class="container-register">
                <div class="imagem-register"><img src="./imagemRegistro.webp"></img></div>
                <div class="cadastro-register">
                    <img link=""></img>
                    <h1>Cadastre-se</h1>
                    <p>Já possui conta?
                        <Link href={"/"} onClick={logar}>
                            Clique aqui
                        </Link>
                    </p>
                    <TextField
                        margin="normal"
                        required
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        variant={"filled"}
                        value={email}
                        onChange={handleChangeEmail}
                        error={errors}
                        helperText={errors}
                    />
                    <br/>
                    <TextField
                        margin="normal"
                        required
                        name="nome"
                        label="Nome"
                        type="nome"
                        id="nome"
                        value={nome}
                        variant={"filled"}
                        onChange={handleChangeNome}
                        error={errors}
                        helperText={errors}
                    />
                    <br/>
                    <TextField
                        margin="normal"
                        required
                        name="senha"
                        label="Senha"
                        type="password"
                        id="senha"
                        value={senha}
                        variant={"filled"}
                        onChange={handleChangeSenha}
                        error={errors}
                        helperText={errors}
                    />
                    <br/>
                    <Button
                        variant="contained"
                        size={"large"}
                        endIcon={<ArrowForwardIcon/>}
                        onClick={registrar}
                    >Cadastrar</Button>
                </div>
            </div>
            </body>
        </>
    );
}

export default Register;
