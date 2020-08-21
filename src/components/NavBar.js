import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import routes from '../data/routes'
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Paper from '@material-ui/core/Paper';

import './styles/navbar.css';




function NavBar() {


    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function showRoutes() {
        return routes.map((route, index) =>
            <Tab key={index} label={route.name} component={Link} to={route.path} />
        )
    }

    return (
        <Paper className="tab-colouring" elevation={1}>
            <Tabs className="tab-colouring"
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                variant="fullWidth"
                >
                {showRoutes()}
            </Tabs>
        </Paper>
    )
}

export default NavBar