import { Navigate } from "react-router-dom";

export const VerificacaoRotas = ({ children }) => {
    let estaLogado = localStorage.getItem("isLog")
    console.log("esta logado: " + estaLogado)

    if (estaLogado.toString() === "false") {
        console.log("nao esta logado")
        return <Navigate to="/" />
    } else {
        console.log("logado")
        return children;
    }
};
