import React, { useState, useContext } from 'react';
import './Auth.css';
import Spinner from '../../componenets/Spinner/Spinner';
import { AuthContext } from '../../context/authContext';

const Auth = () => {
    const [isLoading, setIsLoading] = useState(false);
    const authContext = useContext(AuthContext);

    const logInHandler = () => {
        setIsLoading(true);
        setTimeout(function () {
            authContext.login();
        }, 2000)
    }
    return (
        <div className='auth-container'>
            <h1>Login</h1>
            <div>
                <input placeholder='Username' />
            </div>
            <div>
                <input placeholder='Password' />
            </div>
            <button onClick={logInHandler}>Login</button>
            <div>
                {isLoading && <Spinner />}
            </div>
        </div>
    )
}

export default Auth;