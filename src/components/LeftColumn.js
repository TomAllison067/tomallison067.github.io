import React from 'react';
import ProfileCard from './ProfileCard';
import ContactBar from './ContactBar';

function LeftColumn(props) {
    return (<div className={props.class}>
        <ProfileCard />
        <hr />
        <ContactBar />
    </div>);
}

export default LeftColumn;