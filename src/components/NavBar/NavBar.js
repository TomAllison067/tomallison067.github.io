import React from 'react'
import { Link } from 'react-router-dom';
import "./NavBar.css";
const links = require('../../data/links.json')

console.log(links);

function showLinks() {
    return links.links.map((link, index) =>
        <Link key={index} to={link.path}>{link.name}</Link>
    )
}
function NavBar() {
    return (
        <ul className="nav-list">
            {showLinks()}
        </ul>
    )
}

export default NavBar