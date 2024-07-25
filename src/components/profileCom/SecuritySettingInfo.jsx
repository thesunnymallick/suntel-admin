import React, { useState } from "react";
import { Input, Radio, Switch } from "antd";
const SecuritySettingInfo = () => {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className="flex-1 bg-white rounded-md shadow-sm px-2">
      <div className="flex p-4">
        <div className="w-[50%] ">
          <h2 className="text-zinc-800 font-semibold text-xl">
            Change Password
          </h2>

          <div className="mt-4 px-6">
            <div className="flex flex-col py-2 ">
              <label className="text-zinc-700 font-medium text-sm">Old Password</label>
              <Input.Password size="large" placeholder="Enter old password" />
            </div>
            <div className="flex flex-col py-2 ">
              <label className="text-zinc-700 font-medium text-sm">New Password</label>
              <Input.Password size="large" placeholder="Enter New Password" />
            </div>
            <div className="flex flex-col py-2 ">
              <label className="text-zinc-700 font-medium text-sm">Confirm Password</label>
              <Input.Password size="large" placeholder="Enter Confiram Password" />
            </div>
          </div>
        </div>
        <div className="w-[50%]">
          <div className="flex items-center justify-between">
            <h2 className="text-zinc-800 font-semibold text-xl">
              Two–factor authentication
            </h2>
            <span>
              <Switch />
            </span>
          </div>
          
          <div className="mt-4 px-6">
          <div className="flex justify-center mt-10">
          <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>Email</Radio>
                <Radio value={2}>Phone Number</Radio>
          </Radio.Group>
          </div>
             <div className="flex flex-col gap-2 mt-4">
              {
                 value===1 && (
                  <>
                  <lable className="text-zinc-700 font-medium text-sm">Email (Optional)</lable>
                  <Input
                   size="large"
                   placeholder="Email"
                   //  prefix={<UserOutlined />}
                  />
                  </>
                 )
              }
              {
                 value===2 && (
                  <>
                  <lable className="text-zinc-700 font-medium text-sm">Phone Number (Optional)</lable>
                  <Input
                   size="large"
                   placeholder="Phone Number"
                   //  prefix={<UserOutlined />}
                  />
                  </>
                 )
              }
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SecuritySettingInfo;
