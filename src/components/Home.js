import React from 'react';
import { Typography } from '@material-ui/core';
import Article from './Article';

function Home() {

    return (<div>
        <Typography component="h1" variant="h4">Hello, world.</Typography>
        <Article>
            <p>Hey there! I'm Tom, a developer currently pursuing a <b>BSc in Computer Science</b> at
        <b> Royal Holloway, University of London.</b> My interests are varied, and I've enjoyed working on anything from robotics with Java,
         to full-stack web development with Python and NodeJS to chatbots. At the moment I'm studying a bit of machine learning. I'm still at the beginning
          of my journey, and there's so much more to learn.</p>
            <p>Before that, I was a professional musician. I used to play drums all over the world with the military and work with people from
            all walks of life. I'm a little rusty compared to what I used to be (which is a shame), but I still love music and try to practice drums
            every day.</p>
            <p>This site is intended as a sort of 'about me' portfolio. My hope is that as I grow as a developer, I'll take on
            more contribute to more challenging projects and really show off what I have to offer here.
                It's built in <b>React</b>, which may be a little overkill for a personal portfolio - but I wanted to learn more about React!</p>
        </Article>

    </div>);
}
export default Home