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
    <div className="flex-1 bg-white rounded-md shadow-sm px-2">
      
    {/* < --- PERSONAL INFO ---> */}
      <div className="py-2">
      <div className="flex justify-between px-2 pb-4">
        <h2 className="text-zinc-700 font-semibold text-xl">Personal Info</h2>
      </div>

      <div className="px-6">
        <div className="flex gap-4 pb-2">
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

        <div className="flex gap-4  ">
          <div className="flex flex-col gap-2  w-[50%] ">
            <label className="text-zinc-700  font-medium text-sm">
              Select Language
            </label>
            <Select
              size="large"
              placeholder="Select Country"
              value={value}
              onChange={handleChange}
              showSearch
            >
              {options.map((country) => (
                <Select.Option key={country.value} value={country.value}>
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

    {/* < --- CONTACT INFO ---> */}
      <div className="py-2">
     <div className="flex justify-between px-2 pb-4 ">
        <h2 className="text-zinc-700 font-semibold text-xl">Contact Info</h2>
      </div>

      <div className="px-6">
        <div className="flex gap-4">
          <div className="flex flex-col gap-2 w-[50%]">
            <label className="text-zinc-700 font-medium text-sm">
              Phone Number
            </label>
            <Input
              size="large"
              placeholder="Phone Number"
              //  prefix={<UserOutlined />}
            />
          </div>

          <div className="flex flex-col gap-2  w-[50%]">
            <label className="text-zinc-700  font-medium text-sm">Email</label>
            <Input
              size="large"
              placeholder="Email"
              //  prefix={<UserOutlined />}
            />
          </div>
        </div>
      </div>
       </div>
    {/* < --- ADDRESS INFO ---> */}
      <div className="py-2">
<div className="flex justify-between px-2 pb-4">
        <h2 className="text-zinc-700 font-semibold text-xl">Address Info</h2>
      </div>

      <div className="px-6">
        <div className="flex gap-4 pb-2">
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
                <Select.Option key={country.value} value={country.value}>
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

          <div className="flex flex-col gap-2 w-[50%]">
            <label className="text-zinc-700 font-medium text-sm">
             City 
            </label>
            <Input
              size="large"
              placeholder="Enter City Name"
              //  prefix={<UserOutlined />}
            />
          </div>


        </div>

        <div className="flex gap-4 pb-2">
      
          <div className="flex flex-col gap-2  w-[50%]">
            <label className="text-zinc-700  font-medium text-sm">
               Address1
            </label>
            <Input
              size="large"
              placeholder="Address1"
              //  prefix={<UserOutlined />}
            />
          </div>

          <div className="flex flex-col gap-2  w-[50%]">
            <label className="text-zinc-700  font-medium text-sm">
               Address2
            </label>
            <Input
              size="large"
              placeholder="Address2"
              //  prefix={<UserOutlined />}
            />
          </div>
        </div>

        <div className="flex gap-4 pb-2">
      
      <div className="flex flex-col gap-2  w-[50%]">
        <label className="text-zinc-700  font-medium text-sm">
           Zip Code
        </label>
        <Input
          size="large"
          placeholder="Zip Code"
          //  prefix={<UserOutlined />}
        />
      </div>

      
         </div>
      </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
