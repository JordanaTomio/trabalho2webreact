import {Link, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {useNavigate } from "react-router-dom";
import React from "react";

function Homepage() {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const [errors, setErrors] = React.useState('');

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleChangeSenha = (event) => {
        setSenha(event.target.value);
    };

    const registrar = () => {
        navigate("/register");
    }

    const logar = () => {
        if (email.length > 0 && senha.length > 0) {
            setErrors('');
            navigate("/login");
        } else {
            setErrors("por favor, preencha todos os campos")
        }
    }
    return (
        <div className="split left">
        <div className="centered">
            <h2 className="preto"> F </h2>
            <h2 className="preto-claro"> R </h2>
            <h2 className="cinza-escuro"> U </h2>
            <h2 className="cinza"> B </h2>

            <div className="texto-padrao">
                <h3> Inicie sua sessao. </h3>
            </div>

            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                variant={"filled"}
                value={email}
                error={errors}
                helperText={errors}
                onChange={handleChangeEmail}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="senha"
                label="Senha"
                type="senha"
                id="senha"
                variant={"filled"}
                value={senha}
                onChange={handleChangeSenha}
                error={errors}
                helperText={errors}
            />

            <Button
                variant="contained"
                size={"large"}
                endIcon={<ArrowForwardIcon/>}
                onClick={logar}
            >
                Entrar</Button>

            <div className="texto-padrao mini">
                <h3>Não possui cadastro? </h3>
                <Link href={"/register"} onClick={registrar}>
                    Clique aqui
                </Link>
            </div>

        </div>
    </div>
    );
}

export default Homepage;