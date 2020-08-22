import React from 'react';
import { Typography } from '@material-ui/core';
import './styles/article.css';

function Article(props) {
    return (
        <div>
            <Typography component="h2" variant="h4">{props.title}</Typography>
            <div className="article-container">
                <Typography className="article">
                    {props.children}
                </Typography>
            </div>
        </div>
    );
}

export default Article