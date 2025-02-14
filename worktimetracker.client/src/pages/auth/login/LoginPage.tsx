import { useLogin } from "@/common/hooks/auth/useLogin";
import { LoginRequest } from "@/generate-api";
import { Button, Checkbox, Form, FormProps, Input } from "antd";

export function Component() {
  const { loading, login } = useLogin();

  const onFinish: FormProps<LoginRequest>["onFinish"] = (values) => {
    login(values);
  };

  const onFinishFailed: FormProps<LoginRequest>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="login-form"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 16 }}
      autoComplete="off"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 6, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{ offset: 6, span: 16 }}
        style={{ marginBottom: 0 }}
      >
        <Button type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
