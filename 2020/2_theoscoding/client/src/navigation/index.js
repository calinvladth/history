import React from 'react'
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <Link
                to={{
                  pathname: '/home',
                  state: { prev: false },
                }}
                className="nav__link"
            >Home</Link>
            <Link
                to={{
                  pathname: '/about',
                  state: { prev: true },
                }}
                className="nav__link"
            >About</Link>
            <Link
                to={{
                  pathname: '/contact',
                  state: { next: false },
                }}
                className="nav__link"
            >Contact</Link>
        </div>
    )
}

export default Navigation
