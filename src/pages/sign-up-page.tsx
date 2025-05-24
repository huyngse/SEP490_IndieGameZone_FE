import { Form, Input, Button, Checkbox, CheckboxProps, Radio } from "antd";
import logo from "@/assets/indiegamezone-logo.svg";

import background from "@/assets/videogame-bg.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
const SignUpPage = () => {
  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const [role, setRole] = useState("player");
  return (
    <div className="h-screen bg-zinc-800">
      <div
        className="bg-cover bg-center rounded-2xl relative overflow-hidden drop-shadow-xl flex justify-center items-center min-h-screen overflow-auto"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="absolute h-full w-full bg-zinc-950/50"></div>
        <Link to={"/"} className="right-7 absolute bottom-5">
          <img src={logo} alt="" className="w-40" />
        </Link>
        <div className="flex items-center justify-center overflow-auto bg-zinc-800 px-10 py-5 rounded-2xl z-10">
          <div className="w-full max-w-md ">
            <div className="flex justify-center mb-10 px-30">
              <span className="text-4xl font-bold">Sign Up</span>
            </div>
            <Form layout="vertical" autoComplete="off">
              <Form.Item
                label={<span className="font-bold">User Name</span>}
                name=""
                rules={[{ required: true, message: "Please enter your user name" }]}
                style={{ marginBottom: 10 }}
              >
                <Input placeholder="Enter your user name" style={{ paddingBlock: 10 }} />
              </Form.Item>
              <Form.Item
                label={<span className="font-bold">Email</span>}
                name=""
                rules={[{ required: true, message: "Please enter your Email" }]}
                style={{ marginBottom: 10 }}
              >
                <Input placeholder="Enter your Email" style={{ paddingBlock: 10 }} />
              </Form.Item>
              <Form.Item
                label={<span className="font-bold">Password</span>}
                name="password"
                rules={[{ required: true, message: "Please enter your password" }]}
                style={{ marginBottom: 2 }}
              >
                <Input.Password placeholder="Enter your password" style={{ paddingBlock: 10 }} />
              </Form.Item>
              <Form.Item
                label={<span className="font-bold">Repeat password</span>}
                name="Repeat password"
                rules={[{ required: true, message: "Please enter your Repeat password" }]}
                style={{ marginTop: 4 }}
              >
                <Input.Password placeholder="Enter your password" style={{ paddingBlock: 10 }} />
              </Form.Item>
              <Form.Item
                label={<span className="font-bold">Account Type </span>}
                name="Role"
                rules={[{ required: true, message: "Please choose role" }]}
                style={{ marginTop: 4 }}
              >
                <div className="flex justify-center">
                  <Radio.Group
                    onChange={(e) => setRole(e.target.value)}
                    value={role}
                    optionType="button"
                    buttonStyle="solid"
                    style={{ display: "flex" }}
                  >
                    <Radio.Button style={{ width: 120, textAlign: "center" }} value="player">
                      Player
                    </Radio.Button>
                    <Radio.Button style={{ width: 120, textAlign: "center" }} value="developer">
                      Developer
                    </Radio.Button>
                  </Radio.Group>
                </div>
              </Form.Item>
              <div className="flex py-2">
                <Checkbox onChange={onChange}>
                  I accept the{" "}
                  <Link to={""}>
                    {" "}
                    <span className="text-red-400 underline">Terms of Service</span>
                  </Link>
                </Checkbox>
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
                    Sign Up
                  </Button>
                </Form.Item>
              </div>
            </Form>
            <div className="flex justify-center items-center">
              <span className="text-2xs font-mono">
                If you already have an account.
                <Link to={"/log-in"}>
                  <span className="text-blue-400">Please Login</span>
                </Link>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
