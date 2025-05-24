import { Form, Input, Button } from "antd";
import logo from "@/assets/indiegamezone-logo.svg";
import { Link } from "react-router-dom";
import background from "@/assets/wow-bg.jpg";
import googleIcon from "@/assets/google_icon.png";
const LogInPage = () => {
  return (
    <div className="grid grid-cols-2 h-screen bg-zinc-800">
      <div
        className="bg-cover bg-center rounded-2xl relative overflow-hidden drop-shadow-xl"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="absolute h-full w-full bg-zinc-950/50"></div>
        <Link to={"/"} className="right-7 absolute bottom-5">
          <img src={logo} alt="" className="w-40" />
        </Link>
        <div className="absolute top-52 w-2/3 left-7">
          <p className="font-extrabold text-5xl">Play Bold. Publish Free.</p>
          <p className="">
            Empowering developers to publish their vision, and players to find
            the next big thing before it goes mainstream.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="w-full max-w-md p-4 shadow-lg rounded-xl">
          <img src={logo} alt="" className="mb-10" />
          <Form layout="vertical" autoComplete="off">
            <Form.Item
              label={<span className="font-bold">Email</span>}
              name="email"
              rules={[{ required: true, message: "Please enter your email" }]}
              style={{ marginBottom: 10 }}
            >
              <Input
                placeholder="Enter your email"
                style={{ paddingBlock: 10 }}
              />
            </Form.Item>

            <Form.Item
              label={<span className="font-bold">Password</span>}
              name="password"
              rules={[
                { required: true, message: "Please enter your password" },
              ]}
              style={{ marginBottom: 2 }}
            >
              <Input.Password
                placeholder="Enter your password"
                style={{ paddingBlock: 10 }}
              />
            </Form.Item>
            <div className="flex justify-end">
              <Link to={"/recover-password"} className="text-sx text-zinc-700">
                Forgot your passsword?
              </Link>
            </div>

            <div className="mt-5">
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  style={{
                    paddingBlock: 20,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  Log In
                </Button>
              </Form.Item>
            </div>
          </Form>
          <div className="flex justify-between gap-4 items-center">
            <div className="border border-zinc-500 flex-1"></div>
            <p>OR</p>
            <div className="border border-zinc-500 flex-1"></div>
          </div>
          <Button
            className="w-full mt-5"
            style={{
              paddingBlock: 20,
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            <img src={googleIcon} alt="" className="size-4 me-2" />
            Log in with Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
