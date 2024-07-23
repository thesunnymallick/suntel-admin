import { Input, Select } from "antd";
import React, { useState } from "react";
import countryList from "react-select-country-list";
const PersonalInfo = () => {
  const [value, setValue] = useState(null);
  const options = countryList().getData();

  const handleChange = (value) => {
    setValue(value);
  };
  return (
    <div className="flex-1 bg-white rounded-md shadow-sm p-4">
      <div className="flex justify-between px-4">
        <h2 className="text-zinc-700 font-semibold text-xl">Personal Info</h2>
      </div>
      <div className="mt-4 px-6">
        <div className="flex gap-4">
          <div className="flex flex-col gap-2 w-[50%]">
            <label className="text-zinc-700 font-medium text-sm">
              First Name
            </label>
            <Input
              size="large"
              placeholder="First Name"
              //  prefix={<UserOutlined />}
            />
          </div>

          <div className="flex flex-col gap-2  w-[50%]">
            <label className="text-zinc-700  font-medium text-sm">
              Last Name
            </label>
            <Input
              size="large"
              placeholder="Last Name"
              //  prefix={<UserOutlined />}
            />
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          <div className="flex flex-col gap-2 w-[50%]">
            <label className="text-zinc-700 font-medium text-sm">Email</label>
            <Input
              size="large"
              placeholder="Email"
              //  prefix={<UserOutlined />}
            />
          </div>

          <div className="flex flex-col gap-2  w-[50%] ">
            <label className="text-zinc-700  font-medium text-sm">
              Select Country
            </label>
            <Select
              size="large"
              placeholder="Select Country"
              value={value}
              onChange={handleChange}
              showSearch
            >
              {options.map((country) => (
                <Select.Option  key={country.value} value={country.value}>
                  <div className="flex items-center">
                  <img
                    src={`https://flagcdn.com/w20/${country.value.toLowerCase()}.png`}
                    alt={country.label}
                    className="mr-2"
                  />
                 <span> {country.label}</span>
                  </div>
                </Select.Option>
              ))}
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
