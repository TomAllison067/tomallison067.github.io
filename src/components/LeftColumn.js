import React from 'react';
import ProfileCard from './ProfileCard';

function LeftColumn(props) {
    return (<div className={props.class}>
        <ProfileCard />
        <hr />
    </div>);
}

export default LeftColumn;