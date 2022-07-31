import React from 'react'
import { Route, Routes } from "react-router-dom";
import Admin from '../Pages/Admin';
import Category from '../Pages/Admin/Category';
import CategoryAdd from '../Pages/Admin/Category/Add';

import Product from '../Pages/Admin/Product';
import ProductAdd from '../Pages/Admin/Product/Add';

import Users from '../Pages/Admin/Users';
import UsersAdd from '../Pages/Admin/Users/Add';
import UsersEdit from '../Pages/Admin/Users/Edit';



import RouteName from './RouteName';
import Sidebar from '../Components/admin-app/Sidebar';
import ProtectedRoutes from './ProtectedRoutes';
import Helper from '../Helper';
import Profle from '../Pages/Admin/Profile';
import ChangePassword from '../Pages/Admin/Profile/ChangePassword';
const AdminRoutes = () => {
    const token = Helper.StorageService.getAccessToken();
    return (
       <>
        <Routes>
        <Route element={<ProtectedRoutes isLoggedIn={token} />}>
            <Route exact={true} path={RouteName.ADMIN.MAIN} element={<Admin />} />
            <Route exact={true} path={RouteName.ADMIN.CATEGORY.MAIN} element={<Category />} />
            <Route  path={RouteName.ADMIN.CATEGORY.ADD} element={<CategoryAdd />} />
            <Route exact={true} path={RouteName.ADMIN.PRODUCT.MAIN} element={<Product />} />
            <Route  path={RouteName.ADMIN.PRODUCT.ADD} element={<ProductAdd />} />

            <Route exact={true} path={RouteName.ADMIN.USER.MAIN} element={<Users />} />
            <Route  path={RouteName.ADMIN.USER.ADD} element={<UsersAdd />} />
            <Route  path={`${RouteName.ADMIN.USER.EDIT}:id`} element={<UsersEdit />} />

            <Route exact={true} path={RouteName.PROFILE} element={<Profle />} />
            <Route exact={true} path={RouteName.CHANGE_PASSWORD} element={<ChangePassword />} />


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
