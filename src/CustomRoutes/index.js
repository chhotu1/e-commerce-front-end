
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages";
import Register from "../Pages/Register";
const CustomRoutes = () => {
    return (
        <Routes>
            <Route exact={true} path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>}/>
        </Routes>
    )
}

export default CustomRoutes
