import type { FC } from 'react';

import { Button, Checkbox, Flex, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { LoginParams } from '@/types';

const initialValues: LoginParams = {
  username: 'guest',
  password: 'guest',
  // remember: true
};

const LoginForm: FC = () => {
  const navigate = useNavigate();
  // const location = useLocation();

  const onFinished = async (form: LoginParams) => {
    console.log("Call API with request: ", form);
    // const res = dispatch(await loginAsync(form));

    // if (!!res) {
      // const search = formatSearch(location.search);
      // const from = search.from || { pathname: '/' };

      navigate("/");
    // }
  };

  return (
    <Flex justify='center' align='center' style={{
      backgroundColor: '#f0f2f5',
      height: '100vh'
    }}>
      <Form<LoginParams> onFinish={onFinished} initialValues={initialValues} style={{
        width: "300px",
        padding: "50px 40px 10px",
        borderRadius: "10px",
      }}>
        <h2 style={{
          textAlign: "center",
          fontWeight: "bold",
        }}>REACT ANTD ADMIN</h2>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please enter Username",
            },
          ]}
        >
          <Input
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please enter Password"
            },
          ]}
        >
          <Input
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>
            Remember User
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary" style={{ width: "100%" }}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </Flex>
  );
};

export default LoginForm;
