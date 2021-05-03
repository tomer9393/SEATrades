import React from 'react';
import Profile from './profile';
import Breadcrumb from './breadcrumb';


function ProfilePage() {
    return (
        
        <>
        <Breadcrumb/>
        <Profile />
        <hr style={{width: '70%'}}></hr>
        </>
    );
}

export default ProfilePage;