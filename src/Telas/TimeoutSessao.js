import React, { useEffect } from 'react'
import {useNavigate} from "react-router-dom";

export const TimeoutSessao = ({ children }) => {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 500000)
        console.log("timeout")

    }, [])

    return children;
};