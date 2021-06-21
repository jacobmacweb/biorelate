import { Row, Col } from "antd";
import Sidebar from "./Sidebar";
import Body from "./Body";
import API from "./API";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Settings from "./Settings";

export default function Profile() {
    return (
        <>
            <h1>Account settings</h1>
            <Row>
                <Col>
                    <Sidebar></Sidebar>
                </Col>
                <Col flex="1">
                    <Body>
                        <Switch>
                            <Route exact path={["/", "/profile"]}>
                                <Settings/>
                            </Route>
                            <Route exact path="/profile/api">
                                <API/>
                            </Route>
                        </Switch>
                    </Body>
                </Col>
            </Row>
        </>
    )
}