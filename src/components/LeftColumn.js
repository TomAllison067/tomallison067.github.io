import React from 'react';
import ProfilePic from './ProfilePic';

function LeftColumn(props) {
    return (<div className={props.class}>
        <h1>Foobar!</h1>
        <ProfilePic />
    </div>);
}

export default LeftColumn;