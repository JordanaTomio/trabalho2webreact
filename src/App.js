import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Homepage from "./Homepage"
import Register from "./Register"

import './App.css';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Homepage />} />
                    <Route path="/register" element={<Register />} />

                </Routes>
            </Router>
        </>
    );
}

export default App;
