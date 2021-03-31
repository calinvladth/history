import React from "react";
import {AdminPath} from "../path";
import AdminLoginPage from "./index";


const config = () => {
    const path = `${AdminPath}/login`
    const component = <AdminLoginPage/>
    return {
        path, component
    }
}

export const AdminLogin = config()