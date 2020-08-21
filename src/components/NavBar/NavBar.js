import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./NavBar.css";
import routes from '../../data/routes'
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Paper from '@material-ui/core/Paper';




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
        <Paper elevation={1}>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                centered>
                {showRoutes()}
            </Tabs>
        </Paper>
    )
}

export default NavBar