import React from 'react'
import SpotifyFrame from './SpotifyFrame'
import TwoColumnSection from './TwoColumnSection';
import Article from './Article';

function Thoughts() {
    return (
        <div>
            {/* <Typography component="h2" variant="h4">Things I Like</Typography> */}
            <TwoColumnSection type="left-heavy" left=
                {
                    <Article title="Things I Like">Here's some music you might like. </Article >
                }
                right={<SpotifyFrame />} />
        </div>
    );
}

export default Thoughts