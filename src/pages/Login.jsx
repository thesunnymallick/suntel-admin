import React from "react";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import loginBackground from "../assets/loginBG.png";
import logo from "../assets/logo.png";
import { FiLogIn } from "react-icons/fi";

const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-50">
      <div className=" bg-white flex gap-8 w-[70%] rounded-md shadow-sm">
        <div className="w-[60%] flex justify-center bg-zinc-100">
          <img
            className="w-[90%] object-cover"
            src={loginBackground}
            alt="loginBG"
          />
        </div>

        <div className="w-[40%] bg-white">
          <div className="flex justify-center py-6">
            <img className="w-40" src={logo} alt="" />
          </div>
          <div className="px-6">
            <h2 className="text-3xl font-bold text-zinc-800">Log in.</h2>
            <p className="text-base text-zinc-500 pt-3">
              Log in with your data that you entered during register
            </p>
          </div>

          <form className="px-6 pt-4">
            <div className="flex flex-col py-1">
              <label className="text-zinc-700 font-medium py-1 required-label">
                Username
              </label>
              <Input
                size="large"
                placeholder="Enter your user"
                prefix={<FaRegUser className="text-zinc-500" />}
              />
            </div>

            <div className="flex flex-col py-1">
              <label className="text-zinc-700 font-medium py-1 required-label">
                Password
              </label>
              <Input.Password
              prefix={<RiLockPasswordLine className="text-zinc-500"/>}
              size="large"
                placeholder="Enter your password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </div>
            <spna className="text-blue-500 text-sm cursor-pointer float-right font-semibold py-1" >forgot password?</spna>

            <button className="w-[50%] h-10 bg-blue-500 text-white rounded-sm flex 
            justify-center items-center gap-2 mt-5 hover:bg-blue-600 transition-all">
              <span>Login</span>
              <span><FiLogIn/></span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
