import React from "react";
import RecentlyViewedPage from "./index";

const name = 'recently_viewed'

export const RecentlyViewedRoute = {
    'name': name,
    'path': `/profile/${name}`,
    'component': <RecentlyViewedPage/>
}