import React from 'react';
import SignIn from './signInFunc';
import Breadcrumb from './breadcrumb';
import{ useState, useContext } from "react";


function SignInPage() {
    
    return (
        
        <>
        <Breadcrumb/>
        <SignIn  />
        </>
    );
}

export default SignInPage;