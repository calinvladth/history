import React from "react";
import MyFavoritesPage from "./index";

const name = 'my_favorites'

export const MyFavoritesRoute = {
    'name': name,
    'path': `/profile/${name}`,
    'component': <MyFavoritesPage/>
}