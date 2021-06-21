import { Form, Input, Button, Col, Row } from "antd"
import { useEffect } from "react";
import { getUserData } from "./webauth";
import "./Settings.scss";

export default function Settings() {
    const [form] = Form.useForm();

    useEffect(() => {
        getUserData((err, res) => {
            if (!err) {
                form.setFieldsValue({
                    firstName: res.given_name,
                    lastName: res.family_name,
                    email: res.email,
                    phone: res.phone_number
                });
            }
        })
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

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="submit">
                        Save changes
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}