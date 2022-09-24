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

function Institutional() {
    
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

                <div className="cards" style={{ marginTop: "35px" }}>
                    <Card variant="outlined" sx={{minWidth: 20}} className="card2">
                        <CardContent>
                            <Typography sx={{fontSize: 18}} color="text.secondary" gutterBottom>
                                Sobre nós
                            </Typography>
                            <p>A FRUB é a primeira instituição de ensino 
                            superior do interior do estado de Santa Catarina. Localizada na cidade de 
                            Blumenau, constitui-se em uma das principais universidades da região do Vale 
                            do Itajaí, estando entre as cinco maiores universidades de Santa Catarina.
                            Reconhecida como universidade em 13 de fevereiro de 1986, pela Portaria 
                            Ministerial Nº 117, conta com inúmeros programas de pesquisa e extensão, 
                            e com umas das maiores bibliotecas da Região Sul do Brasil. Atualmente, conta 
                            com 41 cursos de graduação, 120 cursos de especialização (lato-sensu), 10 
                            mestrados próprios, um curso de doutorado e aproximadamente 15 mil alunos, 
                            em diversos níveis de ensino.
                            Ousadia, experiência e renovação são conceitos sempre presentes no 
                            desenvolvimento da FRUB, que cresceu e se consolidou como um dos principais 
                            polos de produção de conhecimento do sul do país, realizando ensino, pesquisa
                            e extensão e formando uma comunidade de saberes consolidados, madura e 
                            experiente.
                            <br></br>
                            <br></br>
                            É a primeira faculdade do interior do estado de Santa Catarina e foi criada em 1964, como fruto de um movimento comunitário, para tornar mais abrangente o acesso ao ensino superior. Objetivo que a Universidade Regional de Blumenau continua realizando ao longo da sua história e alcançado por mais de 40 mil profissionais graduados pela FRUB.
                            <br></br>
                            <br></br>
                            Vale ressaltar que a FRUB é  uma autarquia municipal de regime especial, com sede e foro no Município de Blumenau,  Estado  de  Santa  Catarina,  aplicando-se-lhe  as  prerrogativas  e os privilégios da fazenda pública municipal. Possui plena autonomia didático-científica, administrativa e  de  gestão  financeira  e  patrimonial,  nos  termos  do  art.  207  da Constituição Federal e da pertinente legislação nacional de ensino.
                            </p>
                        </CardContent>
                    </Card>

                </div>
            </div>

            <div className="rodape"><p style={{ marginBottom: "5px"}}>Alunos: Elizabeth Junkes, Jordana Tomio e Ueran Piazza.</p></div>
        </div>
    );

}

export default Institutional;