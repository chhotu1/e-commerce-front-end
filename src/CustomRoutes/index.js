
import { useLocation } from "react-router-dom";
import RouteName from "./RouteName";
import AdminRoutes from "./AdminRoutes";
import GeneralRoutes from "./GeneralRoutes";
const CustomRoutes = () => {
    const location = useLocation();
    const { pathname } = location;
    const routesname = [RouteName.ADMIN];
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
