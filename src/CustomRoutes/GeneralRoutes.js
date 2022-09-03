import React from 'react'
import { Route, Routes, useLocation } from "react-router-dom";
import Header from '../Components/web-app/Header';
import Footer from '../Components/web-app/Footer';
import Home from '../Pages';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import ChhotuPortfolio from '../Pages/ChhotuPortfolio';
const GeneralRoutes = () => {
    const location = useLocation();
    const { pathname } = location;
    return (
        <>
            {pathname.split('/')[1] === 'portfolio' ?
                <Routes>
                    <Route exact={true} path="/portfolio" name="portfolio" element={<ChhotuPortfolio />} />
                </Routes> :
                <>
                    <Header />
                    <Routes>
                        <Route exact={true} path="/" element={<Home />} />
                        <Route path="/login" name="login" element={<Login />} />
                        <Route path="/register" name="register" element={<Register />} />
                    </Routes>
                    <Footer />
                </>
            }
        </>
    )
}

export default GeneralRoutes
