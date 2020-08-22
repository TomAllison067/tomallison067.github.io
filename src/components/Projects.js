import React from 'react'
import { Typography } from '@material-ui/core';
import TwoColumnSection from './TwoColumnSection';
import Article from './Article';
import millie from '../assets/millie.jpg';

function Projects() {
    let mStyle = {
        display: "block",
        margin: "1rem auto",
        maxHeight: "50%",
        maxWidth: "50%",
        borderRadius: "2px"
    };

    return (
        <div>
            <TwoColumnSection type="left-heavy"
            left={
                <Article title="Projects">
                    This is still a work in progress site - please bare with me, I hope to get some more content up soon.
                        Until then, here's a cool picture of my dog.
                        <img src={millie} style={mStyle} />
                    
                </Article>
            }
            right=""/>
        </div>
    )

}

export default Projects