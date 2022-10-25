import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Register from "./Telas/Register"
import Menus from "./Telas/Menus"
import Profile from "./Telas/Profile"
import Finances from "./Telas/Finances"
import Notes from "./Telas/Notes"
import Institutional from "./Telas/Institutional"
import Courses from "./Telas/Courses"

import React from 'react';

import './App.css';
import {VerificacaoRotas} from "./Telas/VerificacaoRotas";
import {Homepage} from "./Telas/Homepage";
import {TimeoutSessao} from "./Telas/TimeoutSessao";


function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Homepage/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route
                        path="/menus"
                        element={
                            <VerificacaoRotas>
                                <TimeoutSessao>
                                    <Menus/>
                                </TimeoutSessao>
                            </VerificacaoRotas>
                        }
                    />
                    <Route path="/perfil" element={
                        <VerificacaoRotas>
                            <Profile/>
                        </VerificacaoRotas>
                    }/>
                    <Route path="/financeiro" element={
                        <VerificacaoRotas>
                            <Finances/>
                        </VerificacaoRotas>
                    }/>
                    <Route path="/notas" element={
                        <VerificacaoRotas>
                            <Notes/>
                        </VerificacaoRotas>
                    }/>
                    <Route path="/institucional" element={
                        <VerificacaoRotas>
                            <Institutional/>
                        </VerificacaoRotas>
                    }/>
                    <Route path="/cursos" element={
                        <VerificacaoRotas>
                            <Courses/>
                        </VerificacaoRotas>
                    }/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
