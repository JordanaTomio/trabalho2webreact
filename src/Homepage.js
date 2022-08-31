import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {useNavigate } from "react-router-dom";

function Homepage() {
    const navigate = useNavigate();
    const home = () => {
        navigate("/register");
    }

    return (<div className="split left">
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
            />

            <Button
                variant="contained"
                size={"large"}
                endIcon={<ArrowForwardIcon/>}
                onClick={home}
            >
                Entrar</Button>

            <div className="texto-padrao mini">
                <h3> Ja possui conta? Clique aqui. </h3>
            </div>

        </div>
    </div>
    );
}

export default Homepage;