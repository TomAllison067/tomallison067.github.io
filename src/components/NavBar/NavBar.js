import React from 'react'
import { Link } from 'react-router-dom';
import "./NavBar.css";
import routes from '../../data/routes'

function showRoutes() {
    return routes.map((route, index) =>
        <li key={index}>
            <Link to={route.path}>{route.name}</Link>
        </li>

    )
}
function NavBar() {
    return (
        <ul className="nav-list">
            {showRoutes()}
        </ul>
    )
}

export default NavBar