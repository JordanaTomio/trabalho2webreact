import React from "react";

import Button from "@material-ui/core/Button";
import {
    Card,
    CardContent
} from "@mui/material";
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";


export default function Login() {
    function alerta() {
        alert("Boleto pago!");
    }
    return (
        <div className="cabecalho">
            <Cabecalho></Cabecalho>
            <div className="cardFinances">

                <Card variant="outlined" sx={{minWidth: 40}} className="cardNotas">
                    <CardContent>

                        <div>
                            <table className="">
                                <thead>
                                <tr>
                                    <th>Data Vencimento</th>
                                    <th>Convênio</th>
                                    <th>Valor Bruto</th>
                                    <th>Abatimento</th>
                                    <th>Deduções</th>
                                    <th>Acréscimo</th>
                                    <th>Multa</th>
                                    <th>Data Pagamento</th>
                                    <th>Valor Pago</th>
                                    <th>Detalhes</th>
                                </tr>
                                <tr>
                                    <td>25/09/2022</td>
                                    <td>Nenhum</td>
                                    <td>1.211,91</td>
                                    <td>0,00</td>
                                    <td>0,00</td>
                                    <td>0,00</td>
                                    <td>0,00</td>
                                    <td>12/09/2022</td>
                                    <td>1.211,91</td>
                                    <td>
                                        <Button
                                            variant="contained"
                                            size={"small"}
                                            onClick={alerta}
                                        >
                                            Detalhes</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>25/08/2022</td>
                                    <td>Nenhum</td>
                                    <td>1.211,91</td>
                                    <td>0,00</td>
                                    <td>0,00</td>
                                    <td>0,00</td>
                                    <td>0,00</td>
                                    <td>17/08/2022</td>
                                    <td>1.211,91</td>
                                    <td>
                                        <Button
                                            variant="contained"
                                            size={"small"}
                                            onClick={alerta}
                                        >
                                            Detalhes</Button>
                                    </td>
                                </tr>
                                </thead>
                            </table>

                            <br/>
                        </div>

                    </CardContent>
                </Card>
            </div>
            <Rodape/>
        </div>
    );
}
