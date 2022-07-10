
import { useLocation } from "react-router-dom";
import RouteName from "./RouteName";
import AdminRoutes from "./AdminRoutes";
import GeneralRoutes from "./GeneralRoutes";
const CustomRoutes = () => {
    const location = useLocation();
    const { pathname } = location;
    const routesname = [RouteName.ADMIN.MAIN,RouteName.ADMIN.CATEGORY.MAIN,RouteName.ADMIN.CATEGORY.ADD,
        RouteName.ADMIN.PRODUCT.MAIN,RouteName.ADMIN.PRODUCT.ADD,RouteName.ADMIN.USER.ADD,RouteName.ADMIN.USER.MAIN];
    let adminRouteIndex = routesname.findIndex((e) => e === pathname);
    return (
        <>
            {adminRouteIndex !== -1 ? (
                <AdminRoutes />
            ) : (
                <GeneralRoutes />
            )}

        </>
    )
}

export default CustomRoutes
