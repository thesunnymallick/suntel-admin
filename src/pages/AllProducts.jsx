import React from "react";
import Sidebar from "../layouts/SideBar";
import NavBar from "../layouts/NavBar";
import CardItem from "../components/dashboardCom/CardItem";
import netflixImge from "../assets/netflixBg.jpg";
import { Button, Input, Select, } from 'antd';
import { AudioOutlined } from '@ant-design/icons'
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);

const { Search } = Input;
const AllProducts = () => {
  return (
    <section className="flex gap-6 bg-zinc-50">
      <Sidebar />
      <div className="flex-1 ">
        <NavBar />

        <div className="px-6 flex  gap-6">
          <div className="w-[20%]  fixed top-[20%]">
            <div className="w-[100%] rounded-md shadow-sm bg-white px-6 py-4">
              <h2 className="text-zinc-800 text-xl font-bold">Filter</h2>


              <div className="p-2 flex flex-col gap-y-1 pt-4">
                <span className="text-base text-zinc-700 font-semibold">Search</span>
                <Search
                  placeholder="input search text"
                  enterButton="Search"
                  size="large"
                  // suffix={suffix}
                  // onSearch={onSearch}
                />
              </div>

              <div className="p-2 flex flex-col gap-y-1 pt-2">
                <span className="text-base text-zinc-700 font-semibold">Region</span>
                
                <Select
                style={{width:"100%", height:"40px"}}
                placeholder="Select Region"
                > 
                </Select>
              </div>

              <div className="p-2 flex flex-col gap-y-1 pt-2">
                <span className="text-base text-zinc-700 font-semibold">Currency</span>
                <Select
                style={{width:"100%", height:"40px"}}
                placeholder="Select Currency"
                > 
                </Select>
              </div>

              
       

              <div className="p-2 flex flex-col gap-y-1 pt-2">
                <span className="text-base text-zinc-700 font-semibold">Brand</span>
                <Select
                style={{width:"100%", height:"40px"}}
                placeholder="Select Brand"
                > 
                </Select>
              </div>


              <div className="flex justify-between p-2 ">
                <Button>Reset</Button>
                <Button type="primary">OK</Button>
              </div>



            </div>
          </div>
          <div className="w-[80%] ml-[27%] ">
            <div className="px-6 w-full">
              <h1 className="text-zinc-700 font-medium">Row1</h1>

              <div
                className="mt-2 
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-2  "
              >
                {Array.from({ length: 6 }).map((__, index) => {
                  return (
                    <CardItem
                      key={index}
                      name={"STEAM"}
                      img={netflixImge}
                      para={"Download and play thousand of your favorite game"}
                    />
                  );
                })}
              </div>


            </div>

            <div className="px-6 w-full">
              <h1 className="text-zinc-700 font-medium">Row2</h1>

              <div
                className="mt-2 
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-2  "
              >
                {Array.from({ length: 6 }).map((__, index) => {
                  return (
                    <CardItem
                      key={index}
                      name={"STEAM"}
                      img={netflixImge}
                      para={"Download and play thousand of your favorite game"}
                    />
                  );
                })}
              </div>


            </div>

            <div className="px-6 w-full">
              <h1 className="text-zinc-700 font-medium">Row3</h1>

              <div
                className="mt-2 
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-2  "
              >
                {Array.from({ length: 6 }).map((__, index) => {
                  return (
                    <CardItem
                      key={index}
                      name={"STEAM"}
                      img={netflixImge}
                      para={"Download and play thousand of your favorite game"}
                    />
                  );
                })}
              </div>


            </div>

            <div className="px-6 w-full">
              <h1 className="text-zinc-700 font-medium">Row4</h1>

              <div
                className="mt-2 
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-2  "
              >
                {Array.from({ length: 6 }).map((__, index) => {
                  return (
                    <CardItem
                      key={index}
                      name={"STEAM"}
                      img={netflixImge}
                      para={"Download and play thousand of your favorite game"}
                    />
                  );
                })}
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
