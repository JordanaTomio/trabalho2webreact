import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import {menuItems} from "../infoMenus";
import {Link, useNavigate} from "react-router-dom";
import {
    Card,
    CardActions,
    CardContent, FormControl, InputLabel, Select, TextField,
    Typography
} from "@mui/material";
import jsonData from "../exemplo.json";
import logo_telas from "../logo_telas.png"

function Courses() {
    
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (index, event) => {
        setAnchorEl({[index]: event.currentTarget});
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const [tipo, setTipo] = React.useState('');
    const [comentario, setComentario] = React.useState('');

    const handleChangeTipo = (event) => {
        setTipo(event.target.value);
    };

    const val = {
        tipo,
        comentario,
    };

    const handleChangeComentario = (event) => {
        setComentario(event.target.value);
    };

    const resetar = () => {
        setTipo('');
        setComentario('');
    };

    const [studentData, setStudentData] = useState(jsonData);

    const tableRows = studentData.map((info) => {
        return (
            <tr>
                <td>{info.id}</td>
                <td>{info.tipo}</td>
                <td>{info.comentario}</td>
            </tr>
        );
    });

    return (
        <div>
            <div className="cabecalho">
            <img src={logo_telas} className="logo-conjunta"/>
                <Toolbar className="toolbar">
                    {Object.keys(menuItems).map((item, index) => (
                        <div className="navButton" key={index}>
                            <Button color="inherit" onClick={(e) => handleClick(index, e)}>
                                {item}
                                <i className="fas fa-caret-down"/>
                            </Button>
                            <Menu 
                                anchorEl={anchorEl && anchorEl[index]}
                                keepMounted
                                open={anchorEl && Boolean(anchorEl[index])}
                                onClose={handleClose}
                                getContentAnchorEl={null}
                                anchorOrigin={{vertical: "bottom", horizontal: "center"}}
                                transformOrigin={{vertical: "top", horizontal: "center"}}
                            >
                                {menuItems[item].map((menuitems, menuindex) => (
                                    <MenuItem 
                                        key={menuindex}
                                        selected={menuitems === item}
                                        component={Link} to={menuitems.path}
                                    >
                                        {menuitems.title}

                                    </MenuItem>
                                ))}
                            </Menu>
                        </div>
                    ))}
                </Toolbar>
            </div>
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