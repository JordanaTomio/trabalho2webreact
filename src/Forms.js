import React, {useState} from 'react';
import {FormControl, InputLabel, Select, TextField} from "@mui/material";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

function StudentForm(props) {
    const [tipo, setTipo] = React.useState('');
    const [comentario, setComentario] = React.useState('');

    const handleChangeTipo = (event) => {
        setTipo(event.target.value);
    };

    const handleChangeComentario = (event) => {
        setComentario(event.target.value);
    };
    const inserirValores = (event) => {
        event.preventDefault();
        const val = {
            tipo,
            comentario,
        };
        props.func(val);
        resetar();
    };

    const resetar = () => {
        setTipo('');
        setComentario('');
    };

    return (
        <div>
            <FormControl>
                <InputLabel id="tipo-comentario-label">Tipo Comentario</InputLabel>
                <Select
                    labelId="tipo-comentario-label"
                    id="tipo-comentario"
                    label={"Tipo Comentario"}
                    className="espacamento"
                    onChange={handleChangeTipo}
                >
                    <MenuItem value={'critica'}>Critica</MenuItem>
                    <MenuItem value={'sugestao'}>Sugestao</MenuItem>
                    <MenuItem value={'elogio'}>Elogio</MenuItem>
                </Select>

                <TextField variant="outlined"
                           label={"Email"}
                           className="espacamento"
                />

                <TextField variant="outlined"
                           multiline
                           rows={10}
                           className="espacamento"
                           label={"Escreva seu comentário"}
                           onChange={handleChangeComentario}
                           value={comentario}
                />

            </FormControl>
            <Button size="small" onClick={inserirValores}>Submit</Button>
            <Button size="small" onClick={resetar}>Reset</Button>
        </div>
    );
}

export default StudentForm;
