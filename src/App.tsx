import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ProtectedRoute from './ProtectedRoute';
import './Button.css';
import 'antd/dist/antd.css';
import './NotifDrawer.css';
import LoggedInApp from './LoggedInApp';

function App() {
    return (
        <BrowserRouter>
            <LoggedInApp></LoggedInApp>
            <Switch>
                <Route exact path="/login">
                    {/* <Login/> */}
                    <h1>Login</h1>
                </Route>
                <Route exact path="/login/callback">
                    {/* <Callback/> */}
                    <h1>Callback</h1>
                </Route>
                <ProtectedRoute exact path={["/", "/profile"]}>
                    {/* <Profile/> */}
                    <h1>Profile</h1>
                </ProtectedRoute>
                <ProtectedRoute exact path="/feed">
                    {/* <Feed/> */}
                    <h1>Feed</h1>
                </ProtectedRoute>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
