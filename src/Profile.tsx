import { Row, Col } from "antd";
import Sidebar from "./Sidebar";
import Body from "./Body";

export default function Profile() {
    return (
        <>
            <h1>Account Settings</h1>
            <Row>
                <Col>
                    <Sidebar></Sidebar>
                </Col>
                <Col>
                    <Body>
                        ada
                    </Body>
                </Col>
            </Row>
        </>
    )
}