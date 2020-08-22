import React from 'react';
import { Typography } from '@material-ui/core';
import './styles/article.css';

function Article(props){
    return <Typography className="article">
        {props.children}
        </Typography>
}

export default Article