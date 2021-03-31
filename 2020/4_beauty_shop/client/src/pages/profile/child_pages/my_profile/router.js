import React from "react";
import MyProfilePage from "./index";

const name = 'my_profile'

export const MyProfileRoute = {
    'name': name,
    'path': `/profile`,
    'component': <MyProfilePage/>
}