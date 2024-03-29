import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { Row, Col } from 'antd';

function Antdformdemo() {

    const onFinish = (values) => {
        console.log('Success:', values);
      };


      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    



    return (
        <div>
          <Row justify="center" align="middle">
            <Col   sm={2} md={1} lg={8} >
            <Form
            name="basic"
            labelCol={{
               
            }}
            wrapperCol={{
                
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
            label="Username"
            name="username"
            rules={[
            {
                required: true,
                message: 'Please input your username!',
            },
            ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 4,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 4,
    
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </Col>
    </Row>


        </div>
    )
}

export default Antdformdemo
