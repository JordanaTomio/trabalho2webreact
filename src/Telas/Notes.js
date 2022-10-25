import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import { menuItems } from "../infoMenus";
import { Link } from "react-router-dom";
import {
    Card,
    CardContent
} from "@mui/material";
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";

export default function Login() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (index, event) => {
        setAnchorEl({ [index]: event.currentTarget });
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Cabecalho></Cabecalho>


                <div className="cardNotas">

                    <Card variant="outlined" sx={{ minWidth: 40 }} className="cardNotas">
                        <CardContent>

                            <div>
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th>Avaliação</th>
                                        <th>Nota</th>
                                        <th>Peso</th>
                                    </tr>
                                    <tr>
                                        <td>P1</td>
                                        <td>7,2</td>
                                        <td>30%</td>
                                    </tr>
                                    </thead>
                                </table>

                                <br />
                            </div>

                        </CardContent>
                    </Card>
                </div>

            <Rodape/>
        </div>
    );
}
