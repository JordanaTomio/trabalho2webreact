import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";

function Courses() {
    return (
        <div>
            <Cabecalho></Cabecalho>
            <div className="card" style={{ marginTop: "135px" }}>
                <Card variant="outlined" sx={{ maxHeight: 490 }} className="card2">
                    <CardContent>
                        <Typography style={{ marginLeft: "28px" }} sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
                            Cursos de graduação oferecidos
                        </Typography>

                        <div className="">
                            <table className="table3">
                                <thead>
                                    <tr><td><b>1. </b>Direito</td></tr>
                                    <tr><b>2. </b>Administração</tr>
                                    <tr><td><b>3. </b>Contabilidade</td></tr>
                                    <td><b>4. </b>Engenharia Civil</td>
                                    <tr><td><b>5. </b>Enfermagem</td></tr>
                                    <tr><td><b>6. </b>Pedagogia</td></tr>
                                    <tr><td><b>7. </b>Psicologia</td></tr>
                                    <tr><td><b>8. </b>Fisioterapia</td></tr>
                                    <tr><td><b>9. </b>Medicina</td></tr>
                                    <tr><td><b>10. </b>Arquitetura e Urbanismo</td></tr>
                                    <tr><td><b>11. </b>Farmácia</td></tr>
                                    <tr><td><b>12. </b>Educação Física</td></tr>
                                    <tr><td><b>13. </b>Nutrição</td></tr>
                                    <tr><td><b>14. </b>Engenharia Mecânica</td></tr>
                                    <tr><td><b>15. </b>Odontologia</td></tr>
                                    <tr><td><b>16. </b>Sistemas de Informação</td></tr>
                                    <tr><td><b>17. </b>Medicina Veterinária</td></tr>
                                </thead>
                            </table>
                        </div>

                    </CardContent>
                </Card>

            </div>

            <Rodape/>
        </div>
    );

}

export default Courses;