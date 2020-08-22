import React from 'react';
import './styles/contactbar.css';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function ContactBar() {

    return (
        <div className='contact-bar'>
            <ul className='contact-ul'>
                <li>
                    <a href="https://github.com/TomAllison067" target="_blank" rel="noopener noreferrer">
                        {/* <i className="fab fa-github fa-2x"></i> */}
                        <GitHubIcon />
                    </a>
                </li>
                <li>
                    <a href="mailto:tomlaurenceallison@gmail.com">
                        <EmailIcon />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/thomas-allison-3847901b1/">
                        <LinkedInIcon />
                    </a>
                </li>

            </ul>
        </div>

    )
}

export default ContactBar;