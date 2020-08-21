import React from 'react'
import {Link} from 'react-router-dom';
import "./NavBar.css";
const navItems = require('../../navitems.json')

console.log(navItems);

function NavBar() {
    return (
        <ul className="nav-list">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/foo">Foo</Link>
            </li>
        </ul>
    )
}

export default NavBar