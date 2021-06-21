import { Row, Col } from "antd";
import Sidebar from "./Sidebar";
import Body from "./Body";
import API from "./API";
import { Route, BrowserRouter, Switch } from "react-router-dom";

export default function Profile() {
    return (
        <>
            <h1>Account settings</h1>
            <Row>
                <Col>
                    <Sidebar></Sidebar>
                </Col>
                <Col>
                    <Body>
                        <Switch>
                            <Route exact path={["/", "/profile"]}>
                                {/* User settings */}
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