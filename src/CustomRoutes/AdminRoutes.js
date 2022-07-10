import React from 'react'
import { Route, Routes } from "react-router-dom";
import Admin from '../Pages/Admin';
import RouteName from './RouteName';
import Sidebar from '../Components/admin-app/Sidebar';
import ProtectedRoutes from './ProtectedRoutes';
import Helper from '../Helper';
const AdminRoutes = () => {
    const token = Helper.StorageService.getAccessToken();
    console.log(token,'token')
    return (
       <>
        <Routes>
        <Route element={<ProtectedRoutes isLoggedIn={token} />}>
            <Route exact={true} path={RouteName.ADMIN.MAIN} element={<Admin />} />
            {/* <Route exact={true} path={Helper.RoutesName.PAYERSETUP} element={localStorage.getItem('user.payerId')?<Navigate to="/dashboard"/>:<PayerSetup />} />
            <Route element={<DashboardRoutes isLoggedIn={props.auth.user_payer_id} />}>
              <Route exact={true} path={"/dashboard"} element={<Dashboard />} />
              <Route exact={true} path={Helper.RoutesName.FORM_CREATE} element={<Form1099 />} />
            </Route> */}
        </Route>

            
        </Routes>
       </>
    )
}

export default AdminRoutes
