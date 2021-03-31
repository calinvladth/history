import React from "react";
import {AdminPath} from "../path";
import AdminPostsPage from "./index";

const config = () => {
    const path = `${AdminPath}/posts`
    const component = <AdminPostsPage/>
    return {
        path, component
    }
}

export const AdminPosts = config()

