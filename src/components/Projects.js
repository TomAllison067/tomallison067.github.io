import React from 'react'
import { Typography } from '@material-ui/core';
import TwoColumnSection from './TwoColumnSection';
import Article from './Article';

function Projects() {
    return (
        <div>
            <Typography component="h2" variant="h4">Projects</Typography>
            <TwoColumnSection type="left-heavy"
            left={
                <Article>
                    This is still a work in progress site - please bare with me, I hope to get some more content up soon.
                        Until then, here's a cool picture of my dog.
                    
                </Article>
            } />
        </div>
    )

}

export default Projects