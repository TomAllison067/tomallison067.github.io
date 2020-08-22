import React from 'react';
import ProfileCard from './ProfileCard';
import ContactBar from './ContactBar';
import AboutMe from './AboutMe';

function LeftColumn(props) {
    return (<div className={props.class}>
        <ProfileCard />
        <hr />
        <AboutMe />
        <hr />
        <ContactBar />
    </div>);
}

export default LeftColumn;