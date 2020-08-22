import React from 'react';
import { Typography } from '@material-ui/core';

function AboutMe() {
    return <div>
        <Typography component="p">
            Hey there! I'm Tom, currently pursuing a <em>BSc in Computer Science</em> at <b>Royal Holloway, University of London.</b>
        </Typography>
        <Typography component="p">
            Before that, I was a professional musician. I'm a little rusty compared to what I used to be, but I still love music and try to practice drums
            every day.
        </Typography>
        <Typography component="p">
            In my spare time I like rock-climbing, running, and making electronic music. I drink too much coffee and love a good book.
        </Typography>

    </div>
}

export default AboutMe