import React from 'react';

import '../styles/UserAuthenticationPage.scss';

import SignIn from '../components/SignIn.component';

import SignUp from '../components/Sign-Up.component';

const UserAuthenticationPage = () => (
    <div className='user-authentication'>
    <SignIn />
    <SignUp />
    </div>
);

export default UserAuthenticationPage;