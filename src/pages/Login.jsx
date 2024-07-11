import React, { useState }  from "react";
import { Button, Input, message } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import loginBackground from "../assets/loginBG.png";
import logo from "../assets/logo.png";
import { FiLogIn } from "react-icons/fi";
import { useFormik } from "formik";
import * as Yup from "yup";
import apiService from "../utils/apiService";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addLogin } from "../feature/addLoginSlice";
// Define the validation schema
const loginSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  // Login data
  const loginData={
    email:"",
    password :"",
  }

  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [loading, setLoading]=useState(false);


    // Login handel
    const loginHandel=async(formData)=>{
    try {
      setLoading(true)
      const {data, status}= await apiService.post(`/api/v1/seller/login`, formData);
      if(status===200){
        setLoading(false)
        Cookies.set("token", data?.token);
        dispatch(addLogin(data));
        message.success("Login successfull!");
        navigate('/');
      }

    } catch (error) {
      setLoading(false);
      console.log(error)
    }
    }






   // handel input field
   const { handleChange, values, errors, touched, handleBlur, handleSubmit } =
   useFormik({
     initialValues: loginData,
     validationSchema: loginSchema,
     onSubmit: (values) => {
       if (values) {
         loginHandel(values)
       }
     },
   });


  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-50">
      <div className=" bg-white flex gap-8 w-[90%] lg:w-[70%] rounded-md shadow-sm">

        <div className=" hidden w-[60%] lg:flex justify-center bg-zinc-100">
          <img
            className="w-[90%] object-cover"
            src={loginBackground}
            alt="loginBG"
          />
        </div>

        <div className="w-[100%] lg:w-[40%] bg-white pb-6 lg:pb-2">
          <div className="flex justify-center py-6">
            <img className="w-40" src={logo} alt="" />
          </div>
          <div className="px-6">
            <h2 className="text-3xl font-bold text-zinc-800">Log in.</h2>
            <p className="text-base text-zinc-500 pt-3">
              Log in with your data that you entered during register
            </p>
          </div>

          <form onSubmit={handleSubmit} className="px-6 pt-4">
            <div className="flex flex-col py-1">
              <label className="text-zinc-700 font-medium py-1 required-label">
                Email
              </label>
              <Input
                size="large"
                placeholder="Enter your Email"
                prefix={<FaRegUser className="text-zinc-500" />}
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                status={touched.email && errors.email ? "error" : ""}

              />
              {touched.email && errors.email ? (
                <span className="text-red-500 text-sm">{errors.email}</span>
              ) : null}
            </div>

            <div className="flex flex-col py-1">
              <label className="text-zinc-700 font-medium py-1 required-label">
                Password
              </label>
              <Input.Password
              prefix={<RiLockPasswordLine className="text-zinc-500"/>}
              size="large"
              placeholder="Enter your password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              status={touched.password && errors.password? "error" :""}
              iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
               {touched.password && errors.password ? (
                <span className="text-red-500 text-sm">{errors.password}</span>
              ) : null}
            </div>


          <span className="text-blue-500 text-sm cursor-pointer float-right font-semibold py-1" >forgot password?</span>

           <Button
           loading={loading} 
           className="mt-4" 
           type="primary"  
           htmlType="submit" 
           icon={<FiLogIn/>} 
           size="large">
             Login
          </Button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;
