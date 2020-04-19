import React, { useState, useContext, useEffect } from 'react';
import './Auth.css';
import Spinner from '../../componenets/Spinner/Spinner';
import { AuthContext } from '../../context/authContext';
import useHttp from '../../hooks/http';

const Auth = () => {
    const [isLoading, setIsLoading] = useState(false);
    const authContext = useContext(AuthContext);
    const { sendRequest } = useHttp();

    useEffect(() => {
        setTimeout(function () {
            removeAllTaskHandler();
            setIsLoading(true);
            setTimeout(function () {
                authContext.login();
            }, 2000)
        }, 3000)
    }, []);

    const logInHandler = () => {
        setIsLoading(true);
        setTimeout(function () {
            authContext.login();
        }, 2000)
    }
    const removeAllTaskHandler = taskId => {
        sendRequest(
            `https://react-hooks-e1106.firebaseio.com/tasks.json`,
            'DELETE',
            null,
            taskId,
            'REMOVE_TASK'
        );
    }

    return (
        <div className='auth-container'>
            <h1>Login</h1>
            <div>
                <input placeholder='Username' value='User123' />
            </div>
            <div>
                <input type='password' placeholder='Password' value='12345678' />
            </div>
            <button onClick={logInHandler}>Login</button>
            <div>
                {isLoading && <Spinner />}
            </div>
        </div>
    )
}

export default Auth;