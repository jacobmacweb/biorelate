import { Form, Input, Button } from "antd";
import { useState } from "react";
import "./API.scss";
import { getSession } from "./webauth";

export default function API() {
    const [form] = Form.useForm();

    const getAPICode = (values: any) => {
        getSession((err, res) => {
            if (!err) {
                form.setFieldsValue({key: res.accessToken});
            }
        });
    };

    return (
        <>
            <h2>Access token</h2>
            <p>Generate your unique key to access Galactic Data™</p>

            <Form
                form={form}
                layout="vertical"
                onFinish={getAPICode}
                className="APIForm"
            >
                <Form.Item label="Your unique key" name="key">
                    <Input placeholder="0000-0000-0000-0000" readOnly></Input>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="submit">
                        Generate key
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}