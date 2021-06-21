import { Row, Col } from "antd";
import "./Sidebar.scss"
import { useLocation, NavLink } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className="Sidebar">
            <NavLink exact className="SidebarItem" activeClassName="SidebarItem--active" to="/">
                General
            </NavLink>
            <div className="SidebarItem">
                Plan
            </div>
            <NavLink exact className="SidebarItem" activeClassName="SidebarItem--active" to="/profile/api">
                API
            </NavLink>
            <div className="SidebarItem">
                Security
            </div>
            <div className="SidebarItem">
                Notifications
            </div>
            <div className="SidebarItem">
                Billing history
            </div>
            <div className="SidebarItem">
                Legal
            </div>
        </div>
    )
}