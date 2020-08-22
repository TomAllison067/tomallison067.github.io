import React from 'react'
import SpotifyFrame from './SpotifyFrame'
import { Typography } from '@material-ui/core';
import TwoColumnSection from './TwoColumnSection';
import Article from './Article';

function Interests() {
    return (
        <div>
            <Typography component="h2" variant="h4">Things I Like</Typography>
            <TwoColumnSection type="left-heavy" left=
                {
                    <Article>Please bare with me - this site is only 1 day old. In the mean time,
                here's some music you might like. </Article >
                }
                right={<SpotifyFrame />} />
        </div>
    );
}

export default Interests