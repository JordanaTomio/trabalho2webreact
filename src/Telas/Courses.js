import React from "react";
import {Card, CardContent, Typography} from "@mui/material";
import Cabecalho from "./Cabecalho";

function Courses() {
    return (
        <div>
            <Cabecalho></Cabecalho>
            <div className="card" style={{ marginTop: "120px"}}>
                    <Card variant="outlined" sx={{maxHeight: 440}} className="card2">
                        <CardContent>
                            <Typography sx={{fontSize: 18}} color="text.secondary" gutterBottom>
                                Cursos de graduação oferecidos
                            </Typography>
                            <p>
                            <b>&nbsp;1.</b> Direito
                            <br></br>
                            <b>&nbsp;2.</b> Administração
                            <br></br>
                            <b>&nbsp;3.</b> Contabilidade
                            <br></br>
                            <b>&nbsp;4.</b> Engenharia Civil 
                            <br></br>
                            <b>&nbsp;5.</b> Enfermagem 
                            <br></br>
                            <b>&nbsp;6.</b> Pedagogia 
                            <br></br>
                            <b>&nbsp;7.</b> Psicologia
                            <br></br>
                            <b>&nbsp;8.</b> Fisioterapia
                            <br></br>
                            <b>&nbsp;9.</b> Medicina
                            <br></br>
                            <b>10.</b> Arquitetura e Urbanismo
                            <br></br>
                            <b>11.</b> Farmácia
                            <br></br>
                            <b>12.</b> Educação Física
                            <br></br>
                            <b>13.</b> Nutrição
                            <br></br>
                            <b>14.</b> Engenharia Mecânica
                            <br></br>
                            <b>15.</b> Odontologia
                            <br></br>
                            <b>17.</b> Sistemas de Informação
                            <br></br>
                            <b>18.</b> Medicina Veterinária
                            </p>
                        </CardContent>
                    </Card>

                </div>

            <div className="rodape"><p>Alunos: Elizabeth Junkes, Jordana Tomio e Ueran Piazza.</p></div>
        </div>
    );

}

export default Courses;