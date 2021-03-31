import React from "react";
import ChangePasswordPage from "./index";

const name = 'change_password'

export const ChangePasswordRoute = {
    'name': name,
    'path': `/profile/${name}`,
    'component': <ChangePasswordPage/>
}