import React from 'react'
import { Route, Routes } from "react-router-dom";
import Admin from '../Pages/Admin';
import RouteName from './RouteName';
import Sidebar from '../Components/admin-app/Sidebar';
const AdminRoutes = () => {
    return (
       <>
      
        <Routes>
            <Route exact={true} path={RouteName.ADMIN} element={<Admin />} />
        </Routes>
       </>
    )
}

export default AdminRoutes
