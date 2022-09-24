import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Homepage from "./Homepage"
import Register from "./Register"
import Login from "./Login"
import Profile from "./Profile"
import Finances from "./Finances"
import Notes from "./Notes"
import Institutional from "./Institutional"
import Courses from "./Courses"

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
