import React from 'react'
import { Route, Routes } from "react-router-dom";
import Header from '../Components/web-app/Header';
import Footer from '../Components/web-app/Footer';
import Home from '../Pages';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
const GeneralRoutes = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route exact={true} path="/" element={<Home />} />
                <Route path="/login" name="login" element={<Login />} />
                <Route path="/register" name="register" element={<Register />} />
            </Routes>
            <Footer />
        </>
    )
}

export default GeneralRoutes
