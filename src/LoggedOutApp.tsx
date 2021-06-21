import { useAuth0 } from "@auth0/auth0-react";
import { Row, Col, Form, Input, Button, Alert } from "antd";
import { useState } from "react";
import "./LoggedOutApp.scss";
import webAuth, { loginUser } from "./webauth";

export default function LoggedOutApp({ setAuthenticated }: any) {
    const [form] = Form.useForm();
    const [error, setError] = useState<any>(null);
    

    const tryLogin = (values: { email: string, password: string }) => {
        loginUser(values.email, values.password, (err, res) => {
            if (err) {
                setError(
                    <Alert message={err.description} type="error" />
                );

                setTimeout(() => {
                    setError(null);
                }, 5000);
                console.log(err);
            } else {
                setAuthenticated(true);
            }
        })
    }
    return (
        <Row>
            <Col flex="1" className="LoginForm">
                <h1>Log in</h1>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={tryLogin}
                >
                    <Form.Item label="Email" name="email">
                        <Input placeholder="ramona@example.com"></Input>
                    </Form.Item>

                    <Form.Item label="Password" name="password">
                        <Input placeholder="•••••••••••••••" type="password"></Input>
                    </Form.Item>

                    { error }
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="submit">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>

                <small>Don't have an account yet? <a href="#">Sign up</a></small>

            </Col>
            <Col flex="1" className="ScienceImageCol">
                <img src="/science_background.png" alt="" className="ScienceImage" />
            </Col>
        </Row>
    )
}