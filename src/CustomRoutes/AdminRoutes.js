
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from "react-router-dom";
import Admin from '../Pages/Admin';
import Category from '../Pages/Admin/Category';
import CategoryAdd from '../Pages/Admin/Category/Add';

import Product from '../Pages/Admin/Product';
import ProductAdd from '../Pages/Admin/Product/Add';

import Users from '../Pages/Admin/Users';
import UsersAdd from '../Pages/Admin/Users/Add';
import UsersEdit from '../Pages/Admin/Users/Edit';
//leave
import Leave from '../Pages/Admin/Leave';
import LeaveAdd from '../Pages/Admin/Leave/Add';
import LeaveEdit from '../Pages/Admin/Leave/Edit';

import RouteName from './RouteName';
// import Sidebar from '../Components/admin-app/Sidebar';
import ProtectedRoutes from './ProtectedRoutes';
import Helper from '../Helper';
import Profle from '../Pages/Admin/Profile';
import ChangePassword from '../Pages/Admin/Profile/ChangePassword';
import ManagementRoutes from './ManagementRoutes';
import { currentUser, setUserDefaults } from '../Store/actions/UserActions';
// import Constant from '../utils/Constant';
const AdminRoutes = (props) => {
  const token = Helper.StorageService.getAccessToken();
  useEffect(() => {
    let token = Helper.StorageService.getAccessToken();
    if (token) {
      props.currentUser();
    }
  }, [])
  const user = props?.user?.user;
  return (
    <>
      <Routes>
        <Route element={<ProtectedRoutes isLoggedIn={token} />}>
          <Route exact={true} path={RouteName.ADMIN.MAIN} element={<Admin />} />
          <Route exact={true} path={RouteName.ADMIN.CATEGORY.MAIN} element={<Category />} />
          <Route path={RouteName.ADMIN.CATEGORY.ADD} element={<CategoryAdd />} />
          <Route exact={true} path={RouteName.ADMIN.PRODUCT.MAIN} element={<Product />} />
          <Route path={RouteName.ADMIN.PRODUCT.ADD} element={<ProductAdd />} />
          <Route exact={true} path={RouteName.PROFILE} element={<Profle />} />
          <Route exact={true} path={RouteName.CHANGE_PASSWORD} element={<ChangePassword />} />

          <Route exact={true} path={RouteName.LEAVE.MAIN} element={<Leave />} />
          <Route path={RouteName.LEAVE.ADD} element={<LeaveAdd />} />
          <Route path={`${RouteName.LEAVE.EDIT}:id`} element={<LeaveEdit />} />

          {/* <Route exact={true} path={RouteName.PAYERSETUP} element={localStorage.getItem('user.payerId')?<Navigate to="/dashboard"/>:<PayerSetup />} /> */}
          <Route element={<ManagementRoutes role={user?.role} />}>
            <Route exact={true} path={RouteName.ADMIN.USER.MAIN} element={<Users />} />
            <Route path={RouteName.ADMIN.USER.ADD} element={<UsersAdd />} />
            <Route path={`${RouteName.ADMIN.USER.EDIT}:id`} element={<UsersEdit />} />
          </Route>
        </Route>


      </Routes>
    </>
  )
}



const mapStateToProps = (state, ownProps) => {

  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    currentUser: () => dispatch(currentUser()),
    setUserDefaults: () => dispatch(setUserDefaults())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminRoutes);
