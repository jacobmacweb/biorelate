import Icon from "@ant-design/icons";
import { Badge, Button, Divider, Layout, PageHeader } from "antd";
import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import "./LoggedInApp.scss";
import "./Navbar.scss";
import ProtectedRoute from './ProtectedRoute';
import Sidebar from "./Sidebar";
import Profile from "./Profile";
import NotificationDrawer from "./NotifictionDrawer";
import webAuth, { getUserData } from "./webauth";

const NotificationSvg = () => (
    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7C16 5.4087 15.3679 3.88258 14.2426 2.75736C13.1174 1.63214 11.5913 1 10 1C8.4087 1 6.88258 1.63214 5.75736 2.75736C4.63214 3.88258 4 5.4087 4 7C4 14 1 16 1 16H19C19 16 16 14 16 7Z" stroke="#5C6D8E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.73 20C11.5542 20.3031 11.3019 20.5547 10.9982 20.7295C10.6946 20.9044 10.3504 20.9965 10 20.9965C9.64964 20.9965 9.30541 20.9044 9.00179 20.7295C8.69818 20.5547 8.44583 20.3031 8.27002 20" stroke="#5C6D8E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
)

const MenuGridSvg = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="4" height="4" rx="1" fill="#868DA1"/>
        <rect y="6" width="4" height="4" rx="1" fill="#868DA1"/>
        <rect y="12" width="4" height="4" rx="1" fill="#868DA1"/>
        <rect x="6" width="4" height="4" rx="1" fill="#868DA1"/>
        <rect x="6" y="6" width="4" height="4" rx="1" fill="#868DA1"/>
        <rect x="6" y="12" width="4" height="4" rx="1" fill="#868DA1"/>
        <rect x="12" width="4" height="4" rx="1" fill="#868DA1"/>
        <rect x="12" y="6" width="4" height="4" rx="1" fill="#868DA1"/>
        <rect x="12" y="12" width="4" height="4" rx="1" fill="#868DA1"/>
    </svg>
)

const ExitIconSvg = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18" stroke="#5C6D8E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 6L18 18" stroke="#5C6D8E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

const NotificationIcon = (props: any) => <Icon component={NotificationSvg} {...props} />;
const MenuGridIcon = (props: any) => <Icon component={MenuGridSvg} {...props} />
const ExitIconIcon = (props: any) => <Icon component={ExitIconSvg} {...props} />

export default function LoggedInApp() {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        getUserData((err, authResult) => {
            if (!err) {
                setUser(authResult);
            }
        });
    }, []);

    const [showNotif, setShowNotif] = useState(false);
    const [notifCount, setNotifCount] = useState(0);

    const toggleNotif = () => {
        setShowNotif(!showNotif);
    }
    return (
        <Layout className="LoggedInApp">
            <PageHeader>
                <div className="nav">
                    <div className="nav-item">
                        <Button shape="circle" className="nav-icon" icon={<MenuGridIcon/>}></Button>
                    </div>
                    <div className="nav-item nav-logo">
                        <h3 className="nav-text">Galactic</h3>
                    </div>
                    <div className="nav-item">
                        <p className="nav-text">Home</p>
                    </div>
                    <div className="nav-item">
                        <p className="nav-text">Categories</p>
                    </div>
                    <div className="nav-item">
                        <p className="nav-text">Feeds</p>
                    </div>
                    <div className="nav-item">
                        <p className="nav-text">Saved</p>
                    </div>
                    <div className="nav-divider"></div>
                    <div className="nav-item">
                        <Badge count={notifCount} className="nav-badge-count">
                            <Button shape="circle" onClick={toggleNotif} className="nav-icon" icon={(
                                showNotif ? <ExitIconIcon/> : <NotificationIcon/>
                            )}></Button>
                        </Badge>
                        <NotificationDrawer shouldDisplay={showNotif} notifCount={notifCount} setNotifCount={(count: number) => setNotifCount(count)}></NotificationDrawer>
                    </div>
                    <div className="nav-item">
                        <Button shape="circle" className="nav-icon" icon={
                            <Icon component={() => <img src={user?.picture} width="100%"></img>}></Icon>
                        }></Button>
                    </div>
                    <div className="nav-item">
                        <Button className="button">Log out</Button>
                    </div>
                </div>
                <Divider></Divider>
            </PageHeader>
            <Layout.Content>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/login">
                            <Redirect to="/"></Redirect>
                        </Route>
                        <Route exact path="/login/callback">
                            {/* <Callback/> */}
                            <h1>Callback</h1>
                        </Route>
                        <ProtectedRoute path={["/", "/profile"]}>
                            <Profile/>
                        </ProtectedRoute>
                        {/* <ProtectedRoute exact path="/feed">
                            <h1>Feed</h1>
                        </ProtectedRoute> */}
                    </Switch>
                </BrowserRouter>
            </Layout.Content>
        </Layout>
    )
}