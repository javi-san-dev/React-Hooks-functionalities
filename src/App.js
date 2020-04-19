import React, { useContext } from 'react';
import Home from './container/Home';
import Auth from './componenets/Auth/Auth';
import { AuthContext } from './context/authContext';

const App = () => {
    const authContext = useContext(AuthContext);
    let content = null;
    authContext.isAuth ? content = <Home /> : content = <Auth />
    return content;
};

export default App;