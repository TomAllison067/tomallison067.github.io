import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './styles/footer.css';

function Footer() {

    return (
        <div className='footer'>
            <ul>
                <li>
                    <a href="https://github.com/TomAllison067" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x"></i></a>
                </li>
            </ul>
        </div>

    )
}

export default Footer;