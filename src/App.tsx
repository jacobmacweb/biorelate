import './App.css';
import './Button.css';
import 'antd/dist/antd.css';
import LoggedInApp from './LoggedInApp';
import LoggedOutApp from './LoggedOutApp';
import webAuth, { getUserData } from "./webauth";
import { useEffect, useState } from 'react';

function App() {
    const [isAuthenticated, setAuthenticated] = useState(false);
    useEffect(() => {
        getUserData((err, authResult) => {
            if (!err) {
                setAuthenticated(true);
            }
        });
    }, [isAuthenticated]);
    
    return (
        <>{isAuthenticated ? <LoggedInApp/> : <LoggedOutApp setAuthenticated={(val: boolean) => setAuthenticated(val)}/>}</>
    );
}

export default App;
