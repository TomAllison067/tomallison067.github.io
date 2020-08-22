import React from 'react';
import profile from '../profile.png'
import './styles/profilepic.css';

function ProfilePic(){
    return <img src={profile} className="profile-pic" alt="Enjoying nature" />
}

export default ProfilePic