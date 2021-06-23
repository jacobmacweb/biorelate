import { Form, Input, Button, Col, Row, Divider } from "antd"
import { useEffect, useState } from "react";
import { getUserData } from "./webauth";
import "./Settings.scss";
import Icon from "@ant-design/icons";

export default function Settings() {
    const [form] = Form.useForm();
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        getUserData((err, res) => {
            console.log(res);
            setUser(res);
            if (!err) {
                form.setFieldsValue({
                    firstName: res.given_name,
                    lastName: res.family_name,
                    email: res.email,
                    phone: res.phone_number
                });
            }
        });
    }, []);
    return (
        <>
            <h2>General</h2>
            <p>Click field boxes to edit and then save your changes.</p>

            <Form
                form={form}
                layout="vertical"
                className="SettingsForm"
            >
                <label>Avatar</label>
                <Row className="avatar-row">
                    <img src={user?.picture} alt="" className="avatar" />
                    <Button className="upload">Upload</Button>
                    <Button>Remove</Button>
                </Row>
                <Divider></Divider>
                <Row>
                    <Col className="SettingsCol" flex="1">
                        <Form.Item label="First name" name="firstName">
                            <Input></Input>
                        </Form.Item>
                    </Col>
                    <Col className="SettingsCol" flex="1">
                        <Form.Item label="Last name" name="lastName">
                            <Input></Input>
                        </Form.Item>
                    </Col> 
                </Row>
                <Row>
                    <Col className="SettingsCol" flex="1">
                        <Form.Item label="Email" name="email">
                            <Input></Input>
                        </Form.Item>
                    </Col>
                    <Col className="SettingsCol" flex="1">
                        <Form.Item label="Phone number" name="phone">
                            <Input></Input>
                        </Form.Item>
                    </Col>
                </Row>

                <Divider></Divider>
                <Row>
                    <Col flex="1">
                        <h3>Delete account</h3>
                        <p>
                            By deleting your account you will lose all of your data.
                        </p>
                    </Col>
                    <Col className="delete-section">
                        <Button type="link">
                            Delete account...
                        </Button>
                    </Col>
                </Row>

                <Divider></Divider>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="submit">
                        Save changes
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}