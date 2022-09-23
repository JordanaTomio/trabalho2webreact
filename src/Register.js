import "./Register.css";
import { Link, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    const logar = () => {
        navigate("/login");
    }
    
    return (
        <>
            <body>
                <div class="container">
                    <div class="imagem"><img src="./imagemRegistro.png"></img></div>
                    <div class="cadastro">
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
                        />
                        <br />
                        <TextField
                            margin="normal"
                            required
                            name="nome"
                            label="Nome"
                            type="nome"
                            id="nome"

                            variant={"filled"}
                        />
                        <br />
                        <TextField
                            margin="normal"
                            required
                            name="senha"
                            label="Senha"
                            type="senha"
                            id="senha"

                            variant={"filled"}
                        />
                        <br />
                        <Button
                            variant="contained"
                            size={"large"}
                            endIcon={<ArrowForwardIcon />}
                        >Cadastrar</Button>
                    </div>
                </div>
            </body>
        </>
    );
}
export default Register;
