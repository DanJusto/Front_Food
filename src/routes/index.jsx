import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { AuthRoutes } from "./auth.routes";
import { AdminRoutes } from "./admin.routes";
import { CommonRoutes } from "./common.routes";

export function Routes() {
    const { user } = useAuth();

    function handleAdmin() {
        if (user.is_admin === 1) {
            return <AdminRoutes/>
        } else {
            return <CommonRoutes/>
        }
    }

    return (
        <BrowserRouter>
            { !user ? <AuthRoutes/> : handleAdmin() }
        </BrowserRouter>
    )
}