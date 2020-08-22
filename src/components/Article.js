import React from 'react';
import { Typography } from '@material-ui/core';

function Article(props){
    return <Typography component="p">
        {props.content}
    </Typography>
}

export default Article