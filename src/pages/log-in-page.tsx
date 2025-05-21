import { Form, Input, Button } from "antd";

const LogInPage = () => {
  return (
    <div className="flex h-screen">
    
      <div className="w-1/2 bg-[url('https://images.unsplash.com/photo-1665142726875-f931a29dcee3?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center" />

  
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-8 shadow-lg rounded-xl">
          <h2 className="text-2xl font-bold mb-6 text-center text-black">Login</h2>
          <Form layout="vertical" autoComplete="off">
            <Form.Item
              label={<span className="text-black">Email</span>}
              name="email"
              rules={[{ required: true, message: 'Please enter your email' }]}
            >
              <Input
                className="bg-white text-black"
                placeholder="Enter your email"
              />
            </Form.Item>

            <Form.Item
              label={<span className="text-black">Password</span>}
              name="password"
              rules={[{ required: true, message: 'Please enter your password' }]}
            >
              <Input.Password
                className="bg-white text-black"
                placeholder="Enter your password"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Log In
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
