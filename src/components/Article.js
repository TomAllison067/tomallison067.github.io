import React from 'react';
import { Typography } from '@material-ui/core';
import './styles/article.css';

function Article(props) {
    return (
        <div className="container">
            <Typography className="article">
                {props.children}
            </Typography>
        </div>
    );
}

export default Article