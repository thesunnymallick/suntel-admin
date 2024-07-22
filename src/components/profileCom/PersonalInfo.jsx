import { Input } from "antd";
import React from "react";

const PersonalInfo = () => {
  return (
    <div className="flex-1 bg-white rounded-md shadow-sm p-4">
      <div className="flex justify-between px-4">
        <h2 className="text-zinc-700 font-semibold text-xl">Personal Info</h2>
      </div>
      <div className="mt-4 px-6">
        <div className="flex gap-4">

          <div className="flex flex-col gap-2 w-[50%]">
            <label className="text-zinc-700 font-medium text-sm">First Name</label>
            <Input
              size="large"
              placeholder="First Name"
              //  prefix={<UserOutlined />}
            />
          </div>

          <div className="flex flex-col gap-2  w-[50%]">
            <label className="text-zinc-700  font-medium text-sm">Last Name</label>
            <Input
              size="large"
              placeholder="Last Name"
              //  prefix={<UserOutlined />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
