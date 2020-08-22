import React from 'react'
import { Link } from 'react-router-dom';
import routes from '../data/routes'
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Paper from '@material-ui/core/Paper';

import './styles/navbar.css';




function NavBar(props) {
    // Set the highlighted tab to the current page - eg, if you refresh.
    const [value, setValue] = React.useState(() => {
        let url = window.location.href.split('/').pop();
        let initialValue;
        switch(url){
            case "":
                initialValue = 0;
                break;
            case "interests":
                initialValue = 1;
                break;
            case "projects":
                initialValue = 2;
                break;
            default:
                initialValue = 4;
                break;
        }
        return initialValue;
    });
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    function showRoutes() {
        return routes.filter((route) => route.used).map((route, index) => <Tab key={index} label={route.name} component={Link} to={route.path} />)
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