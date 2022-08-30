import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import {TextField} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function App() {
    return (
        <div class="split left">
            <div class="centered">
                <h2 class="preto"> F </h2>
                <h2 class="preto-claro"> R </h2>
                <h2 class="cinza-escuro"> U </h2>
                <h2 class="cinza"> B </h2>

                <div class="texto-padrao">
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

                <Button variant="contained" size={"large"} endIcon={<ArrowForwardIcon />}>Entrar</Button>

                <div className="texto-padrao mini">
                    <h3> Ja possui conta? Clique aqui. </h3>
                </div>

            </div>
        </div>
    );
}

export default App;
