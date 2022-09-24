import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Homepage from "./Telas/Homepage"
import Register from "./Telas/Register"
import Login from "./Telas/Login"
import Profile from "./Telas/Profile"
import Finances from "./Telas/Finances"
import Notes from "./Telas/Notes"
import Institutional from "./Telas/Institutional"
import Courses from "./Telas/Courses"

import React from 'react';

import './App.css';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Homepage />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
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
