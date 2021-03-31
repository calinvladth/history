import {matchPath, useRouteMatch} from "react-router-dom";

export const CheckRoute = (route, link) => {
    const match = matchPath(route, link)
    if (match) {
        return match.isExact
    }

    return false
}

export const MatchRoute = (link) => {
    const obj = useRouteMatch(link)
    if (obj) return obj.isExact
    return false
}