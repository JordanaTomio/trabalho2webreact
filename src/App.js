import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Register from "./Telas/Register"
import Login from "./Telas/Login"
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

const login = localStorage.getItem("isLog");

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Homepage />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                        path="/login"
                        element={
                            <VerificacaoRotas>
                                <TimeoutSessao>
                                    <Login />
                                </TimeoutSessao>
                            </VerificacaoRotas>
                        }
                    />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/finances" element={<Finances />} />
                    <Route path="/notes" element={<Notes />} />
                    <Route path="/institutional" element={<Institutional />} />
                    <Route path="/courses" element={<Courses />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
