import React, { useEffect } from 'react'
import {useNavigate} from "react-router-dom";

export const TimeoutSessao = ({ children }) => {
    const navigate = useNavigate()
    const TIMEOUT = 300000;
    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, TIMEOUT)

    }, [])

    console.log("executando timeout em " + (TIMEOUT/60000)  + " minutos")

    return children;
};