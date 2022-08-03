import { Navigate, Outlet } from "react-router-dom";
import Constant from "../utils/Constant";
const ManagementRoutes = ({ role }) => {
  return role!=='' && (role===Constant.ADMIN || role===Constant.HR_MANEGER)  ? <Outlet /> : <Navigate to="/admin" />;
};
export default ManagementRoutes;