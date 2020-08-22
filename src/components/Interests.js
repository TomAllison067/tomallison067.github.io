import React from 'react'
import SpotifyFrame from './SpotifyFrame'
import { Typography } from '@material-ui/core';
import TwoColumnSection from './TwoColumnSection';
import Article from './Article';

function Interests() {
    return (
        <div>
            <Typography component="h2" variant="h4">Things I Like</Typography>
            <TwoColumnSection type="left-heavy" left={<Article content="foo" />} right={<SpotifyFrame />} />
            <TwoColumnSection type="right-heavy" left={<Article content="bar" />} right={<Article content="baz" />} />
        </div>
    );
}

export default Interests