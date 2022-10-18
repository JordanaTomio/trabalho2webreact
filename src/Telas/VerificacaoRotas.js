import { Navigate, useNavigate } from "react-router-dom";

export const VerificacaoRotas = ({ children }) => {
    let estaLogado = localStorage.getItem("isLog")
    console.log("esta logado:" + estaLogado)

    if (estaLogado.toString() === "false") {
        console.log("nao pode logar")

        return <Navigate to="/" />
    } else {
        console.log("tem que logar")

        return children;
    }
};
