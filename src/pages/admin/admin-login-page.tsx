import { Form, Input, Button } from "antd";
import logo from "@/assets/indiegamezone-logo.svg";
import { Link } from "react-router-dom";

const LoginAdminPage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url("https://wallpaperaccess.com/full/1630679.png")` }}
    >
      <div className="absolute inset-0 bg-zinc-950/50"></div>

      <div className="relative flex flex-col  md:flex-row w-full max-w-5xl  rounded-2xl  z-10">
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to </h1>
          <Link to={"/"} className="">
            <img src={logo} alt="" className="w-80" />
          </Link>
          <p className="text-lg md:text-xl text-center pt-9">
            This is the login page for Admin and Moderator only.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center p-6">
          <div className="w-full max-w-md bg-zinc-800/30 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
            <div className="flex justify-center mb-6">
              <span className="text-3xl font-bold text-white">Login</span>
            </div>
            <Form layout="vertical" autoComplete="off">
              <Form.Item
                label={<span className="font-bold text-white">Email</span>}
                name="email"
                rules={[{ required: true, message: "Please enter your Email" }]}
                className="mb-4"
              >
                <Input placeholder="Enter your Email" className="p-3 bg-zinc-700 text-white border-none rounded" />
              </Form.Item>
              <Form.Item
                label={<span className="font-bold text-white">Password</span>}
                name="password"
                rules={[{ required: true, message: "Please enter your password" }]}
                className="mb-2"
              >
                <Input.Password
                  placeholder="Enter your password"
                  className="p-3 bg-zinc-700 text-white border-none rounded"
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block className=" text-white font-bold uppercase py-3 rounded">
                  Login
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAdminPage;
